import Header from "@components/Header/Header.jsx";
import Resume from "@components/Resume/Resume.jsx";
import "@assets/css/App.css";
import "@assets/css/pdfprint.css";

function App() {
  return (
    <>
      <Header />
      <Resume />
    </>
  );
}
// To do:
// 1. loading animation for pdf download (spinner)
// 2. add page break for pdf
// 3. change accent color
// 4. add forms and useState react for content change
// 5. remove unecessary folder nesting
// 8. implement correct key assignment to mapped out elements in Experience form preview form
// 11. center section buttons that toggle form next to their sections correctly.
// 12. Make Download PDF button disabled during edit mode
// 13. Edit mode toggles back resume final state
export default App;
