import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from './Form';
import Card from './Card';
import tacos from './photos/tacos.png'
import pizza from './photos/pizza.jpg'
import makloub from './photos/makloub.jpg'
import chapati from './photos/chapati.jpg'
import burger from './photos/burger.jpg'
function App() {
  return (
    <div className="App">
      <header className="App-header">
<Form/>
</header>
<main>
  <div id='food'>
<Card name="tacos" price="8$" photo={tacos} />  
<Card name="pizza" price="14$" photo={pizza}/>
<Card name="makloub" price="7$"photo={makloub}/>
<Card name="chapati" price="3$"photo={chapati}/>
<Card name="burger" price="6$" photo={burger}/>  

</div>
</main>   
  </div>
  );
}

export default App;
