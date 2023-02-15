// @ts-ignore
import styles from "./Modal.module.scss";

interface IModal {
  onClickIcons?: () => void;
}

export const Modal = ({ onClickIcons }: IModal) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapperImg} onClick={onClickIcons}>
        <img src="/icons/x.png" width="16" height="16" />
      </div>
      <div className={styles.wrapperGiphy}>
        <img src="https://media.giphy.com/media/reDuckpHdUNX2/giphy.gif" />
      </div>
    </div>
  );
};
