import React, { useState, useEffect } from "react";
import "./App.css";
import tflImg from "./tfl.jpg"
import SelectTransportType from "./SelectTransportType";

function App() {
  const [data, setData] = useState([]);
  const[selectedMode,setSelectedMode]=useState(null)
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://api.tfl.gov.uk/Line/Meta/Modes")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err));
  }, []);
  if (error) {
    return <div> something wrong {error.message}</div>;
  } else if (!data) {
    return <div> "Loading..." </div>;
  }

  function handlerSelectedMode(e){
    setSelectedMode(e.target.selectedIndex===0 ? null:e.target.value)

  }
  return (
    <div className="App">
    <div>
      
      <img 
      src={tflImg} 
      className="img-fluid  mx-auto d-block" 
      alt="tfl"/>

      
    </div>
      
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1"> select transport type </label>
        <select 
        onChange={handlerSelectedMode}
        className="form-control" 
        id="exampleFormControlSelect1">
            <option>Choose a Mode of Transport</option>
          {data.map((eachTransport,index) => (
            <option 
            
            key={index}>{eachTransport.modeName}</option>
          ))}
        </select>
      </div>
      {/* {selectedMode && <h2>your selected mode : {selectedMode}</h2>} */}

      <SelectTransportType selectedMode={selectedMode} />
    </div>
  );
}

export default App;
