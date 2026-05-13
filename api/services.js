export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  try {
    const params = new URLSearchParams();
    params.append('key', 'e6428cab83136a49fae4a92a9aa4b1cc');
    params.append('action', 'services');

    const response = await fetch('https://smmfollows.com/api/v2', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString()
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch(e) {
    res.status(500).json({error: e.message});
  }
}
