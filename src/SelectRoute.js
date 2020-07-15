import React, { useState, useEffect } from "react";

function SelectRoute({ selectedTransport, selectedMode }) {
  const [selectedRoute, setSelectedRoute] = useState("");

  useEffect(() => {
    if (selectedTransport) {
      
      fetch(`https://api.tfl.gov.uk/Line/${selectedTransport}/Route`)
        .then((res) => res.json())
        .then((data) => setSelectedRoute(data));
    }
  }, [selectedTransport]);

  return selectedRoute.routeSections ? (
    <div className="">
      <h2 className="text-center">
        {selectedMode.toUpperCase()} : {selectedTransport.toUpperCase()}
      </h2>
      <div className="d-flex justify-content-center align-items-center ">
        <div className="card bg-primary p-3 m-2">
        <p className="para-text para-head">start of Line</p>
        <p className="para-text">{selectedRoute.routeSections[0].originationName}</p>
          
        </div>
        <svg
          className="bi bi-arrow-right-circle"
          width="2em"
          height="2em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            fill-rule="evenodd"
            d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"
          />
          <path
            fill-rule="evenodd"
            d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        <div className="card bg-primary p-3 m-2">
        <p className="para-text para-head">end of Line</p>
         <p className="para-text">{selectedRoute.routeSections[0].destinationName}</p> 
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
export default SelectRoute;
