import clsx from "clsx";
import styles from "./alert.module.css";

export default function Alert({ type, title }) {
  return (
    <div
      className={clsx(styles.root, {
        [styles.danger]: type === "DANGER",
        [styles.info]: type === "INFO",
        [styles.warning]: type === "WARNING",
      })}
    >
      {title}
    </div>
  );
}
