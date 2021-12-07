const loadData = (URL) => fetch(URL).then((result) => result.json());
export default loadData;
