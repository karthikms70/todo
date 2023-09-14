import { useState,useEffect } from "react"
import "./todo.css"
import { database } from "../component/firebase"
import { uid } from "uid"
import { set,ref, onValue,remove } from "firebase/database"

export const Todo = ()=>{
    
    const[todo,setTodo]=useState({
        task:"",
        date:""
    })
    
    const [newTodo,setNewTodo] = useState([])

    const ontoggle =(e)=>{
        setTodo((pre)=>({
            ...pre,
            [e.target.name]:e.target.value
        }))
    }

    useEffect(()=>{
        onValue(ref(database),(snapshot) =>{
            setNewTodo([])
            const data = snapshot.val()
            if(data !== null){
                Object.values(data).map((todo)=> {
                    setNewTodo((pre) =>[...pre,todo]
                        
                    )
                })
            }
        })
    },[])


    const handlechange=(e)=>{
        e.preventDefault();
        const uuid=uid();
        set(ref(database,`${uuid}`),{
            todo,
            uuid,
        })
        
        console.log(todo.task,"===handle")
    }

    const   ondelete=(data)=>{
        remove(ref(database,`/${data.uuid}`))
    }

    return(
        <>
        <div className="todo">
            
            <input type="text" name="task" onChange={(e)=>ontoggle(e)}  autoComplete="off" placeholder="write todo"/>
            <button onClick={(e)=>handlechange(e)} id ="add">ADD</button>
            {newTodo.map((data) => (
            <div key={Math.random()} className="up">
            <p>{data.todo.task}</p>
            <button onClick={()=>ondelete(data)} id="del">Delete</button>
            <button >Update</button>
            </div>
        ))}
           
        </div>

       
        
        </>
    )
}