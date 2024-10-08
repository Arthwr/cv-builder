import EducationCard from "@components/Resume/ResumeEducation/EducationCard/EducationCard.jsx";

export default function EducationData({ educationData }) {
  return (
    <div className="education">
      <h3>Education</h3>
      {educationData.map((item) => (
        <div className="no-break" key={item.id}>
          <EducationCard data={item} />
        </div>
      ))}
    </div>
  );
}
