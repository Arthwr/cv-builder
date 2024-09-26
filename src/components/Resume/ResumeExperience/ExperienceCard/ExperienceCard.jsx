export default function ExperienceCard({ data }) {
  const { position, company, location, period } = data.summary;

  return (
    <>
      <ul className="summary">
        <li>{position}</li>
        <li>{company}</li>
        <li>{location}</li>
        <li>{period}</li>
      </ul>
      <ul className="bullets">
        {data.bullets.map((item) => (
          <li key={item.id}>{item.info}</li>
        ))}
      </ul>
    </>
  );
}
