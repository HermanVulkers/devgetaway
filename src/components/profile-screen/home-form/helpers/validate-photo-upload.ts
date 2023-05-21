export async function validatePhotoUpload(files: FileList) {
  const response = await fetch('/api/get-uploaded-photo-count');
  const { count } = await response.json();
  const remainingUploads = 10 - count;

  const fileArray = Array.from(files);

  if (fileArray.length > remainingUploads || fileArray.length > 10) {
    alert(`You can upload a maximum of ${remainingUploads} more photo(s).`);
    return false;
  }

  const totalSize = fileArray.reduce((acc, file) => acc + file.size, 0);
  if (totalSize > 10 * 1024 * 1024) {
    alert('The total size of uploaded files cannot exceed 10MB.');
    return false;
  }

  return true;
}
