import {Link, NavLink} from 'react-router-dom'
import Logo from "../assets/image/logo.png"
import { useState } from 'react'

export default function NavBar(){
    const [menu , setMenu] = useState(false);
    function open(e){
        setMenu(e);
    }
    return (
        <>
            <div className="container">
                <div className="brand">
                    <img src={Logo} alt="Logo" />
                </div>
                <nav className={menu ? "open" : "close"}>
                    <ul>
                        <li>
                            <NavLink to = "/" className='link'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to = "/about" className='link'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to = "/services" className='link'>Services</NavLink>
                        </li>
                        <li>
                            <NavLink to = "/pricing" className='link'>Pricing</NavLink>
                        </li>
                        <li>
                            <NavLink to = "/Contact" className='link'>Contact</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="btns">
                    <span className="link btn_menu" onClick={() => open(!menu)}>
                        {!menu ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-xmark"></i>}
                    </span>
                    <Link to="/Sign" href="#" className="link">
                        <i className="fa-solid fa-arrow-right-to-bracket"></i>
                        <span>Sign In</span>
                    </Link>
                </div>
            </div>
        </>
    )
}