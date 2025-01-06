const ContactInfo = (props) => {

    return(
        <div className="ContactInfo">
            <h5>{props.name}</h5>
            <p>{props.info}</p>
        </div>
)}

export default ContactInfo