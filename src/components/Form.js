import { useState, React, useContext } from "react";

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [githubUrl, setGithubUrl] = useState("");
    const [linkedinUrl, setLinkedinUrl] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        // setSubmitted(true);
    }
    const clear = () => {
        setName("");
        setEmail("");
        setPhone("");
        setGithubUrl("");
        setEmail("");
        setSubmitted(false);
    }

    return (
        <div className="input-form">
                <div className="div-inputBoxes">
                <h1>Customer Input Form</h1>
                <input className="input-box" type ="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" />
            
                <input className="input-box" type ="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
                <input className="input-box" type ="number" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Mobile Number" min={1000000000} max={9999999999} />
                <input className="input-box" type ="url" value={githubUrl} onChange={(e)=>setGithubUrl(e.target.value)} placeholder="Github Url" />
                <input className="input-box" type="url" value={linkedinUrl} onChange={(e) => setLinkedinUrl(e.target.value)} placeholder="Linkedin Url" />
                <button className="submit-button" type="submit" onClick={()=>setSubmitted(true)} >Submit</button>
                </div>
                <div className="display" style={{ display : submitted ? "flex" : "none" }}>
                    <p>Name : {name}</p>
                    <p>Email : {email}</p>
                    <p>Mobile Number : {phone}</p>
                    <p>LinkedIn URL : {linkedinUrl}</p>
                <p>Github URL : {githubUrl}</p>
                <button className="submit-button" onClick={()=>clear()} >Clear</button>
                    </div>
                {/* <div className="display" style={{ display : submitted ? "flex" : "none" }}>
                    <p>Name : {name}</p>
                    <p>Email : {email}</p>
                    <p>Mobile Number : {phone}</p>
                    <p>LinkedIn URL : {linkedinUrl}</p>
                    <p>Github URL : {githubUrl}</p>
                    <button className="submit-button" onSubmit={handleBack()} >Go Back</button>
                </div> */}
        </div>
    )

}

export default Form;