import { useState } from "react"
import { Link } from "react-router-dom"
import { DummyUsers } from "../data/data";

export default function Register() {
  
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const changeInputHandle = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    const newUser = {
      id: DummyUsers.length + 1, 
      name: userData.name,
      email: userData.email,
      password: userData.password,
    };
  
    DummyUsers.push(newUser);
    console.log("User Data:", newUser);
    setUserData({
      name: "",
      email: "",
      password: "",
      password2: "",
    });
  };
//   const [userData, setUserData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     password2: '',
//   });

  

// const changeInputHandle = (e) => {
//   setUserData((prevState) => ({
//     ...prevState,
//     [e.target.name]: e.target.value,
//   }));
// };


  return (
    <section className='register'>
      <div className="container register-container form-container">
        <h2>Sign Up</h2>
        <form action="" className='form register-form'>
          {/* <p className="form-message">invalid message</p> */}
          <input type="text " placeholder='Full Name' name='name' value={userData.name} onChange={changeInputHandle} />
          <input type="email " placeholder='Email' name='email' value={userData.email} onChange={changeInputHandle} />
          <input type="password " placeholder='Password' name='password' value={userData.password} onChange={changeInputHandle} />
          <input type="password" placeholder='Confirm password' name='password2' value={userData.password2} onChange={changeInputHandle} />
          <button type="submit" className="btn btn-primary">Register</button>
        </form>

        <small>Allready Register? <Link to={'/login'}>LogIn</Link></small>
      </div>
    </section>
  )
}
