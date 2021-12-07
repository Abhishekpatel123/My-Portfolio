// feature or page etc comming soon
const CommingSoon = ({ inactive, title }) => (
  <div
    style={{ marginLeft: "1rem" }}
    className={`${inactive ? "inactive" : ""}`}
  >
    {title}
  </div>
);

export default CommingSoon;
