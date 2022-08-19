import App from "../../App";

function AboutPage ({info}) {
    return(
        <>
            <h1>{info.title}</h1>
            <p>{info.body}</p>
        </>
    )
}
export default AboutPage