export default function ExperienceEditForm({ formData, onChange }) {
  return (
    <>
      <fieldset className="experience-summary-form">
        <legend>Summary:</legend>
        <label htmlFor="summary.position">
          <span>Position: </span>
          <input
            type="text"
            id="summary.position"
            name="summary.position"
            value={formData.summary.position}
            onChange={onChange}
            required
          />
        </label>
        <label htmlFor="summary.company">
          <span>Company: </span>
          <input
            type="text"
            id="summary.company"
            name="summary.company"
            value={formData.summary.company}
            onChange={onChange}
            required
          />
        </label>
        <label htmlFor="summary.location">
          <span>Location: </span>
          <input
            type="text"
            id="summary.location"
            name="summary.location"
            value={formData.summary.location}
            onChange={onChange}
            required
          />
        </label>
        <label htmlFor="summary.period">
          <span>Period: </span>
          <input
            type="text"
            id="summary.period"
            name="summary.period"
            value={formData.summary.period}
            onChange={onChange}
            required
          />
        </label>
      </fieldset>
      <fieldset className="experience-bullet-form">
        <legend>Key position moments:</legend>
        <div>
          {formData.bullets.map((item, index) => (
            <label key={item.id}>
              <span>{index + 1}</span>
              <textarea type="text" id={`bullets.${index}.info`} value={item.info} onChange={onChange} />
            </label>
          ))}
        </div>
      </fieldset>
    </>
  );
}
