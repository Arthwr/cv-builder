import Resume from "./Resume/Resume";
import ResumeActions from "./ResumeActions/ResumeActions";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <main className={styles.main}>
      <div className={styles["cv-bg"]}>
        <div className={styles["cv-container"]}>
          <Resume />
        </div>
        <ResumeActions />
      </div>
    </main>
  );
}
