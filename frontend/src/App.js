import './App.css';
import Home from './components/home';
import About from './components/About';

import LoginForm from './components/LoginForm';
import BookingForm from './components/BookingForm';
import Footer from './components/footer';
import Main from './components/image';
import {Button, Badge} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


fetch("https://adurooo78.herokuapp.com/events")
  .then((r) => r.json())
  .then((data) => console.log(data));
function App() {
  return (
    <div className="App">
      <h1> Aduro </h1>
      {/* <h2>comeback</h2> */}
      <Home/>
      <About/>
      <LoginForm/>
      <Main/>
      <BookingForm/>
      <Footer/>
      
      <useModal/>
      
      
      
      <p>
        
        <Button variant="primary">
          Profile <Badge bg="secondary">9</Badge>
          <span className="visually-hidden">unread messages</span>
        </Button>
      </p>
    </div>
  );
}


  





export default App;
