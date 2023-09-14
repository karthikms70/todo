import "./login.css"
import {useNavigate} from "react-router-dom"
// import { AuthContext } from "../component/AuthContext"
import { useContext,useState } from "react"
import {auth} from "../component/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

export const Login=()=>{
         const navigate = useNavigate()
        // const{value,toggle,datas} = useContext(AuthContext)
        // console.log(value,"===log")
        const [data,setData] = useState({
            text:"",
            pass:""
        })

        const ontoggle = (e)=>{
           
             
            setData((pre)=>({
                ...pre,
                [e.target.name] : e.target.value
            }))
           
           
        }


        const onstorage =(e)=>{
           e.preventDefault()

            signInWithEmailAndPassword(auth,data.text,data.pass)
            .then((credential)=>{
                if(credential){
                    navigate("todo")
                }
            })
            .catch((err)=>{
                console.log(err)
            })



       
          
        }

       
    return(
        <>
        
            <div className="main">
                <form onSubmit={(e)=>onstorage(e)}>
                
                <input type="email" name="text" id="text" placeholder="Email or Phone number"  autoComplete="off" onChange={ontoggle} />
                <input type="password" name="pass" id="pass"  placeholder="Password" onChange={ontoggle}/>
                <button type="submit" id="sub">Sign in</button>
                <div className="para">
                    
                    <p id="new" onClick={()=>{navigate("signup")}}>Sign Up Now.</p>
                    <p id="forg">Forgot password?</p>
                </div>
               
                </form>
                
            </div>
          
        </>
    )
}

