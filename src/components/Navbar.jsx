import { Link,NavLink } from 'react-router-dom'
import './navbar.css'
import Logo from '../images/origlogo.png'
import { links } from '../data'
import { HiMiniBarsArrowUp } from "react-icons/hi2";
import { HiMiniBarsArrowDown } from "react-icons/hi2";
import { useState } from 'react';


const Navbar = () => {

    const[isNavShowing, setIsNavShowing]=useState(false);

  return (
    <nav>
        <div className="nav-container">
            <Link to="/" className='logo' onClick={()=>{setIsNavShowing(false)}}>
            <img src={Logo} alt='logo'></img>
            </Link>
        

        <ul className={`nav-links ${isNavShowing ? 'show_nav' : 'hide-nav'}`}>
            {
                links.map(({name,path},index)=>{
                    return(
                        <li key={index}>
                            <NavLink to={path} 
                                     className={({isActive})=> isActive ? 'active-nav' : ''}
                                     onClick={()=> setIsNavShowing(prev => !prev)}
                                     >
                                {name}</NavLink>
                        </li>
                    )
                })
            }
        </ul>

        <button className='nav-togglebutton'
                onClick={()=> setIsNavShowing(prev => !prev)}>
                    {
                        isNavShowing ? <HiMiniBarsArrowUp /> : <HiMiniBarsArrowDown />

                    }
        </button>

        </div>
    </nav>
  )
}

export default Navbar
