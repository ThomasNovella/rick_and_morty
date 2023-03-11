import React from "react";
import { useState } from "react";
import validation from "./validation";


 const Form = ({login}) => {

    const [userData, setUserData] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    })      

    const handleInputChange = (event) => {
        const property = event.target.name
        const values = event.target.value
        setUserData({...userData, [property]: values})
        setErrors(validation({...userData, [property]:values}))
    };
    
    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData);
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" name='username' value={userData.username} onChange={handleInputChange}/>
            {errors.username && <p>{errors.username}</p>}

            <label>Password</label>
            <input type="text" name='password' value={userData.password} onChange={handleInputChange}/>
            {errors.password && <p>{errors.password}</p>}
 
            <button></button>
        </form>
    )
}

export default Form;