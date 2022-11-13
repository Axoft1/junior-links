import "./Grid.css";
// import GridItem from "./GridItem.jsx";
import moviesPng from "../../icons/MOVIES.png";
import calendarPng from "../../icons/calendar.png";
import matrixPng from "../../icons/matrix.png";
import gamePng from "../../icons/game.jpg";
import layoutPng from "../../icons/layout.jpg";
import parse from "html-react-parser";

const Grid = ({ links }) => {
  const movies = links[0];
  const game = links[1];
  const layout = links[2];
  const calendar = links[3];
  const matrix = links[4];
  console.log(links);
  return (
    // <div className='grid'>
    //   {links.map(link => (
    //     <GridItem key={link._id} item={link} />
    //   ))}
    // </div>
    <div className="grid">
      <div className="card">
        <div className="front">
          <a
            href={movies.link}
            rel={"noreferrer"}
            target="_blank"
            className="item"
          >
            <div className="gradient">
              <img src={moviesPng} alt="" />
            </div>
          </a>
        </div>
        <a
          href={movies.link}
          rel={"noreferrer"}
          target="_blank"
          className="back"
        >
          <div className="contentItem">
            <h1>{movies.title}</h1>
            <div className="titleItem"></div>
            <span>{parse(movies.description)}</span>
          </div>
        </a>
      </div>
      <div className="card">
        <div className="front">
          <a
            href={game.link}
            rel={"noreferrer"}
            target="_blank"
            className="item"
          >
            <div className="gradient">
              <img src={gamePng} alt="" />
            </div>
          </a>
        </div>
        <a href={game.link} rel={"noreferrer"} target="_blank" className="back">
          <div className="contentItem">
            <h1>{game.title}</h1>
            <div className="titleItem"></div>
            <span>{parse(game.description)}</span>
          </div>
        </a>
      </div>
      <div className="card">
        <div className="front">
          <a
            href={layout.link}
            rel={"noreferrer"}
            target="_blank"
            className="item"
          >
            <div className="gradient">
              <img src={layoutPng} alt="" />
            </div>
          </a>
        </div>
        <a
          href={layout.link}
          rel={"noreferrer"}
          target="_blank"
          className="back"
        >
          <div className="contentItem">
            <h1>{layout.title}</h1>
            <div className="titleItem"></div>
            <span>{parse(layout.description)}</span>
          </div>
        </a>
      </div>
      <div className="card">
        <div className="front">
          <a
            href={calendar.link}
            rel={"noreferrer"}
            target="_blank"
            className="item"
          >
            <div className="gradient">
              <img src={calendarPng} alt="" />
            </div>
          </a>
        </div>
        <a
          href={calendar.link}
          rel={"noreferrer"}
          target="_blank"
          className="back"
        >
          <div className="contentItem">
            <h1>{calendar.title}</h1>
            <div className="titleItem"></div>
            <span>{parse(calendar.description)}</span>
          </div>
        </a>
      </div>
      <div className="card">
        <div className="front">
          <a
            href={matrix.link}
            rel={"noreferrer"}
            target="_blank"
            className="item"
          >
            <div className="gradient">
              <img src={matrixPng} alt="" />
            </div>
          </a>
        </div>
        <a
          href={matrix.link}
          rel={"noreferrer"}
          target="_blank"
          className="back"
        >
          <div className="contentItem">
            <h1>{matrix.title}</h1>
            <div className="titleItem"></div>
            <span>{parse(matrix.description)}</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Grid;
