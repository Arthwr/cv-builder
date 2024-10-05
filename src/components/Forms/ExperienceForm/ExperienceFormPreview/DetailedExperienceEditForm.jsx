import SectionButton from "@components/SharedComponents/SectionButton.jsx";
import removeIconUrl from "@assets/icons/removeSectionIcon.svg";

export default function DetailedExperienceEditForm({ formData, onChange, onRemove }) {
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
        <legend>Key points:</legend>
        <div className="input-bullet-group">
          {formData.bullets.map((item, index) => (
            <div key={item.id}>
              <label>
                <span>{index + 1}.</span>
                <textarea type="text" id={`bullets.${index}.info`} value={item.info} onChange={onChange} />
              </label>
              <SectionButton
                iconUrl={removeIconUrl}
                label={"remove"}
                className={"action-icon"}
                onClick={() => onRemove(item.id)}
              />
            </div>
          ))}
        </div>
      </fieldset>
    </>
  );
}
