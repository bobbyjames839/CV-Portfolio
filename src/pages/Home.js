import { ParticlesBackground } from "../components/ParticleBackground"
import '../styles/Home.css'
import github from '../images/github.png'
import linkedin from '../images/linkedin.webp'
import { useNavigate } from "react-router-dom"

export const Home = () => {

  const navigate = useNavigate();

  const handleProjectsClick = (page) => {
    navigate(`/${page}`);
  };

  return (
    <div className="home">
      
      <ParticlesBackground id="tsparticles" />

      <div className="center">
        <h1 className="my_name">Bobby Davidson</h1>
        <p className="my_desc">Hi, I'm Bobby, a 3rd year Biochemistry student at University College London (UCL). I began teaching myself coding as a hobby in April 2023 and I have enjoyed it ever since. I code in JavaScript and Python, and also some others to a beginners level. I am particuarly interested in software engineering, however I am also currently teaching myself the theory behind ML. Please explore and feel free to reach out to me!</p>

        <div className="buttons">
          <button className="home_button" onClick={() => handleProjectsClick('projects')}>View my projects</button>
          <button className="home_button" onClick={() => handleProjectsClick('more_information')}>More Information</button>
        </div>

        <div className="links">
          <a href="https://github.com/bobbyjames839">
            <img className="social_button github" src={github}></img>
          </a>
          <a href="https://www.linkedin.com/in/bobby-davidson1/">
            <img className="social_button linkedin" src={linkedin}></img>
          </a>
        </div>
        
      </div>
    </div>
  )
}
