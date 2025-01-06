import Lady from '../Images/Happy Lady.jpg'
import img3 from '../Images/Happy-Seniors-at-Home.jpeg.jpg'
import Policy from '../Components/Policy'
import '../Styles/About.css'

const About = () => {

    const policies = [
        {title:'Smoking Policy', terms:'GraceHaven AFH LLC has one or more designated areas outside where tobacco users can smoke or vape away from the building and away from other residents. Smoking or vaping indoors or anywhere outside the designated areas is strictly prohibited.'},
        {title:'Short-Term / Respite Care', terms:'GraceHaven offers Short-Term / Respite Care with daily rates for anyone who needs to stay for less than a month. Respite Care services can offer relief for current caregivers, allowing them to take a much-needed break.'},
        {title:'Pets', terms:'GraceHaven AFH LLC does not allow pets.'},
    ]

    return(
        <>
        <h1>About Us</h1>
        <section className = 'About-intro'>
            <div>
                <img src = {Lady}/>
            </div>
            <div className='About-Blurb'>
                <h3>
                Here we care for adults
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
                mental health conditions.
                </h3>
                <p>
                We offer a much more intimate and familiar
                home-like setting, compared to larger
                commercial Assisted Living Facilities.
                GraceHaven employs more caregivers per
                resident than larger facilities, which allows us
                to provide more personal care and attention
                for each of our residents.
                GraceHaven currently has rooms available.
                The available rooms are private, while the
                bathrooms may be shared with up to one of
                the other residents in the home.
                </p>
                <p>
                With a specialty in Mental Health, the staff here
                have the certifications, expertise and experience to
                accommodate and care for adults with a variety of
                mental health conditions.
                </p>
            </div>
        </section>
        <section className = "Banner">
                <h2>More Information</h2>
        </section>
        <section className = 'About-intro'>
            <div className='About-Blurb'>
                {policies.map(policy => {
                    return(
                        <Policy title = {policy.title} terms = {policy.terms}/>
                    )})}
            </div>
            <div>
                <img src = {img3}/>
            </div>
        </section>
        <>
        </>
        </>
    )
}

export default About