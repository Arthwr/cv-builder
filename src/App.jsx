import Header from "@components/Header/Header";
import Resume from "@components/Resume/Resume";
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
// 7. clean up import statements and utilize "@import statements"
// 8. implement correct key assignment to mapped out elements in Experience form preview form
// 9. unify cancel bullet section button and edit bullet section button in a separate component.
export default App;
