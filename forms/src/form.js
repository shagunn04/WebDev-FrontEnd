import React, { useState, useEffect } from "react";
import "./Data.css";

function Form() {
    const [name, setname] = useState({
        firstname: "",
        lastname: "",
        email: "",
        textarea: "",
        Agreement: true,
        employment: "",
        favColour: ""
    });

    const [isSubmitted,setIsSubmitted]=useState(false);

    useEffect(() => {
        document.body.style.backgroundColor = name.favColour;
    }, [name.favColour]);

    function handleChange(event) {
        const { name, type, checked, value } = event.target;
        setname((prevname) => ({
            ...prevname,
            [name]: type === "checkbox" ? checked : value
        }));
        console.log(value);
    }

    function handleSubmit(event)
    {
        event.preventDefault();
        setIsSubmitted(true);

    }

    return (
        
        <div className="card">
            {isSubmitted?
            (<div className="thank-you">
                <h1>Thank you</h1>
                <p>For letting us steal your data</p>
                <h2>Your Data</h2>
                <p>Fullname :{name.firstname} {name.lastname}</p>
                <p>email : {name.email}</p>
                <p>Comments : {name.textarea}</p>
                <p>Employment status :{name.employment}</p>
                <p>favcolour : {name.favColour}</p>
                </div>)
                
                :
                (
            <form onSubmit={handleSubmit}>
            <h1>Login Page</h1>
            <input
                onChange={handleChange}
                placeholder="Enter first name"
                name="firstname"
            />
            <input
                onChange={handleChange}
                placeholder="Enter last name"
                name="lastname"
            />
            <input
                onChange={handleChange}
                placeholder="Enter your email"
                name="email"
            />
            <textarea
                name="textarea"
                onChange={handleChange}
                placeholder="Comments"
            />

            <div className="radio-group">
                <input
                    id="Unemployed"
                    name="employment"
                    type="radio"
                    value="Unemployed"
                    checked={name.employment === "Unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="Unemployed">Unemployed</label>

                <input
                    id="Part-time"
                    type="radio"
                    name="employment"
                    value="Part-Time"
                    checked={name.employment === "Part-Time"}
                    onChange={handleChange}
                />
                <label htmlFor="Part-time">Part-time</label>

                <input
                    id="Full-time"
                    type="radio"
                    name="employment"
                    value="Full-Time"
                    checked={name.employment === "Full-Time"}
                    onChange={handleChange}
                />
                <label htmlFor="Full-time">Full-time</label>
            </div>

            <h1>Choose your fav Colour</h1>
            <div className="select-container">
                <select
                    id="favColour"
                    name="favColour"
                    value={name.favColour}
                    onChange={handleChange}>
                    <option value="">--Choose--</option>
                    <option value="#EEE8AA">Pale Goldenrod</option>
                    <option value="#FFE4E1">Misty Rose </option>
                    <option value="Beige">Beige</option>
                    <option value="Lavender">Lavender</option>
                </select>
            </div>

            <div className="checkbox-group">
                <input
                    id="Agreement"
                    type="checkbox"
                    name="Agreement"
                    checked={name.Agreement}
                    onChange={handleChange}
                />
                <label htmlFor="Agreement">I agree to all the conditions applied</label>
            </div>
            <button>Submit</button>
            <h3 style={{
                color: name.Agreement ? "green" : "red"
            }}>{name.Agreement ? "Agreed" : "Disagree"}</h3>
       
                
        </form>)}
         </div>
    );
}

export default Form;
