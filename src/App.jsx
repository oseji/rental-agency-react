import "./App.css";
import Navbar from "./Navbar";
import Intro from "./Intro";
import SectionTwo from "./SectionTwo";
import ListOfProperties from "./ListOfProperties";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <SectionTwo></SectionTwo>
      <ListOfProperties></ListOfProperties>
    </div>
  );
}

export default App;
