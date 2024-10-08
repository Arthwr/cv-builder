import ExperienceCard from "@components/Resume/ResumeExperience/ExperienceCard/ExperienceCard.jsx";

export default function ExperienceData({ experienceData }) {
  return (
    <div className="experience">
      <h3>Experience</h3>
      {experienceData.map((item) => (
        <div className="no-break" key={item.id}>
          <ExperienceCard  data={item} />
        </div>
      ))}
    </div>
  );
}
