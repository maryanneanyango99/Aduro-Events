import './App.css';
import Home from './components/home';
import BookingForm from './components/BookingForm';
import About from './components/About';
import LoginForm from './components/LoginForm';
import MainBackground from './components/MainBackground';
import { requests } from './components/request';
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
