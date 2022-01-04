const size = {
  mobile: "475px",
  tablet: "767px",
  laptop: "1024px",
  desktop: "1240px",
};

const fontSize = {
  fs14: "0.875rem",
  fs16: "1rem",
  fs18: "1.125rem",
  fs20: "1.25rem",
  fs24: "1.5rem",
  fs28: "1.75rem",
  fs30: "1.875rem",
  fs35: "2.188rem",
  fs40: "2.5rem",
  fs45: "2.815rem",
  fs50: "3.125rem",
  fs55: "3.438rem",
  fs60: "3.75rem",
};

const MarginTop = {
  mt10: "0.625rem",
  mt20: "1.25rem",
  mt30: "1.875rem",
  mt40: "2.5rem",
  mt50: "3.125rem",
  mt60: "3.75rem",
  mt70: "4.375rem",
  mt80: "5rem",
  mt90: "5.625rem",
  mt100: "6.25rem",
};

const MarginBottom = {
  mb10: "0.625rem",
  mb20: "1.25rem",
  mb30: "1.875rem",
  mb40: "2.5rem",
  mb50: "3.125rem",
  mb60: "3.75rem",
  mb70: "4.375rem",
  mb80: "5rem",
  mb90: "5.625rem",
  mb100: "6.25rem",
};

const PaddingTop = {
  pt10: "0.625rem",
  pt20: "1.25rem",
  pt30: "1.875rem",
  pt40: "2.5rem",
  pt50: "3.125rem",
  pt60: "3.75rem",
  pt70: "4.375rem",
  pt80: "5rem",
  pt90: "5.625rem",
  pt100: "6.25rem",
};

const PaddingBottom = {
  pb10: "0.625rem",
  pb20: "1.25rem",
  pb30: "1.875rem",
  pb40: "2.5rem",
  pb50: "3.125rem",
  pb60: "3.75rem",
  pb70: "4.375rem",
  pb80: "5rem",
  pb90: "5.625rem",
  pb100: "6.25rem",
};

const theme = {
  colorBase: "#213358",
  colorPoint: "#324e86",
  fontColorBase: "#333333",
  fontColorLight: "#555555",
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
  fontsize: { ...fontSize },
  MarginTop: { ...MarginTop },
  MarginBottom: { ...MarginBottom },
  PaddingTop: { ...PaddingTop },
  PaddingBottom: { ...PaddingBottom },
};

export default theme;
