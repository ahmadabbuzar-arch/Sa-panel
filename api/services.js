export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const params = new URLSearchParams();
    params.append('key', '4c7b73bd82d0c2dc0226d6cf2121bb01');
    params.append('action', 'services');
    const response = await fetch('https://smmwiz.com/api/v2', {
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
