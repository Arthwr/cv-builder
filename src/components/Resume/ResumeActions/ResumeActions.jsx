import EditModeSwitch from "@components/Resume/ResumeActions/EditModeSwitch/EditModeSwitch.jsx";
import GeneratePDF from "@components/Resume/ResumeActions/GeneratePDF/GeneratePDF.jsx";

export default function ResumeActions({ toggleEditing }) {
  return (
    <div className="actions no-print">
      <EditModeSwitch toggleEditing={toggleEditing} />
      <GeneratePDF />
    </div>
  );
}
