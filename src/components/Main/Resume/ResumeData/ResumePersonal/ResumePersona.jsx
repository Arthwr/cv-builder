import data from "@data/mockData";
import styles from "./ResumePersona.module.css";

export default function ResumePersonal() {
  const { name, location, email, phone, linkedin } = data.personal;

  return (
    <div className={styles.personal}>
      <h2 className={styles.name}>{name}</h2>
      <ul>
        <li>
          <img className={styles.svg} src="/icons/map-marker.svg" alt="Location icon" />
          <span className={styles.city}>{location}</span>
        </li>
        <li>
          <img className={styles.svg} src="/icons/email.svg" alt="Email icon" />
          <span>{email}</span>
        </li>
        <li>
          <img className={styles.svg} src="/icons/cellphone.svg" alt="Mobile phone icon" />
          <span>{phone}</span>
        </li>
        <li>
          <img className={styles.svg} src="/icons/linkedin.svg" alt="LinkedIn icon" />
          <span>{linkedin}</span>
        </li>
      </ul>
    </div>
  );
}
