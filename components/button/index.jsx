import styles from "./button.module.scss";

/*
Props

title: string
kind: "primary" | "secundary"
*/

const Button = ({ title, kind }) => {
  const generationClassByKind = () => {
    if (kind === "secundary") return styles.secundary;
    return styles.primary;
  };

  return (
    <button className={`${styles.button} ${generationClassByKind()}`}>
      {title}
    </button>
  );
};
export default Button;
