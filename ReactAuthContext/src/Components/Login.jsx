import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'

export default function Login() {

    const {setIsAuth, setToken} = useContext(AuthContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault(); 

        try {
            const response = await fetch("https://reqres.in/api/login", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            })
            const res = await response.json();
            setIsAuth(true);
            setToken(res.token)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    
    return (
        <div>
            <form data-testid = "auth_form" onSubmit={handleSubmit} >
                <input
                    type = "email"
                    data-testid = "email"
                    placeholder = "Enter Email"
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <br />
                <input
                    type = "password"
                    data-testid = "password"
                    placeholder = "Enter password"
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <br />
                <input type = "submit"/>

            </form>                
        </div>
    )
}
