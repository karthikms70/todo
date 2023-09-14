import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "../component/firebase"
import {useNavigate} from "react-router-dom"
import "./signup.css"

export const Signup = ()=>{
    const [data,setData] = useState({
        email:"",
        pass:""
    })
    const navigate = useNavigate()
    const ontoggle = (e)=>{
           
             
        setData((pre)=>({
            ...pre,
            [e.target.name] : e.target.value
        }))
    }

    const handlechange =(e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth,data.email,data.pass)
        .then((credential)=>{
            console.log(credential)
        })
        .catch((err)=>{
            console.log(err)
        })

       setInterval(()=>{
        navigate("/")
       },2000)
    }

    return(
        <>
        <div className="container">
            <form onSubmit={(e)=>handlechange(e)} autoComplete="off">
                <input type="email" name="email" id="text"  placeholder="Enter Your Email" onChange={ontoggle}/>
                <input type="password" name="pass" id="pass" placeholder="Enter Your Password" onChange={ontoggle}/>
                <button type="submit">SignUp</button>
            </form>
        </div>
        </>
    )
}