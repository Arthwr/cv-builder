import Resume from "./Resume/Resume";
import ResumeActions from "./ResumeActions/ResumeActions";
import "./Main.module.css";

export default function Main() {
  return (
    <main>
      <div className="cv-container">
        <Resume />
        <ResumeActions />
      </div>
    </main>
  );
}
