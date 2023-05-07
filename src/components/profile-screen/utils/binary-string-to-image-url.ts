export function binaryStringToImageURL(base64String: string) {
  const byteArray = new Uint8Array(Buffer.from(base64String, 'base64'));

  let mimeType = 'image/jpeg';
  if (
    byteArray[0] === 0x89 &&
    byteArray[1] === 0x50 &&
    byteArray[2] === 0x4e &&
    byteArray[3] === 0x47
  ) {
    mimeType = 'image/png';
  } else if (
    byteArray[0] === 0x47 &&
    byteArray[1] === 0x49 &&
    byteArray[2] === 0x46
  ) {
    mimeType = 'image/gif';
  }

  const blob = new Blob([byteArray], { type: mimeType });
  return URL.createObjectURL(blob);
}
