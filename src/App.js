import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Problems} from "./components/Problems";
import {Services} from "./components/Services";

import {Description} from "./components/Description";
import {Projects} from "./components/Projects";
import Header from "./components/Header";
import Clients from "./components/Clients";
import Footer from "./components/Footer";



function App() {
  return (
      <div>

    <div className="App">
      <Header/>
      <Problems />
      <Services />
      <Description />
      <Projects />
      <Clients />
      <Footer />
    </div>
      </div>
  );
}

export default App;
