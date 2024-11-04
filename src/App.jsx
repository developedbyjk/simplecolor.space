import { useState } from 'react'

import './App.css'

function App() {
  
  const [savedColor, SetsavedColor] = useState([]);
  const [currentColor, SetcurrentColor] = useState("#f15025");
  const [showCollection,SetShowcollection] = useState(false);


const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

function getRandomNumber(){
  return  Math.floor(Math.random()*hex.length);
}



function getRandomColor(){

  var hexColor ="#";
  for(let i=0; i<6; i++){
      
      hexColor += hex[getRandomNumber()];
      
  }
  document.body.style.backgroundColor = hexColor;

  SetcurrentColor(hexColor);


}


function saveColor(){
  SetsavedColor(prev => [...prev, currentColor]);
}

function toggleCollection(){
  SetShowcollection(prev => !prev)
}


  return (
    <>
      
      {
        showCollection && <div className="savedContainer">
        {
         savedColor.map((color,index) => {
           return <div  key={index}  className='colorbar' style={{backgroundColor: color}}>{color}</div>
         })
        }
       </div>
      }
       
    
    <div className="save_icon" onClick={toggleCollection}>
        <span className="material-symbols-outlined">
            bookmarks
        </span>
    </div>

<div className="big">

    <div className="colorname">{currentColor}</div>

    <div className="buttons">
        <div className="btn" onClick={getRandomColor}>
            <div><p>Get New</p></div>
            
        </div>
        <div className=" save" onClick={saveColor}>
            <span className="material-symbols-outlined">
                bookmark
            </span>
            
        </div>
    </div>




</div>
    </>
  )
}

export default App
