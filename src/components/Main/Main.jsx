import Resume from "./Resume/Resume";
import ResumeActions from "./ResumeActions/ResumeActions";

export default function Main() {
  return (
    <main>
      <ResumeActions />
      <div className="cv-bg">
        <Resume />
      </div>
    </main>
  );
}
