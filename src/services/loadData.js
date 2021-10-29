const loadData = async (URL) => {
  const json = await fetch(URL);
  const response = await json.json();
  return response;
};

export default loadData