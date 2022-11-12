import './Grid.css'
import GridItem from "./GridItem.jsx";

const Grid = ({ links }) => {
  return (
    <div className='grid'>
      {links.map(link => (
        <GridItem key={link._id} item={link} />
      ))}
    </div>
  );
};

export default Grid