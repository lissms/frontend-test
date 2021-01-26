const getData = () => {
  return fetch("https://run.mocky.io/v3/c88b31e7-8810-4de7-9065-90a363aa8454")
    .then((response) => response.json())
    .then((data) => {
      return data.response;
    });
};
export default {
  getData,
};
