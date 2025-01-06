import HappyCouple from '../Images/premium_photo-1683140583875-60f4c8f6290e.jpg'
import "../Styles/Services.css"
const Services = () => {
    return (
        <>
        <div>
            <h1>Our Services</h1>
        </div>
        <article id = "Landing">
            <div className = "Services">
                <ul>
                    <li><h3>Breakfast, Lunch and Dinner</h3></li>
                    <li><h3>Tea, Coffee and Snacks any
                    time</h3></li>
                    <li><h3>Medications Management</h3></li>
                    <li><h3>Blood pressure / Weight
                    checks</h3></li>
                    <li><h3>Housekeeping and Flat
                    Linens Laundry</h3></li>
                    <li><h3>Personal Laundry</h3></li>
                    <li><h3>Social and Recreational
                    activities</h3></li>
                    <li><h3>24 / 7 Emergency care</h3></li>
                    <li><h3>All utilities (except phone bill)</h3></li>
                </ul>
                <div id = "ManWithKid">
                    <img src = {HappyCouple}/>
                </div>
            </div>
        </article>
        <article id = "Hoyer">
            <h3>Hoyer Lift</h3>
            <p>We have an on-site Hoyer lift available for
                those who need it, and our caregivers have
                proper training and experience using it</p>
        </article>
        </>
    )
}

export default Services