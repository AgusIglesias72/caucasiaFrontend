import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoItem = ({ icon }) => {
  return (
    <li className="item-icon">
      <FontAwesomeIcon className="item" icon={icon} size="8x" />
      <p className="info-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro minima
        libero vel at quibusdam, delectus perspiciatis repellat excepturi
        voluptatem. Excepturi minima eius vel magni odio suscipit! Reprehenderit
        consequatur fugiat placeat!
      </p>
    </li>
  );
};

export default InfoItem;
