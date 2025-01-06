import Logo from '../Images/Screenshot 2024-12-31 023321.png'

const Card = () => {
    return(
        <section className="Contact-Bar">
            <div className='Left'>
                <img src = {Logo} id = 'logo'/>
            </div>
            <div className = 'Right'>
                <p>Where personalized care is provided with</p>
                <p>Compassion, Empathy, Dignity and Respect</p>
            </div>
        </section>
    )
}

export default Card