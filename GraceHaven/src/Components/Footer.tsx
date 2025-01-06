import Logo from '../Images/Screenshot 2024-12-31 023321.png'
import '../Styles/Footer.css'
const Footer = () =>{
    return (
        <div className="Footer">
            <img src = {Logo}/>
            <div id = 'Footer-Paragraph'>
                <p>{`(C): 509-413-1035`}</p>
                <p>{`(F): 509-757-2881`}</p>
                <p>GraceHavenAFH@gmail.com</p>
            </div>
        </div>
    )
}

export default Footer