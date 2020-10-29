import logo from './logo.svg';
import './App.css';
import Resume from './resume.js';
import Cards from './cards.js';
import {BrowserRouter ,Route} from 'react-router-dom';

 function App(){
  return(
    <div>
    <BrowserRouter>
    <Route exact path="/ReactApp_Task" component={Cards}/>

    <Route exact path="/resume"component={Resume}/>
    </BrowserRouter>
    </div>
    );
}
export default App;
