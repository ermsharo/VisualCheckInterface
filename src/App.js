import React, { useState ,useEffect} from 'react';
import "./cardStyle.css"
import GeneratedCard from "./GeneratedCard";
import { getListOfIds } from './utils/cardInfo';




function App() {
  const [count, setCount] = useState(0);

  const listOfIds = getListOfIds();

  const updateCard = () => {
    if (count < listOfIds.length) {
      setCount(count + 1);
    }
  }


  useEffect(
    () => {
        if (count > listOfIds.length) {
            return;
        }
        const id = setInterval(updateCard, 5000);
        return () => clearInterval(id);
    },
    [count]
);







  return (
    <div className="App">
      <GeneratedCard cardId={listOfIds[count]}  count ={count}/>
    </div>
  );
}

export default App;