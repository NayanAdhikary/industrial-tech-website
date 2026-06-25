const fs = require('fs');
const https = require('https');

const screens = [
  { name: 'industries.html', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2NlOWZkMjE1NjJjYTQ4Y2E4YjkxMjI3NDU2NjEyYjM0EgsSBxCsnKPegwYYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTQ5NDQ3MTQzODQ4NTk0NzY5MA&filename=&opi=89354086' },
  { name: 'solutions.html', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzFkYWY3NWJlZjdkNDQ0NDM4Y2JkZGFjNjBkYmM5YTNmEgsSBxCsnKPegwYYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTQ5NDQ3MTQzODQ4NTk0NzY5MA&filename=&opi=89354086' },
  { name: 'computer-vision.html', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzkyN2E2MmI0YjRkZTRjN2FiNTJlMDgwNDIwNmZjNDY4EgsSBxCsnKPegwYYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTQ5NDQ3MTQzODQ4NTk0NzY5MA&filename=&opi=89354086' }
];

fs.mkdirSync('stitch-screens', { recursive: true });

screens.forEach(screen => {
  https.get(screen.url, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
      fs.writeFileSync(`stitch-screens/${screen.name}`, data);
      console.log(`Downloaded ${screen.name}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${screen.name}:`, err.message);
  });
});
