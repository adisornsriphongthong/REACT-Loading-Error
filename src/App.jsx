import React, { useEffect } from "react";
import useLoaderData from "./useLoaderData";

const App = () => {
  const {
    error, setError, 
    currentError, setCurrentError, 
    data, setData
  } = useLoaderData();

  useEffect(() => {

  })

  return (
    <div>
      {error && <h1>{currentError}</h1>}
      {
        data.map((element) => {
          return (
            <div>
              <ul>
                <li key={element.Data}>{element.Data}</li>
              </ul>
            </div>
          )
        })
      }
    </div>
  )
}

export default App;