import EducationCard from "./EducationCard/EducationCard";
import data from "@data/mockData";

export default function ResumeEducation() {
  return (
    <div className="education">
      <h3>Education</h3>
      {data.education.map((data) => (
        <EducationCard key={data.id} data={data} />
      ))}
    </div>
  );
}
