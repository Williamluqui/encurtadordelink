export const validateUrl = (url: string): boolean => {
  if (!url) return true;

  const urlLowerCase = url.toLowerCase();
  const urlRegex = /^http(s){0,1}:\/\//;

  return urlRegex.test(urlLowerCase);
};
