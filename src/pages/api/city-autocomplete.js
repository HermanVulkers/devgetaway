import { Client } from '@googlemaps/google-maps-services-js';

export default async function handler(req, res) {
  const input = req.query.input;

  if (!input) {
    return res.status(400).json({ error: 'Input is required.' });
  }

  const client = new Client();

  try {
    const response = await client.placeAutocomplete({
      params: {
        input,
        key: process.env.GOOGLE_API,
        types: ['(cities)'],
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching suggestions', error);
    res.status(500).json({ error: 'Failed to fetch suggestions.' });
  }
}
