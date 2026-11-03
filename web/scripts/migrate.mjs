import fs from 'fs';
import path from 'path';
import mysql from 'mysql2/promise';

async function migrate() {
  const jsonPath = path.join(process.cwd(), 'data', 'workflows.json');
  if (!fs.existsSync(jsonPath)) {
    console.log('File workflows.json tidak ditemukan.');
    return;
  }

  const raw = fs.readFileSync(jsonPath, 'utf-8');
  const workflows = JSON.parse(raw);
  console.log(`Ditemukan ${workflows.length} panduan untuk dipindahkan...`);

  const connection = await mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'stepflow_db'
  });

  // Perbesar kapasitas kolom URL & Judul agar muat URL panjang
  console.log('Memperbarui struktur kolom tabel...');
  await connection.execute(`ALTER TABLE steps MODIFY COLUMN url TEXT NULL`);
  await connection.execute(`ALTER TABLE steps MODIFY COLUMN page_title TEXT NULL`);
  await connection.execute(`ALTER TABLE workflows MODIFY COLUMN target_url TEXT NULL`);

  for (const wf of workflows) {
    console.log(`Menyalin panduan: ${wf.title}...`);
    await connection.execute(
      `INSERT INTO workflows (id, title, description, category, target_url, author, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, FROM_UNIXTIME(? / 1000), FROM_UNIXTIME(? / 1000))
       ON DUPLICATE KEY UPDATE 
         title = VALUES(title), 
         description = VALUES(description),
         category = VALUES(category),
         target_url = VALUES(target_url),
         author = VALUES(author)`,
      [
        wf.id,
        wf.title,
        wf.description || '',
        wf.category || 'General SOP',
        wf.targetUrl || '',
        wf.author || 'Tim Perusahaan',
        wf.createdAt || Date.now(),
        wf.updatedAt || Date.now()
      ]
    );

    if (wf.steps && wf.steps.length > 0) {
      await connection.execute('DELETE FROM steps WHERE workflow_id = ?', [wf.id]);
      for (let idx = 0; idx < wf.steps.length; idx++) {
        const st = wf.steps[idx];
        await connection.execute(
          `INSERT INTO steps (id, workflow_id, order_index, action_type, title, description, url, page_title, screenshot_url, highlight_json, callout_json, blur_regions_json)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            st.id || `st_${idx}_${Date.now()}`,
            wf.id,
            idx + 1,
            st.actionType || 'click',
            st.title || `Langkah ${idx + 1}`,
            st.description || '',
            st.url || '',
            st.pageTitle || '',
            st.annotatedScreenshot || st.screenshot || '',
            st.highlight ? JSON.stringify(st.highlight) : null,
            st.callout ? JSON.stringify(st.callout) : null,
            st.blurRegions ? JSON.stringify(st.blurRegions) : null
          ]
        );
      }
    }
  }

  console.log('✅ Berhasil memindahkan seluruh panduan ke MySQL Laragon!');
  await connection.end();
}

migrate().catch(console.error);
