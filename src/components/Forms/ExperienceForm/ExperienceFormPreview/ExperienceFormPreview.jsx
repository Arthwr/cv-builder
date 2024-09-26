import { Fragment, useState } from "react";
import DetailedExperienceView from "@components/Forms/ExperienceForm/ExperienceFormPreview/DetailedExperienceView/DetailedExperienceView.jsx";
import SectionButton from "@components/SharedComponents/SectionButton.jsx";
import editIconUrl from "@assets/icons/editSectionIcon.svg";
import removeIconUrl from "@assets/icons/removeSectionIcon.svg";

export default function ExperienceFormPreview({ formInfo, onRemove }) {
  const [expandedRow, setExpandedRow] = useState(null);

  const toggleEdit = (id) => {
    setExpandedRow((prev) => (prev === id ? null : id));
  };

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
          const isExpanded = expandedRow === item.id;

          return (
            <Fragment key={item.id}>
              <tr>
                <td>{position}</td>
                <td>{company}</td>
                <td>{location}</td>
                <td>{period}</td>
                <td className="table-actions">
                  <SectionButton
                    iconUrl={editIconUrl}
                    label={"edit"}
                    className={"action-icon"}
                    onClick={() => toggleEdit(item.id)}
                  />
                  <SectionButton
                    iconUrl={removeIconUrl}
                    label={"remove"}
                    className={"action-icon"}
                    onClick={() => onRemove(item.id)}
                  />
                </td>
              </tr>
              <tr>{isExpanded && <DetailedExperienceView data={item} />}</tr>
            </Fragment>
          );
        })}
      </tbody>
    </table>
  );
}
