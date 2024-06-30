import {  useState } from 'react';
import '../login.css'

const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")

    const handleSubmit=(event)=>
    {
        event.preventDefault()
        const user = {
            email,
            password
        }
        setEmail("")
        setPassword("")
        fetch("http://localhost:8000/login",{
          method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
        .then((data)=>{
            if(data.success){
                console.log('login successful',data)

            }
            else{
                console.log('login failed')
            }
        })
        .catch((err)=>{
          console.error('error:',err)
        })
    }
    return (
        <div>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input required type='text' value={email}  onChange={(e)=>setEmail(e.target.value)}/>
            <label>Password</label>
            <input required type='text' value={password}  onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit'>Login</button>
          </form>
        </div>
      )
}
export default Login