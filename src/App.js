import logo from './logo.svg';
import './App.css';
import {Home,Expertise,Education,Proficiency,Experience,Projects,ShortCoursesScreen} from './Screen'
import {ProfileCard} from './Component/index'


function App() {
  return (
    <div className="App">
      <Home />
      <Expertise/>
      <Proficiency/>
      <Education/>
      <ShortCoursesScreen/>
      <Experience/>
      <Projects/>
      <ProfileCard/>
    </div>
  );
}

export default App;
