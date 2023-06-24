export async function validatePhotoUpload(files: FileList) {
  const response = await fetch('/api/get-uploaded-photo-count');
  const { count } = await response.json();
  const remainingUploads = 10 - count;

  const fileArray = Array.from(files);

  if (fileArray.length > remainingUploads || fileArray.length > 10) {
    const uploadLimitMessage = `You can only upload a maximum of ${remainingUploads} more photo(s).`;
    showAlert(uploadLimitMessage);
    return false;
  }

  const totalSize = fileArray.reduce((acc, file) => acc + file.size, 0);
  if (totalSize > 10 * 1024 * 1024) {
    const sizeLimitMessage =
      'The total file size is too large and cannot exceed 10MB.';
    showAlert(sizeLimitMessage);
    return false;
  }

  return true;
}

function showAlert(message: string) {
  // Modify this function to display the alert in your desired way
  // For example, you can use a custom modal, a toast notification, or modify the UI directly.
  alert(message);
}
