import { Link } from "react-router-dom"

export default function Logout() {
  return (
    <section>
    <div className="error-center">
      <h1>Logo out</h1>
      
      <Link to={'/Login'} className='btn btn-primary'>Click to log out</Link>         
    </div>
  </section>
  )
}

