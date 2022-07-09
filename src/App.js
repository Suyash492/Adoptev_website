import './App.css';
import Header  from "./Components/Header";
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import PopularEvs from './Components/PopularEvs'
import Sell from './Components/Sell';
import Footer from './Components/Footer';
import Navsm from './Components/Navsm';



function App() {
  return (
    <>
    <Navsm></Navsm>
    <Header ></Header>
    <Nav></Nav>
    <Hero></Hero>
    <PopularEvs></PopularEvs>
    <Sell></Sell>
    <Footer></Footer>
    
    </>
   
  );
}

export default App;
