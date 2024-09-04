export default function EducationCard({ data }) {
  return (
    <>
      <ul className="summary">
        <li>{data.degree}</li>
        <li>{data.institution}</li>
      </ul>
      <ul className="summary-edu">
        <li>{data.location}</li>
        <li>{data.year}</li>
      </ul>
    </>
  );
}
