import { NavLink } from "react-router-dom";
import basket from "../imgs/basket.png";

function Header() {
  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <nav style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
          <NavLink to="/">Main</NavLink>
          <NavLink to="/about">About</NavLink>
          {/* <NavLink to='/:id'>Details</NavLink> */}
        </nav>
        <NavLink to="/basket"> 
          <img src={basket} alt="basket" />
        </NavLink>
    </div> 
  )
}

export default Header