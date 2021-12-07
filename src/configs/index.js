const {
  REACT_APP_DEVELOPMENT_SERVER_URL,
  REACT_APP_PRODUCTION_SERVER_URL,
  NODE_ENV,
} = process.env;

const URL = "http://localhost:1337";
if (NODE_ENV === "production") {
  URL = "https://portfolio-backend-12345.herokuapp.com";
}
console.log(URL , 'url')
export default URL;
