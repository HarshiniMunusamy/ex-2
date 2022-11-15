import pic from './Images/images.jfif';
import './App.css';
import './Style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <center>
         <b><u> <h1>TOM AND JERRY</h1>
          <h1>CARDS</h1></u></b>
      <div class="cards">
    <article class="card">
        <header>
            <b><u><i><h2>FACTS</h2></i></u></b>
        </header>    
        <center>
        <img src={pic} alt="logo"/>
        </center>
        <div class="content">
            <p> <br></br><br></br><br></br>Tom and Jerry debuted on February 10th 1940.<br></br>
            The title of the animation series Tom and Jerry originated from an 1823.<br></br>
            Tom was called Jasper and while Jerry was referred as Jinx.<br></br>
            Back in 1975, Tom and Jerry actually became friends, proper friends!<br></br>
            A traditional Christmas cocktail in the USA was named A Tom and Jerry.<br></br></p>
            <footer>
        <button className='button'>More Facts</button>
        </footer>
        <br></br>
        </div>
            
    </article>           
   
</div>
            
</center>
<br></br>
<br></br>
      </header>
    </div>
  );
}

export default App;


