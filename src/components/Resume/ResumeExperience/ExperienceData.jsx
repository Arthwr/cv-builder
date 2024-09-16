import ExperienceCard from "./ExperienceCard/ExperienceCard";

export default function ExperienceData({ experienceData }) {
  return (
    <div className="experience">
      <h3>Experience</h3>
      {experienceData.map((item) => (
        <ExperienceCard key={item.id} data={item} />
      ))}
    </div>
  );
}
