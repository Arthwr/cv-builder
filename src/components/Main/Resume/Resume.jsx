import AccentColor from "./AccentColor/AccentColor";
import ResumeData from "./ResumeData/ResumeData";
import styles from "./Resume.module.css";

export default function Resume() {
  return (
    <>
      <div>
        <AccentColor />
        <div className={styles["resume-data-container"]}>
          <ResumeData />
        </div>
      </div>
    </>
  );
}
