const API = "https://api.coinlore.net/api/";

const getData = async (id) => {
  const apiURL = id ? `${API}ticker/?id=${id}` : `${API}tickers/`;

  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch Error..!!", error);
  }
};

export default getData;
