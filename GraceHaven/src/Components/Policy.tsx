import React from "react"

interface props {
    title:string;
    terms:string;
}
const Policy: React.FC<props> = (props) => {

    return(
        <>
        <h3>{props.title}</h3>
        <p>{props.terms}</p>
        </>
    )
}

export default Policy