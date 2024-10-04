export default function EducationFormInput({ data, index, onChange }) {
  return (
    <div className="form-input education-input">
      <label htmlFor="degree">
        <span>Degree:</span>
        <input type="text" id={`${index}.degree`} name="degree" value={data.degree} onChange={onChange} required />
      </label>
      <label htmlFor="institution">
        <span>Institution:</span>
        <input type="text" id={`${index}.institution`} name="institution" value={data.institution} onChange={onChange} required />
      </label>
      <label htmlFor="location">
        <span>Location:</span>
        <input type="text" id={`${index}.location`} name="location" value={data.location} onChange={onChange} required />
      </label>
      <label htmlFor="year">
        <span>Year:</span>
        <input type="text" id={`${index}.year`} name="year" value={data.year} onChange={onChange} required />
      </label>
    </div>
  );
}
