import "./ContactCard.css";

const ContactCard = ({ img }) => {
  const bgColor = {
    // position: "fixed",
    width: "500px",
    height: "300px",
  };

  const snippetPosition = {
    width: "300px",
    height: "200px",
    objectFit: "contain",
  };
  return (
    <div className="snippetContainer" style={bgColor}>
      <img src={img} alt="" style={snippetPosition} />
    </div>
  );
};

export default ContactCard;
