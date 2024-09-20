import SectionButton from "@components/SharedComponents/SectionButton";
import editIconUrl from "@assets/icons/editSectionIcon.svg";
import removeIconUrl from "@assets/icons/removeSectionIcon.svg";

export default function ExperienceFormPreview({ formInfo }) {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Position</th>
          <th scope="col">Company</th>
          <th scope="col">Location</th>
          <th scope="col">Period</th>
        </tr>
      </thead>
      <tbody>
        {formInfo.map((item) => {
          const { position, company, location, period } = item.summary;

          return (
            <tr key={item.id}>
              <td>{position}</td>
              <td>{company}</td>
              <td>{location}</td>
              <td>{period}</td>
              <td className="table-actions">
                <SectionButton iconUrl={editIconUrl} label={"edit"} className={"action-icon"} />
                <SectionButton iconUrl={removeIconUrl} label={"remove"} className={"action-icon"} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
