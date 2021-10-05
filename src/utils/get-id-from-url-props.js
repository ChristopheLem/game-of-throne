const getIdFromUrlProps = (url) => {
  const urlArray = url.split("/");
  const id = urlArray[urlArray.length - 1];
  return id;
};

export default getIdFromUrlProps;
