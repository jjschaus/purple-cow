import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [hits, setCount] = useState({ data: [] });

  const handleClick = async () => {

    const response = await fetch('https://api.countapi.xyz/hit/1ccb732e-b55a-4404-ad3f-0f99c02fe44e', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    const result = await response.json();

    console.log('result is: ', JSON.stringify(result));
    alert(JSON.stringify(result))


  }


  return (

    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          <span>Project</span> Purple Cow
        </h1>
        <button onClick={handleClick} className="btn btn-primary">
          Hit Counts
        </button>

      </header>
    </div>

  );
}

export default App;
