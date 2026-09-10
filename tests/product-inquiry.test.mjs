import test from 'node:test';
import assert from 'node:assert/strict';
import {additionalProducts} from '../lib/additional-products.ts';
import {productInquiryMessage} from '../lib/product-inquiry.ts';

function form(){const data=new FormData();data.set('customer','Örnek & Firma');data.set('quantity','2');return data;}
test('eleven additional product families have unique routes and field names',()=>{
 assert.equal(additionalProducts.length,11);
 assert.equal(new Set(additionalProducts.map(p=>p.id)).size,11);
 for(const product of additionalProducts){assert.equal(product.href,'/'+product.id);assert.equal(new Set(product.fields.map(f=>f.id)).size,product.fields.length);for(const field of product.fields)assert.ok(!['customer','quantity','notes'].includes(field.id));}
});
for(const product of additionalProducts){
 test(product.id+': message contains only this product and its fields',()=>{
  const data=form();for(const field of product.fields)data.set(field.id,field.kind==='number'?'5':'Özel ölçü');
  const message=productInquiryMessage(product,data);
  assert.ok(message.includes(product.title.toLocaleLowerCase('tr-TR')));
  for(const field of product.fields)assert.ok(message.includes(field.label+': '));
  assert.ok(!message.includes('konveyör rulosu'));
  const url=new URL('https://wa.me/905302068714?text='+encodeURIComponent(message));assert.equal(url.searchParams.get('text'),message);
 });
 test(product.id+': optional values are omitted; invalid numbers rejected',()=>{
  const data=form();const message=productInquiryMessage(product,data);
  for(const field of product.fields)assert.ok(!message.includes(field.label+':'));
  const numeric=product.fields.find(f=>f.kind==='number');data.set(numeric.id,'-1');assert.throws(()=>productInquiryMessage(product,data));data.set(numeric.id,'Infinity');assert.throws(()=>productInquiryMessage(product,data));
 });
}
test('whole counts, name and note lengths are validated',()=>{
 const product=additionalProducts.find(p=>p.fields.some(f=>f.unit==='adet'));const data=form();
 data.set(product.fields.find(f=>f.unit==='adet').id,'1.5');assert.throws(()=>productInquiryMessage(product,data));
 const blank=form();blank.set('customer','  ');assert.throws(()=>productInquiryMessage(product,blank));
 const long=form();long.set('notes','a'.repeat(1501));assert.throws(()=>productInquiryMessage(product,long));
 const zero=form();zero.set('quantity','0');assert.throws(()=>productInquiryMessage(product,zero));
});
