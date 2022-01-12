// 작성자 : 우형래
export function getDate(myDate: Date) {
  const date = new Date(myDate);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// 작성자 : 우형래
export const replaceTags = (tags: string) => {
  return tags
    .split("#")
    .filter((el) => el !== "")
    .map((el) => "#" + el);
};

// 작성자 : 우형래
export const replaceUrl = (url: string) => {
  return `https://storage.googleapis.com/${url}`;
};

// 작성자 : 우형래
export const getCategory = (title: string) => {
  return title.split("$%$%")[0];
};

// 작성자 : 우형래
export const getTitle = (title: string) => {
  return title.split("$%$%")[1];
};

// 작성자 : 우형래
export const replaceAddr = (addr: string) => {
  return addr.split(" ")[0] + " " + addr.split(" ")[1];
};

// 작성자 : 권태욱
export const emailRegExp = (email: string) => {
  const regExp =
    /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

  return regExp.test(email);
};

// 작성자 : 우형래
export const replaceSubway = (subwayName: string) => {
  return subwayName.split(",");
};

// 작성자 : 우형래
export const replaceCourseImage = (area: string) => {
  return `/images/sub/runday-course/${area}.jpg`;
};

// 작성자 : 김영탁
export const priceToString = (price: number) => {
  return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// 작성자 : 우형래
export function getTemp(temp: string) {
  return (Number(temp) - 273.15).toFixed(1);
}
