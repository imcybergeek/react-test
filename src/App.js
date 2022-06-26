import logo from './logo.svg';
import './App.css';
import Container from './components/Container';

function App() {

  const data = [
    {
      img:"",
      name: "Nord Stage 3 88 Keys",
      tags:["1","2","3"],
      colors:["lightcoral","lightblue","lightpink"],
      location: ["","",""],
      pricing: ["","",""],
    },
    {
      img:"",
      name: "Line 6 Helix Rack Guitar",
      tags:["1","2","3"],
      location: ["","",""],
      pricing: ["","",""],
    },
    {
      img:"",
      name: "Nord Lead A1",
      tags:["1","2","3"],
      location: ["","",""],
      pricing: ["","",""],
    },
    {
      img:"",
      name: "Mong Subsequent 37",
      tags:["1","2","3"],
      location: ["","",""],
      pricing: ["","",""],
    }
  ]

  return (
    <>
    <Container data={data}/>
    </>
  );
}

export default App;
