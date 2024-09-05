import Resume from "./Resume/Resume";
import ResumeActions from "./ResumeActions/ResumeActions";

export default function Main() {
  return (
    <main>
      <div className="cv-bg">
        <Resume />
        <ResumeActions />
      </div>
    </main>
  );
}
