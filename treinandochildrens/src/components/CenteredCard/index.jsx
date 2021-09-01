import "./style.css";

const CenteredCard = ({ children }) => {
  return (
    <div className="player">
      <span>{children}</span>
    </div>
  );
};
export default CenteredCard;
