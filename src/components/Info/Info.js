import InfoItem from "./InfoItem";
import "./Info.css";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faShip } from "@fortawesome/free-solid-svg-icons";

const Info = () => {
  return (
    <ul className="info">
      <InfoItem icon={faInstagram} />
      <InfoItem icon={faWhatsapp} />
      <InfoItem icon={faShip} />
    </ul>
  );
};

export default Info;
