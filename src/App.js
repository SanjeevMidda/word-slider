import { useState } from 'react';
import './index.css';

function App() {

  const [firstWords, setFirstWords] = useState(0);
  const [secondWords, setSecondWords] = useState({transform: `translateY(${0})px`});
  const [sliderValueOne, setSlideValueOne] = useState(0);

  let styles = {
    transform: `translateY(${firstWords}px)`
  }

  function moveFirstWords(e){

    setSlideValueOne(e.target.value);

    if(e.target.value > sliderValueOne){
      setFirstWords(firstWords + 10)
    }
    
    if(e.target.value < sliderValueOne){
      setFirstWords(firstWords - 10)
    }

  }

  function moveSecondWords(){
    setSecondWords()
  }

  return (
    <div className="App">

      <div className="input">
        <input type="range" onChange={moveFirstWords}/>
        <input type="range" onChange={moveSecondWords}/>
      </div>
     
     <div className="words">
        <h3 style={styles}>ONE</h3>
        <h3 >TWO</h3>
        <h3 style={styles}>THREE</h3>
        <h3 >FOUR</h3>
        <h3 style={styles}>FIVE</h3>
     </div>
      
    </div>
  );
}

export default App;
