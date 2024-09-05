import EducationCard from "./EducationCard/EducationCard";
import data from "@data/mockData";

export default function ResumeEducation() {
  return (
    <div className="education">
      <h3>Education</h3>
      {data.education.map((item) => (
        <EducationCard key={item.id} data={item} />
      ))}
    </div>
  );
}
