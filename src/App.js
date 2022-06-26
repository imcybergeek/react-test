import logo from './logo.svg';
import './App.css';
import Container from './components/Container';

function App() {

  const data = [
    {
      img:"",
      name: "Nord Stage 3 88 Keys",
      tags:["Brand New", "Free Shipping", "15% Off"],
      colors:["lightcoral","lightblue","lightpink"],
      location: ["EMLA Music","Le Havre, France",""],
      pricing: ["6500.00","5,738.00","195"],
    },
    {
      img:"",
      name: "Line 6 Helix Rack",
      tags:["Brand New"],
      location: ["ProMusicTools","Munchen, Germany",""],
      pricing: ["","1,831.57","244.36"],
    },
    {
      img:"",
      name: "Nord Lead A1",
      tags:["Brand New", "Free Shipping"],
      location: ["Gear Garage","Dulwich Hill, Australia",""],
      pricing: ["","1700","35"],
    },
    {
      img:"",
      name: "Mong Subsequent 37",
      tags:["Free Shipping"],
      location: ["TURNLAB","Antwerpen, Belgium"],
      pricing: ["1700","205"],
    },
    {
      img:"",
      name: "Mong Miniature",
      tags:["Brand New", "Free Shipping", "15% Off"],
      location: ["Andrew's Gear Outlet","Ojai CA, United States"],
      pricing: ["682.80","42.68"],
    }
  ]

  return (
    <>
    <Container data={data}/>
    </>
  );
}

export default App;
