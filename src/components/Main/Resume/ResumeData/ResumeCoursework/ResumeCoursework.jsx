import data from "@data/mockData";

export default function ResumeCoursework() {
  return (
    <div className="coursework">
      <h3>Coursework</h3>
      <ul>
        {data.coursework.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
