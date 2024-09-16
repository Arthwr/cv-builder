export default function CourseworkData({ coureworkData }) {
  return (
    <div className="coursework">
      <h3>Coursework</h3>
      <ul>
        {coureworkData.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
