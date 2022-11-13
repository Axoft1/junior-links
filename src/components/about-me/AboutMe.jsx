import DescriptionButton from "./description-button/DescriptionButton.jsx";
import EmailButton from "./email-button/EmailButton.jsx";
import Telegram from "./telegram/Telegram";
import './AboutMe.css'
import logo from "../../icons/avatar.jpeg";

const AboutMe = ({ me }) => {
  const { siteName, description } = me;
console.log();

  return (
    <div className="me">
      <div className="image_wrapper">
        <img
          src={logo}
          width={190}
          height={190}
          className="imageMe"
          alt={siteName}
          quality={100}
        />
      </div>
      <div className="headingMe">
        <span className="spanMe">Все проекты в одном месте</span>
      </div>
      <EmailButton me={me} />
      <Telegram me={me} />
      <DescriptionButton description={description} />
    </div>
  );
};

export default AboutMe;
