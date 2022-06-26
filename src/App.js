import logo from './logo.svg';
import './App.css';
import Container from './components/Container';

function App() {

  const data = [
    {
      img:["https://5.imimg.com/data5/SELLER/Default/2022/4/PF/IE/LP/146060024/new-nord-stage-3-88-piano-fully-weighted-hammer-action-keyboard-digital-piano-500x500.jpg"],
      name: "Nord Stage 3 88 Keys",
      tags:[{text:"Brand New",color:"lightcoral"}, {text:"Free Shipping",color:"lightblue"}, {text:"15% Off",color:"lightpink"}],
      location: ["EMLA Music","Le Havre, France",""],
      pricing: ["6500.00","5,738.00","195"],
      review:"31"
    },
    {
      img:"https://cdn.shopaccino.com/johns-music/products/1-716340_l.jpg",
      name: "Line 6 Helix Rack",
      tags:[{text:"Brand New",color:"lightcoral"}],
      location: ["ProMusicTools","Munchen, Germany",""],
      pricing: ["","1,831.57","244.36"],
      review:"561"
    },
    {
      img:"https://audiogears.in/wp-content/uploads/2020/07/61X9Mmv99L._SL1200_.jpg",
      name: "Nord Lead A1",
      tags:[{text:"Brand New",color:"lightcoral"}, {text:"Free Shipping",color:"lightblue"}],
      location: ["Gear Garage","Dulwich Hill, Australia",""],
      pricing: ["","1700","35"],
      review:"341"
    },
    {
      img:"https://cdn.shopaccino.com/johns-music/products/1503917131img857185-396421_l.jpg",
      name: "Mong Subsequent 37",
      tags:[{text:"Free Shipping",color:"lightblue"}],
      location: ["TURNLAB","Antwerpen, Belgium"],
      pricing: ["","1700","205"],
      review:"1,031"
    },
    {
      img:"https://cdn.shopaccino.com/johns-music/products/13830658761010608-547250_l.jpg",
      name: "Mong Miniature",
      tags:[{text:"Brand New",color:"lightcoral"}, {text:"Free Shipping",color:"lightblue"}, {text:"15% Off",color:"lightpink"}],
      location: ["Andrew's Gear Outlet","Ojai CA, United States"],
      pricing: ["","682.80","42.68"],
      review:"456"
    }
  ]

  return (
    <>
    <Container data={data}/>
    </>
  );
}

export default App;
