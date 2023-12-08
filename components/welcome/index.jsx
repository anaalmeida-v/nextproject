import Button from "../button/index";
import styles from "./welcome.module.scss";
import BannerWelcome from '../../public/images/Grupo 2098.svg'
import Image from 'next/image'

const Welcome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Melhor agência de marketing do bairro</h1>
        <p>
          Somos uma agência de performance digital, aceleramos vendas e
          aquisição de leads para grandes marcas.
        </p>
        <Button title="Aumentar vendas" kind="secundary" />
      </div>
      <div className={styles.image}>
        <Image className={styles.img} src={BannerWelcome} alt="Banner Welcome" />
      </div>
    </div>
  );
};
export default Welcome;
