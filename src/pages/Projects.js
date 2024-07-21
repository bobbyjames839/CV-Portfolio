import '../styles/Projects.css'
import home from '../images/home.png'
import github from '../images/github.png'

export const Projects = () => {

  const Project = ({ title, desc, language, link, website}) => {
    return (
      <div className='project_section'>
        <h3 className='project_title'>{title}</h3>
        <p className='project_desc'>{desc}</p>
        <p className='project_languages'>{language}</p>
        <a href={link}>
          <img className='project_github' src={github} alt='GitHub' />
        </a>
        {website && (
        <a className='project_website' href={website}>
          Visit Website
        </a>
        )}
      </div>
    );
  };

  return (
    <>
    <div className='container_projects'></div>
    <div className="projects">
      <a href='/'>
        <img alt='Home' className='home_image' src={home}/>
      </a>
      <h1 className='projects_title'>My Projects</h1>
      <p className='projects_intro'>Here are some of my most recent coding projects.</p>

      <Project 
      title='Type 1 Diabetes Machine Learning Model' 
      desc='Created a web app where I input data on every meal that I have eaten, this data is automatically sent to a google form. When I have enough data I will make a model that predicts how much insulin I should inject after a meal.' 
      language='JavaScript, Google Forms' 
      link = 'https://github.com/bobbyjames839/Diabetes-Data-Collector-V2'
      website='https://diabetesv2.netlify.app'></Project>

      <Project 
      title='Algorithmic Trading Website' 
      desc='Ecommerce site selling a trading algorithm. Please note that this website was only used for personal use and all text on there, ie reviews, T&C etc is AI generated.' 
      language='ReactJS, Stripe Payments, Netlify' 
      link = 'https://github.com/bobbyjames839/Trading-Algorithm-Website'
      website='https://serene-fairy-c17033.netlify.app/'></Project>

      <Project 
      title='CompanyHouse API' 
      desc='Software which enables you to search for companies from the CompanyHouse database based off multiple parameters. This is not finished and only works in localhost because I was unsure on how to parse the API secret key to Netlify. The code is unresponsive (ie, only made for computer).' 
      language='ReactJS, API, Netlify' 
      link = 'https://github.com/bobbyjames839/CompanyHouse-API'
      website='https://companysearcher.netlify.app'></Project>

      <Project 
      title='Coding Module Cognitive Test' 
      desc='Memory test for my Python coding module. The test is run in a notebook and the results are sent to a google form to be analysed. The result is also sent to a firebase database so that people recieve information on how well they did in the class.' 
      language='Python, Firebase, Google Forms' 
      link = 'https://github.com/bobbyjames839/Cognitive-Test'></Project>

      <Project 
      title='Telegram and Trading Bot' 
      desc='Telegram bot that you can speak to from the Telegram app, please note there are also some trading bots in this repo.' 
      language='Python' 
      link = 'https://github.com/bobbyjames839/Python-Bots'></Project>

      <Project 
      title='Stock Price Machine Learning' 
      desc='Various ML models to predict stock data using RandomForestClassifier, LogisticRegression, LinearRegression' 
      language='Python' 
      link = 'https://github.com/bobbyjames839/Machine-Learning-Intro/tree/main'></Project>
    </div>
    </>
  )
}