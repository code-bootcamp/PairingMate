export function getDate(myDate: Date) {
  const date = new Date(myDate);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export const replaceTags = (tags: string) => {
  return tags
    .split("#")
    .filter((el) => el !== "")
    .map((el) => "#" + el);
};

export const replaceUrl = (url: string) => {
  return `https://storage.googleapis.com/${url}`;
};

export const getCategory = (title: string) => {
  return title.split("$%$%")[0];
};

export const getTitle = (title: string) => {
  return title.split("$%$%")[1];
};

export const replaceAddr = (addr: string) => {
  return addr.split(" ")[0] + " " + addr.split(" ")[1];
};
