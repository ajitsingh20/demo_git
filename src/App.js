import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://35.224.219.51:4000/data", {
      method: "get"
    }).then(res => res.json())
      .then(result => setData(result))
      .catch(err => console.log(err))
  }, [])


  return (
    <div className="App">
      {
        data[0] && data.map(d => (<h3>{d.name}</h3>))
      }
    </div>
  );
}

export default App;
