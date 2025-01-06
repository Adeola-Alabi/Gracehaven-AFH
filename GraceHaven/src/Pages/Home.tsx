import Card from '../Components/Card'
import img from '../Images/House (1).jpg'
import Happy from '../Images/Happy.webp'
import '../Styles/Home.css'
const Home = () => {
    return (
        <>
            <div className="Home">
                <img src = {img} id = "House" alt = "GraceHaven AFH's Front Door"/>
                <Card/>
                <h1>Specialized Care for Adults with Medical and Mental Health Conditions</h1>
                <section className='about' >
                    <div>
                        <img src = {Happy} id = 'High-Five'/>
                    </div>
                    <div id ="blurb">
                         <h2>We provide personalized and
                        compassionate hospice care
                        services for residents and their
                        families during the end-stages
                        of life</h2>

                        <p>Here we care for adults
                        who have various needs:
                        activities of daily living,
                        medication management;
                        companionship and
                        medical needs. Also, with a
                        specialty in Mental Health,
                        the staff here have the
                        certifications, expertise
                        and experience to
                        accommodate and care for
                        adults with a variety of
                        mental health conditions.</p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home