import { Button } from "../components/button";
import { Modal } from "../components/modal";
// @ts-ignore
import styles from "./Page.module.scss";
import { useState } from "react";

export const Page = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className={styles.container}>
      {!openModal && (
        <Button title="💫 Открыть окно" onClick={handleOpenModal} />
      )}
      {openModal && <Modal onClickIcons={handleCloseModal} />}
    </div>
  );
};
