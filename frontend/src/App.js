import './App.css';
import Home from './components/home';
import BookingForm from './components/BookingForm';
import About from './components/About';
import LoginForm from './components/LoginForm';
import MainBackground from './components/MainBackground';
/*import Appointment from './components/Appointment';*/
import {Button, Badge} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <h1> Aduro </h1>
      {/* <h2>comeback</h2> */}
      <Home/>
      <BookingForm/>
      <About/>
      <LoginForm/>
      <MainBackground/>
      
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
