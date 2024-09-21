import ExperienceCard from "@components/Resume/ResumeExperience/ExperienceCard/ExperienceCard.jsx";

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
