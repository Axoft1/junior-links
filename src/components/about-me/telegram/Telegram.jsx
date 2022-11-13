import  './Telegram.css'
import icon from "../../../icons/telegram.svg"

const Telegram = ({me}) => {
  return (
    <div className="buttonTelegram">
      <a
        href="https://t.me/Axoft10"
        target="_blank"
        rel="noreferrer"
        title="Telegram"
      >
        <span>
          <img src={icon} alt="" height={18} width={18} />
        </span>
        <span>Telegram</span>
      </a>
    </div>
  );
}

export default Telegram