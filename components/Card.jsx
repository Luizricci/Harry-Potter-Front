import styles from "../styles/wizardCard.module.css";

export default function WizardCard({ wizard }) {
  return (
    <div className={styles.card}>
            <img
                src={wizard.image || "Sem imagem"}
                alt={wizard.name}
                className={styles.avatar}
            />
        <h3 className={styles.name}>{wizard.name}</h3>
        <p>Casa: {wizard.house_name}</p>
    </div>
  );
}