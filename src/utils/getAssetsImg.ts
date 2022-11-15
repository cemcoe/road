export const getAssetURL = (image: any) => {
  return new URL(`../assets/img/${image}`, import.meta.url).href;
};
