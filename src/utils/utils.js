export const isMobileView = () => {
  let isMobile = false;
  if (typeof window.orientation !== "undefined") {
    isMobile = true;
  }
  return isMobile;
};
