const isImage = (url: string) => {
  return (
    /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url) ||
    /^data:image\/(jpeg|jpg|png|webp|avif|gif|svg\+xml);base64,/.test(url)
  );
};

const checkImageType = (fileType: string) => {
  return (
    fileType === 'image/jpeg' ||
    fileType === 'image/jpg' ||
    fileType === 'image/png' ||
    fileType === 'image/gif' ||
    fileType === 'image/svg+xml' ||
    fileType === 'image/bmp' ||
    fileType === 'image/webp'
  );
};

const checkImageFromUrlLib = {
  isImage,
  checkImageType,
};

export default checkImageFromUrlLib;
