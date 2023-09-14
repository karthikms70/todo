
import { Route, Routes } from "react-router-dom"


import "./global.css"
import { Login } from "./routes/Login"
import { Signup } from "./routes/Signup"
import { Todo } from "./routes/Todo"


function App(){
  
  return(
  <>

  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="signup" element={<Signup/>}/>
    <Route path="todo" element={<Todo/>}/>
  </Routes>
 
  </>
  )

}

export default App