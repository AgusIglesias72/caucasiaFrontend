import "./SectionTitle.css";

const SectionTitle = ({ title }) => {
  return (
    <div className="section">
      <h2 className="section-title">{title}</h2>
    </div>
  );
};

export default SectionTitle;
