import { useState } from "react";
import AccentColor from "./AccentColor/AccentColor";
import ResumeActions from "./ResumeActions/ResumeActions";
import ResumePersonal from "./ResumePersonal/ResumePersonal";
import ResumeExperience from "./ResumeExperience/ResumeExperience";
import ResumeEducation from "./ResumeEducation/ResumeEducation";
import ResumeCoursework from "./ResumeCoursework/ResumeCoursework";
import ResumeSkills from "./ResumeSkills/ResumeSkills";

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
