import React,{useState}from 'react'
import './style.css';

function App() {
  const[my_condition,ChangeMyCondition] =useState(false)
  let MyDiv='';
  const showMyDiv =() =>
  {
    ChangeMyCondition(true);
  }
  const hideMyDiv =() =>
  {
    ChangeMyCondition(false);
  }

  if(my_condition)
  {
    MyDiv =(
 <div className="MyDiv">
        <h1> Current status:{my_condition}</h1>
      </div>
    );
  }
  else
  {
  
  }
  return (
    <div>
      <button className="myButton"onClick={showMyDiv}> Click Here To Show </button>
      <button className="myButton"onClick={hideMyDiv}> Click Here To Hide   </button>
      {MyDiv}
    </div>
  
  );
}

export default App;
