import Image from "next/image";
import Logo from "../../public/images/agência.svg";
import Link from "next/link";
import styles from "./header.module.scss";
import Button from "../button/index";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logotipo}>
        <Image src={Logo} alt="Logo" />
      </div>
      <div className={styles.menu}>
        <Link href="https://google.com.br">Home</Link>
        <Link href="/">O que fazemos</Link>
        <Link href="/">Cases</Link>
      </div>
      <div className={styles.action}>
        <Button title="Fale conosco" />
      </div>
    </div>
  );
};

export default Header;
