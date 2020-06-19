import React,{useState,useEffect}from 'react'
import SelectRoute from './SelectRoute'

function SelectTransportType({selectedMode}){
  const [transportType,setTransportType]=useState([])
  const[selectedTransport,setSelectedTransport]=useState("")
  const [error, setError] = useState(null);
  
  useEffect(()=>{
    if(selectedMode){
      fetch(`https://api.tfl.gov.uk/Line/Mode/${selectedMode}`)
    .then(res=>res.json())
    .then(data=>setTransportType(data))
    .catch((err) => setError(err));
    }
    
  },[selectedMode])
  if (error) {
    return <div> something wrong {error.message}</div>;
  } else if (!transportType) {
    return <div> "Loading..." </div>;
  }
  function handlerSelectedMode(e){
    setSelectedTransport(e.target.value)

  }
return (
  <div>
    <div className="form-group">
        
        <select 
        onChange={handlerSelectedMode}
        className="form-control" 
        id="exampleFormControlSelect1">
            <option>Choose route of Transport</option>
          {transportType.map((chooseTransport) => (
            <option key={chooseTransport.id}>{chooseTransport.name}</option>
          ))}
        </select>
      </div>
      {/* {selectedTransport && <h2>your selected line : {selectedTransport}</h2>} */}

      <SelectRoute 
      selectedMode={selectedMode}
      selectedTransport={selectedTransport}/>
      
  </div>
)
}
export default SelectTransportType