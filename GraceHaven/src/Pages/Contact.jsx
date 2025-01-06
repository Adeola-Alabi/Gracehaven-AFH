import ContactInfo from '../Components/ContactInfo.jsx'
import '../Styles/Contact.css'
import { AdvancedMarker, Map, Pin } from '@vis.gl/react-google-maps'
const Contact = () => {
    const position = {
        lat: 47.642341372495196,
        lng:-117.20403320268007
    }

    const mapRef = "https://www.google.com/maps/place/14910+E+16th+Ave,+Spokane+Valley,+WA+99037/@47.6421896,-117.2066081,17z/data=!3m1!4b1!4m6!3m5!1s0x549e2084cf374aeb:0x36e4b18525a33ff3!8m2!3d47.6421896!4d-117.2040332!16s%2Fg%2F11c4xzhcz7?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
    return (
        <>
        <h1>Want to get in Touch?</h1>
        <div className="Bookshelf">
            <section className= 'Contacts'>
                    <h4>
                        <em>GraceHaven Adult Family Home</em>
                    </h4>
                    <ContactInfo name = "Address" info = "14910 E 16th Ave"/>
                    <ContactInfo name = "Phone Number" info = "509-413-1035"/>
                    <ContactInfo name = "Fax" info = "509-757-2881"/>
                    <ContactInfo name = "Email" info = "GraceHavenAFH@gmail.com"/>

            </section>
            <div id = 'map'>
                <a href = {mapRef} target="_blank" rel="noopener noreferrer"><Map zoom = {14} center = {position} mapId={'4f1baa4d5f39e218'}>
                    <AdvancedMarker position={position}>
                        <Pin background={'white'} borderColor={'black'} glyphColor={'blue'}></Pin>
                    </AdvancedMarker>
                </Map></a>
            </div>

        </div>
        </>
    )
}

export default Contact