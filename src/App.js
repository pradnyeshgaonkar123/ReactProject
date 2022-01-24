
import './App.css';
import Footer from './FooterComponent/Footer';
import { Home } from './HomeComponent/Home';
import NavBar from './NavBarComponent/NavBar';


function App() {
 
  return (
    <div className='App'>
      <header>
        <NavBar></NavBar>
      </header>

     <Home/>



      <Footer/>
    </div>
    
  );
}

export default App;
