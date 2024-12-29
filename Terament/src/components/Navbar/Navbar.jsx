import React, { act } from 'react'
import "./Navbar.css"
let activ = false;
let root = 0;
let root2 = 0;
function Navbar(){


function slidebar() {
 const line1 = document.querySelector(`.nav-line-1`);
 const line2 = document.querySelector(`.nav-line-2`);
  const slidebar = document.querySelector(".slidebar");
  if (activ == false){
    activ = true;
    root -= 45;
    root2 = 45;
    line1.style.transform = `rotate(${root}deg)`;
    line2.style.transform = `rotate(${root2}deg)`;
    slidebar.style.width = '100%';
    line1.style.top = 7 + `px`;
    line2.style.top = 0 + `px`;
  }else {
    activ = false;
slidebar.style.width = '0%';
root = 0;
root2 = 0;
line1.style.top = 0 + `px`;
line2.style.top = 0 + `px`;
line1.style.transform = `rotate(${root}deg)`;
line2.style.transform = `rotate(${root2}deg)`;
  }
}
  return (
    <div>
      <div class="slidebar"></div>
<nav class="navbar">
    <nav class="nav-btn" onClick={slidebar}>
        <div class="nav-line-1"> </div>
        <div class="nav-line-2"> </div>
    </nav>
    <text class = "titel">Terament</text>
    <img src="images/terament.png" class="logo"></img>
</nav>

    </div>
  )
}

export default Navbar