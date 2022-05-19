import React, { useEffect, useState } from 'react';
import './Navbar.css'

const Navbar = () => {
      const[backGround,setBackGround] = useState(false);
    
      function scrollPosition(){
            if(window.scrollY>150){
                  setBackGround(true);
                }else{
                  setBackGround(false);
                }
      }

      useEffect(()=>{
        window.addEventListener('scroll',scrollPosition);
        return ()=>{
              window.removeEventListener('scroll',scrollPosition);
        }
      },[])

  return (
    <div className={`navbar ${backGround && "showBg"}`}>
          <img className="nav__logo" src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'  alt='Netflix__log'/>
    </div>
  )
}

export default Navbar