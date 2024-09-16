import EditModeSwitch from "./EditModeSwitch/EditModeSwitch";
import GeneratePDF from "./GeneratePDF/GeneratePDF";

export default function ResumeActions({ toggleEditing }) {
  return (
    <div className="actions no-print">
      <EditModeSwitch toggleEditing={toggleEditing} />
      <GeneratePDF />
    </div>
  );
}
