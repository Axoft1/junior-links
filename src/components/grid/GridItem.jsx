import "./Grid.css";
import parse from "html-react-parser";

const GridItem = ({
  item: {
    link,
    icon: { path },
    title,
    description,
  },
}) => {
  
  return (
    <div className="card">
      <div className="front">
        <a href={link} rel={"noreferrer"} target="_blank" className="item">
          <div className="gradient">
            <img src={require(`../../icons/${path}`)} alt="" />
          </div>
        </a>
      </div>
      <a href={link} rel={"noreferrer"} target="_blank" className="back">
        <div className="contentItem">
          <h1>{title}</h1>
          <div className="titleItem"></div>
          <span>{parse(description)}</span>
        </div>
      </a>
    </div>
  );
};

export default GridItem;
