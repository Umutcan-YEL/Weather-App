import Modal from "react-bootstrap/Modal";
import { useTranslation } from "react-i18next";
function LocationModal() {
  const { t } = useTranslation();
  return (
    <>
      <Modal show={true} backdrop="static" keyboard={false}>
        <Modal.Body>{t("location-request")} </Modal.Body>
      </Modal>
    </>
  );
}

export default LocationModal;
