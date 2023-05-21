export const submitHomeForm = async (values, userId: string) => {
  const s3PhotoUrls = await Promise.all(
    values.photos.map(async (file) => {
      const filename = encodeURIComponent(file.name);
      const fileType = encodeURIComponent(file.type);

      const res = await fetch(
        `/api/upload-photo-urls?fileName=${filename}&fileType=${fileType}`
      );
      const { url, fields, bucket, region } = await res.json();
      const formData = new FormData();

      Object.entries({ ...fields, file }).forEach(([key, value]) => {
        formData.append(key, value as string);
      });

      const upload = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      if (upload.ok) {
        const s3Url = `https://${bucket}.s3.${region}.amazonaws.com/${userId}/${filename}`;
        return s3Url;
      } else {
        console.error('Upload failed.');
      }
    })
  );

  console.log('values', values);

  const response = await fetch('/api/create-home', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...values, s3PhotoUrls }),
  });

  if (response.ok) {
    console.log('Home successfully saved.');
    return { success: true, s3PhotoUrls };
  } else {
    console.error('An error occurred while saving the home.');
    return { success: false, s3PhotoUrls };
  }
};
