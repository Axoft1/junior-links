import "./EmailButton.css";

const EmailButton = ({me}) => {
  return (
    <div className="buttonEmail">
      <a
        href="mailto:info@htmllessons.ru"
        target="_blank"
        rel="noreferrer"
        title="info@htmllessons.ru"
      >
        <span>
          <img src={me.iconMail.path} alt="" height={18} width={18} />
        </span>
        <span>Email</span>
      </a>
    </div>
  );
};

export default EmailButton;
