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
// 6. turn resume-container in a custom component
// 7. clean up import statements and utilize "@import statements"
export default App;
