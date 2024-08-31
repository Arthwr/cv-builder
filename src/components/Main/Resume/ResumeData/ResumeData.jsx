import ResumePersonal from "./ResumePersonal/ResumePersona";
import ResumeExperience from "./ResumeExperience/ResumeExperience";
import ResumeEducation from "./ResumeEducation/ResumeEducation";
import ResumeCoursework from "./ResumeCoursework/ResumeCoursework";
import ResumeSkills from "./ResumeSkills/ResumeSkills";

export default function ResumeData() {
  return (
    <>
      <ResumePersonal />
      <ResumeExperience />
      <ResumeEducation />
      <ResumeCoursework />
      <ResumeSkills />
    </>
  );
}
