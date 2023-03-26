import "./App.css";
import Navbar from "./Navbar";
import Intro from "./Intro";
import SectionTwo from "./SectionTwo";
import ListOfProperties from "./ListOfProperties";
import SectionThree from "./sectionThree";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <SectionTwo></SectionTwo>
      <ListOfProperties></ListOfProperties>
      <SectionThree></SectionThree>
    </div>
  );
}

export default App;
