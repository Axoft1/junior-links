import "./Grid.css";
import parse from "html-react-parser";

const GridItem = ({ item }) => {
  console.log(item.title);
  return (
    <div className='card'>
      <div className='front'>
        <a
          href={item.link}
          rel={"noreferrer"}
          target="_blank"
          className='item'
        >
          <div
            className='gradient'
            // style={{
            //   backgroundImage: `linear-gradient(to right, ${item.gradient.from} 0%, ${item.gradient.to} 51%, ${item.gradient.from} 100%)`,
            // }}
          >
           
            <img src={item.icon.path} alt="" />
          </div>
        </a>
      </div>
      <a
        href={item.link}
        rel={"noreferrer"}
        target="_blank"
        className='back'
      >
        <div className='contentItem'>
          <h1>{item.title}</h1>
          <div className='titleItem'></div>
          <span>{parse(item.description)}</span>
        </div>
      </a>
    </div>
  );
};

export default GridItem;
