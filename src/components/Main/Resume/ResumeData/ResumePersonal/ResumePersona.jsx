import styles from "./ResumePersona.module.css";

export default function ResumePersonal() {
  return (
    <div className={styles.personal}>
      <h2 className={styles.name}>Arthur Bloomberg</h2>
      <ul>
        <li>
          <img className={styles.svg} src="/icons/map-marker.svg" alt="Location icon" />
          <span className={styles.city}>New York City</span>
          <span>United States</span>
        </li>
        <li>
          <img className={styles.svg} src="/icons/email.svg" alt="Email icon" />
          <span>arthurbloomberg@gmail.com</span>
        </li>
        <li>
          <img className={styles.svg} src="/icons/cellphone.svg" alt="Mobile phone icon" />
          <span>01062375053</span>
        </li>
        <li>
          <img className={styles.svg} src="/icons/linkedin.svg" alt="LinkedIn icon" />
          <span>in/bloomberg</span>
        </li>
      </ul>
    </div>
  );
}
