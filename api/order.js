export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if(req.method === 'OPTIONS') { res.status(200).end(); return; }
  if(req.method !== 'POST') { res.status(405).json({error:'Method not allowed'}); return; }
  const { service, link, quantity } = req.body;
  if(!service || !link || !quantity) { res.status(400).json({error:'Missing fields'}); return; }
  try {
    const params = new URLSearchParams();
    params.append('key', '0b68d9318d2b5a0eda2d08ebdbfb1e3c');
    params.append('action', 'add');
    params.append('service', service);
    params.append('link', link);
    params.append('quantity', quantity);
    const response = await fetch('https://smmsbi.com/api/v2', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: params.toString()
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch(e) {
    res.status(500).json({error: e.message});
  }
}
