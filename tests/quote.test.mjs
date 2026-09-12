import test from 'node:test';
import assert from 'node:assert/strict';
import { quoteMessage } from '../lib/quote.ts';

function form(values = {}) {
  const data = new FormData();
  for (const [key,value] of Object.entries({name:'Örnek & Atölye',quantity:'10',...values})) data.set(key,value);
  return data;
}

test('quote preserves Turkish characters, dimensions and technical details', () => {
  const message=quoteMessage(form({diameter:'38.1',body:'402',length:'413',shaft:'12',rollerType:'Avare / serbest dönen',shaftEnd:'Pim delikli',weight:'24.5',environment:'Nemli',notes:'Yedek parça ihtiyacı'}),'Çelik');
  for (const text of ['Örnek & Atölye','Dış çap (D): 38.1 mm','Gövde boyu (B): 402 mm','Toplam mil boyu (L): 413 mm','Mevcut mil ucu: Pim delikli','24.5 kg','Çalışma ortamı: Nemli']) assert.ok(message.includes(text));
  const url=new URL('https://wa.me/905302068714?text='+encodeURIComponent(message));
  assert.equal(url.searchParams.get('text'),message);
  assert.equal(url.pathname,'/905302068714');
});

test('unknown dimensions remain optional and are not invented', () => {
  const message=quoteMessage(form(),'Birlikte belirleyelim');
  assert.ok(!message.includes(' mm'));
  assert.ok(!message.includes(' kg'));
});

test('sample requests carry optional roller selection information without requiring dimensions', () => {
  const message=quoteMessage(form({application:'Koli, 400 × 300 mm',pitch:'100',speed:'12.5',reference:'Fuji FF7 örneği',sample:'Evet'}),'Birlikte belirleyelim');
  for (const text of ['Koli, 400 × 300 mm','merkez mesafesi: 100 mm','Hat hızı: 12.5 m/dk','Fuji FF7 örneği','Numune:']) assert.ok(message.includes(text));
  assert.ok(!message.includes('Dış çap (D)'));
  for(const key of ['pitch','speed']) for(const invalid of ['0','-1','NaN','Infinity','100001']) assert.throws(()=>quoteMessage(form({[key]:invalid}),'Çelik'));
  for(const key of ['application','reference']) assert.throws(()=>quoteMessage(form({[key]:'x'.repeat(201)}),'Çelik'));
});

test('inconsistent total shaft length is rejected', () => {
  assert.throws(()=>quoteMessage(form({body:'400',length:'390'}),'Çelik'),/Toplam mil boyu/);
});

test('invalid quantities and dimensions are rejected', () => {
  for(const quantity of ['0','-1','1.5','1000001','Infinity']) assert.throws(()=>quoteMessage(form({quantity}),'Çelik'));
  for(const diameter of ['-1','NaN','Infinity','0','100001']) assert.throws(()=>quoteMessage(form({diameter}),'Çelik'));
  assert.throws(()=>quoteMessage(form({weight:'-3'}),'Çelik'));
});

test('names, option values and text limits are validated', () => {
  assert.throws(()=>quoteMessage(form({name:'   '}),'Çelik'));
  assert.throws(()=>quoteMessage(form({rollerType:'Unknown option'}),'Çelik'));
  assert.throws(()=>quoteMessage(form({shaftEnd:'Unknown option'}),'Çelik'));
  assert.throws(()=>quoteMessage(form(),'Unknown option'));
  assert.throws(()=>quoteMessage(form({notes:'x'.repeat(1501)}),'Çelik'));
});
