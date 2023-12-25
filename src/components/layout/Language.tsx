import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Language = () => {
  const { i18n } = useTranslation();

  const changeLanguage = async (language: string) => {
    await i18n.changeLanguage(language);
  };

  return (
    <ButtonGroup style={{ float: "right" }}>
      <Button
        variant="primary"
        className={i18n.language == "en" ? "button-selected" : "lang-button"}
        onClick={() => changeLanguage("en")}
      >
        English
      </Button>
      <Button
        variant="primary"
        className={i18n.language == "tr" ? "button-selected" : "lang-button"}
        onClick={() => changeLanguage("tr")}
      >
        Türkçe
      </Button>
    </ButtonGroup>
  );
};

export default Language;
