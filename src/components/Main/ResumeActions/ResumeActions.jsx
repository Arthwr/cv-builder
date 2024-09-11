import EditModeSwitch from "./EditModeSwitch/EditModeSwitch";
import GeneratePDF from "./GeneratePDF/GeneratePDF";

export default function ResumeActions() {
  return (
    <div className="actions no-print">
      <EditModeSwitch />
      <GeneratePDF />
    </div>
  );
}
