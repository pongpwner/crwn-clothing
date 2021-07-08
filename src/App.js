import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom"
import HomePage from './pages/homepage/homepage.component'
const HatsPage = () =>(<div>
  <h1>HATS PAGE</h1>
</div>)
function App() {
  return (
    <div >
      <switch>
     <Route exact path="/" component={HomePage}/>
     <Route path="hats" component={HatsPage}/>
     </switch>
    </div>
  );
}

export default App;
