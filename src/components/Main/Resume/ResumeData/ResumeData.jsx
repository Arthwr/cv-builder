import ResumePersonal from "./ResumePersonal/ResumePersona";
import ResumeExperience from "./ResumeExperience/ResumeExperience";
import ResumeEducation from "./ResumeEducation/ResumeEducation";
import ResumeCoursework from "./ResumeCoursework/ResumeCoursework";
import ResumeSkills from "./ResumeSkills/ResumeSkills";
import ResumeEditButton from "./ResumeEditButton/ResumeEditButton";

export default function ResumeData() {
  return (
    <>
      <div className="resume-container">
        <ResumeEditButton />
        <ResumePersonal />
      </div>
      <div className="resume-container">
        <ResumeEditButton />
        <ResumeExperience />
      </div>
      <div className="resume-container">
        <ResumeEditButton />
        <ResumeEducation />
      </div>
      <div className="resume-container">
        <ResumeEditButton />
        <ResumeCoursework />
      </div>
      <div className="resume-container">
        <ResumeEditButton />
        <ResumeSkills />
      </div>
    </>
  );
}
