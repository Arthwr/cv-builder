import AccentColor from "./AccentColor/AccentColor";
import ResumeData from "./ResumeData/ResumeData";

export default function Resume() {
  return (
    <>
      <div id="resume">
        <AccentColor />
        <div className="resume-data-container">
          <ResumeData />
        </div>
      </div>
    </>
  );
}
