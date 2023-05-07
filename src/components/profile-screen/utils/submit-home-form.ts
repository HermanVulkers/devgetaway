export async function submitHomeForm(values) {
  const photoBase64Strings = await Promise.all(
    values.photos.map(async (photo) => {
      const buffer = await photo.arrayBuffer();
      const base64String = Buffer.from(buffer).toString('base64');
      return base64String;
    })
  );

  const response = await fetch('/api/create-home', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...values, photos: photoBase64Strings }),
  });

  if (response.ok) {
    console.log('Home successfully saved.');
    return true;
  } else {
    console.error('An error occurred while saving the home.');
    return false;
  }
}
