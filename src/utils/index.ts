export const normalizeVendorFilename = (fileName: string) =>
  fileName.replace(/\//g, '_') + '.js';
