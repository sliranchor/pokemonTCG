import {BrowserRouter, Routes, Route} from "react-router-dom"
import Sets from "./components/Sets";
import IndividualSet from "./components/IndividualSet"

function App() {
  
 
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sets/>} />
        {/*<Route path="/sets/:id" element={<IndividualSet/>} />*/}
      </Routes>
    <div className="App">
      <Sets />
    </div>
    </BrowserRouter>
  );
}

export default App;
