import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./assets/css/App.css";
import "./assets/css/pdfprint.css";

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}
// To do:
// 1. loading animation for pdf download (spinner)
// 2. add page break for pdf
// 3. change accent color
// 4. add forms and useState react for content change

export default App;
