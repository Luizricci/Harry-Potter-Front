import styles from "../styles/wizardCard.module.css";
import Image from "next/image";

export default function WizardCard({ wizard }) {
  return (
    <div className={styles.card}>
            <img
                src={wizard.image.startsWith("http")? wizard.image : `http://localhost:3000/uploads/${wizard.image}`}
                // Se começar com https, coloca o link full/completo, senao, vc o luiz cria o link
                // http://localhost:3000/uploads/${wizard.image}
                alt={wizard.name}
                className={styles.avatar}
            />
        <h3 className={styles.name}>{wizard.name}</h3>
        <p>Casa: {wizard.house_name}</p>
    </div>
  );
}