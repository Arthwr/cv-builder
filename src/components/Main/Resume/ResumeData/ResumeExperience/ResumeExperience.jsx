import ExperienceCard from "./ExperienceCard/ExperienceCard";
import data from "@data/mockData";

export default function ResumeExperience() {
  return (
    <div className="experience">
      <h3>Experience</h3>
      {data.experience.map((data) => (
        <ExperienceCard key={data.id} data={data} />
      ))}
    </div>
  );
}
