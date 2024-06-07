import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <h1>Hauska pelisivu</h1>
      <Link to="/cardgame" className="bigbutton">Pelaa kissakorttipeliä</Link>
      <Link to="/breakout" className="bigbutton">Pelaa breakouttia</Link>
    </div>
  )
}

export default Home