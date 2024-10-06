export default function CourseworkData({ courseworkData }) {
  const formatStringText = (data) => {
    return data
      .split(",")
      .map((item) => item.trim())
      .join(", ");
  };

  return (
    <div className="coursework">
      <h3>Coursework</h3>
      <div> {formatStringText(courseworkData)}</div>
    </div>
  );
}
