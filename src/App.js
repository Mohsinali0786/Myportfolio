import logo from './logo.svg';
import './App.css';
import {Home,Expertise,Education,Proficiency,Experience,Projects} from './Screen'
import {ProfileCard} from './Component/index'


function App() {
  return (
    <div className="App">
      <Home />
      <Expertise/>
      <Proficiency/>
      <Education/>
      <Experience/>
      <Projects/>
      <ProfileCard/>
    </div>
  );
}

export default App;
