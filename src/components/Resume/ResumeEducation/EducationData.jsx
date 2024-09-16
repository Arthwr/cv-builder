import EducationCard from "./EducationCard/EducationCard";

export default function EducationData({ educationData }) {
  return (
    <div className="education">
      <h3>Education</h3>
      {educationData.map((item) => (
        <EducationCard key={item.id} data={item} />
      ))}
    </div>
  );
}
