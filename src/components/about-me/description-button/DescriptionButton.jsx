import "./DescriptionButton.css";
import cn from 'classnames'
import parse  from "html-react-parser";
import { useOutside } from "../../../hooks/useOutside";

const DescriptionButton = ({ description }) => {
  const { ref, isShow, setIsShow } = useOutside(false);
  return (
    <div className='parent' ref={ref}>
      <button
        onClick={() => setIsShow(!isShow)}
        className={ cn({
          'active': isShow,
        })}
      >
        <span>Обо мне</span>
      </button>
      {isShow && (
        <article>{parse(description)}</article>
      )}
    </div>
  );
};

export default DescriptionButton;