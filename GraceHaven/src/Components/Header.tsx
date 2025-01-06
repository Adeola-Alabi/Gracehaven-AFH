import {Link, useMatch, useResolvedPath} from "react-router-dom"
import '../Styles/Header.css'
import {useState} from 'react'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
        }
    return(
        <header>
        <nav>
            <ul className = {!isOpen? 'NavBar': "noBar"}>
                <Link to = "/" className="Link"><li>Home</li></Link>
                <Link to = "/About" className="Link"><li>About Us</li></Link>
                <Link to = "/Services" className="Link"><li>Services</li></Link>
                <Link to = "/Contact" className="Link"><li>Contact</li></Link>
            </ul>
        </nav>
        </header>
    )
}

export default Header
