import { useState } from "react"
import { Link } from "react-router-dom"

export default function Login() {

  const [userData, setUserData]= useState({
    email: '',
    password: '',  
  }) 
  
  const changeInputHandle =(e)=>{
    setUserData(prevState =>{
      return{...prevState, [e.target.name] : e.target.value}
    })
  }

  return (
    <section className='login'>
      <div className="container login-container form-container">
        <h2>Login</h2>
        <form action="" className="form login-form">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandle}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={changeInputHandle}
          />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>

        <small>
          Yet to sign up? <Link to={"/register"}>Sign up</Link>
        </small>
      </div>
    </section>
  )
}
