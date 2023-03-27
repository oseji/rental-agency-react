import "./App.css";
import Navbar from "./Navbar";
import Intro from "./Intro";
import SectionTwo from "./SectionTwo";
import ListOfProperties from "./ListOfProperties";
import SectionThree from "./sectionThree";
import AddNewProperty from "./AddNewProperty";
import Reviews from "./Reviews";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <SectionTwo></SectionTwo>
      <ListOfProperties></ListOfProperties>
      <SectionThree></SectionThree>
      <AddNewProperty></AddNewProperty>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
}

export default App;
