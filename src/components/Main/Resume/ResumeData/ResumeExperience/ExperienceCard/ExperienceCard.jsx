export default function ExperienceCard({ data }) {
  const { position, company, location, period } = data.summary;
  const { bullets } = data;

  return (
    <>
      <ul className="summary">
        <li>{position}</li>
        <li>{company}</li>
        <li>{location}</li>
        <li>{period}</li>
      </ul>
      <ul className="bullets">
        {bullets.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </>
  );
}
