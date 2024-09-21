import { useState } from "react";
import AccentColor from "@components/Resume/AccentColor/AccentColor.jsx";
import ResumeActions from "@components/Resume/ResumeActions/ResumeActions.jsx";
import ResumePersonal from "@components/Resume/ResumePersonal/ResumePersonal.jsx";
import ResumeExperience from "@components/Resume/ResumeExperience/ResumeExperience.jsx";
import ResumeEducation from "@components/Resume/ResumeEducation/ResumeEducation.jsx";
import ResumeCoursework from "@components/Resume/ResumeCoursework/ResumeCoursework.jsx";
import ResumeSkills from "@components/Resume/ResumeSkills/ResumeSkills.jsx";

export default function Resume() {
  const [isEditMode, setEditMode] = useState(false);

  const toggleEditing = () => setEditMode((prev) => !prev);

  return (
    <main>
      <ResumeActions toggleEditing={toggleEditing} />
      <div className="resume-background">
        <div id="resume">
          <AccentColor />
          <div className="resume-group">
            <ResumePersonal isEditMode={isEditMode} />
            <ResumeExperience isEditMode={isEditMode} />
            <ResumeEducation isEditMode={isEditMode} />
            <ResumeCoursework isEditMode={isEditMode} />
            <ResumeSkills isEditMode={isEditMode} />
          </div>
        </div>
      </div>
    </main>
  );
}
