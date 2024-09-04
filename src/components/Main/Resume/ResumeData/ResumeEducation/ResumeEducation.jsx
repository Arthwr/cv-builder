import EducationCard from "./EducationCard/EducationCard";
import data from "@data/mockData";
import styles from "./ResumeEducation.module.css";

export default function ResumeEducation() {
  return (
    <div className={styles.education}>
      <h3>Education</h3>
      {data.education.map((data) => (
        <EducationCard key={data.id} data={data} />
      ))}
    </div>
  );
}
