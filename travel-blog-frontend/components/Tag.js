const Tag = ({ title }) => {
  const getColor = () => {
    let color;
    switch (title.toLowerCase()) {
      case "voyage":
        color = "rgb(210,138,138)";
        break;
      case "gastronomie":
        color = "rgb(169,210,138)";
        break;
      case "famille":
        color = "rgb(138,173,138)";
        break;
      default:
        color = "rgb(129,138,210)";
    }
    return color;
  };
  return (
    <div style={{ background: getColor() }} className="tag">
      {title}
    </div>
  );
};

export default Tag;
