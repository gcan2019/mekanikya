const { execSync } = require('child_process');
const fs = require('fs');

console.log("Fetching current D1 site_content...");
const raw = execSync('npx wrangler d1 execute ofirma-db --config dist/server/wrangler.json --remote --json --command "SELECT content FROM site_content WHERE id = 1"');
const parsed = JSON.parse(raw.toString());
const contentStr = parsed[0].results[0].content;
const content = JSON.parse(contentStr);

let deactivatedCount = 0;
for (const p of content.products) {
  p.status = 'inactive';
  deactivatedCount++;
}

console.log(`Deactivated ${deactivatedCount} products in memory.`);

const escaped = JSON.stringify(content).replace(/'/g, "''");
const sql = `UPDATE site_content SET content = '${escaped}', updated_at = '${new Date().toISOString()}' WHERE id = 1;`;
fs.writeFileSync('deactivate.sql', sql, 'utf8');

console.log("Applying update to remote D1...");
execSync('npx wrangler d1 execute ofirma-db --config dist/server/wrangler.json --remote --file=deactivate.sql', { stdio: 'inherit' });
fs.unlinkSync('deactivate.sql');
console.log("Successfully deactivated all products in remote D1 database!");
