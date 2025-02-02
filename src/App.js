import { MyNavBar } from "./mynav.js";
import { Banner } from "./banner.js"; 
import { Projects } from "./projects.js"
import './App.css';
import './views.css'

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <Banner />
      <Projects />

    </div>
  );
}

export default App;
