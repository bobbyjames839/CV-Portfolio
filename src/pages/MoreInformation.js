import '../styles/MoreInformation.css'
import home from '../images/home.png'
import { useState } from 'react'

export const MoreInformation = () => {

  const [contact, setContact] = useState(false)
  const [experience, setExperience] = useState(false)
  const [grades, setGrades] = useState(true)

  const handleSection = (page) => {
    setContact(false);
    setGrades(false);
    setExperience(false);
  
    const setPageFunctions = {
      Contact: setContact,
      Grades: setGrades,
      Experience: setExperience
    };
  
    if (setPageFunctions[page]) {
      setPageFunctions[page](true);
    } else {
      console.error(`Unknown page: ${page}`);
    }
  };

  const Experience = ({title, desc1, desc2, desc3, desc4, span1, span2, span3, span4}) => {
    return (
      <div className='info_section'>
        <h3 className='info_title'>{title}</h3>
        <p className='info_info'>{span1 && <span className='info_bold'>{span1}</span>}{desc1}</p>
        <p className='info_info'>{span2 && <span className='info_bold'>{span2}</span>}{desc2}</p>
        <p className='info_info'>{span3 && <span className='info_bold'>{span3}</span>}{desc3}</p>
        {desc4 && <p className='info_info'>{span4 && <span className='info_bold'>{span4}</span>}{desc4}</p>}
      </div>
    )
  }

  return (
    <>
    <div className='container'></div>
    <div className="more_information">
      <a href='/'>
        <img alt='Home' className='home_image' src={home}/>
      </a>
      <h1 className='information_title'>My Info</h1>
      <p className='information_intro'>Some more information with regards to my experience.</p>

      <div className='information_menu'>
        <button
          className='information_button grades_button'
          onClick={() => handleSection('Grades')}
          style={{backgroundColor: grades ? 'rgba(0,0,0,.7)' : 'transparent'}}
        >
          Grades & Skills
        </button>
        <button
          className='information_button work_experience_button'
          onClick={() => handleSection('Experience')}
          style={{backgroundColor: experience ? 'rgba(0,0,0,.7)' : 'transparent'}}
        >
          Work Experience & Internships
        </button>
        <button
          className='information_button contact_button'
          onClick={() => handleSection('Contact')}
          style={{backgroundColor: contact ? 'rgba(0,0,0,.7)' : 'transparent'}}
        >
          Contact Info
        </button>
      </div>

      {grades && <div className='grades info_outer_section'>

          <Experience
          title = 'Thirsk School & Sixth Form College'
          desc1 = '9, 9, 9, 9, 9, 8, 8, 8, 8, 7'
          desc2 = 'A*, A*, A*, A* (Biology, Chemistry, Mathematics, EPQ)'
          desc3 = 'Head Boy, top student in year 12 and 13, all levels of DofE, football district'
          span1 = 'GCSEs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
          span2 = 'ALevels&nbsp;&nbsp;&nbsp;'
          span3 = 'Other&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'>
          </Experience>

          <Experience
          title = 'University College London (UCL), BSc Biochemistry'
          desc1 = 'First Class (70%)'
          desc2 = 'First Class (74%)'
          desc3 = 'Coding For BioScience Research (Python). Achieved 96% in final exam.'
          desc4 = 'UCL Football Club'
          span1 = 'Year 1&nbsp;&nbsp;&nbsp;&nbsp;'
          span2 = 'Year 2&nbsp;&nbsp;&nbsp;&nbsp;'
          span3 = 'Modules&nbsp;&nbsp;&nbsp;'
          span4 = 'Other&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'>
          </Experience>

          <Experience
          title = 'Skills'
          desc1 = 'JavaScript (ReactJS), Python'
          desc2 = 'SwiftUI, R-Studio'
          span1 = 'Profecient Programming&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
          span2 = 'Beginner Programming&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'>
          </Experience>
        </div>}

      {experience && <div className='experience info_outer_section'>

          <Experience
          title = 'Avanade Technology Internship (summer 2024)'
          desc1 = '• Worked in the data and AI team on an AI pricing model.'
          desc2 = '• Learned about various ML models, specifically RandomForest.'
          desc3 = '• Worked with the software engineering to develop various softwares.'>
          </Experience>

          <Experience
          title = 'Squadoo Social Media Internship (Aug 2023 - Jan 2024)'
          desc1 = '• Worked as a social media manager for a startup app that connects people through sports.'
          desc2 = '• Used various editing software, HTML and CSS to develop UI for the posts.'
          desc3 = '• Filmed street interviews throughout London to promote the app.'
          desc4 = '• Worked with my football team (UCL) to film content and advertise for student ambassadors.'>
          </Experience>

          <Experience
          title = 'Biking Connect Founder (Feb 2020 - present)'
          desc1 = '• A social media platform aimed at showcasing the best road bikes and news.'
          desc2 = '• Gained an Instagram following of over 120 thousand spread over 2 accounts.'
          desc3 = '• Consistently posted on my pages and platforms to increase engagement and interaction.'
          desc4 = '• Worked with brands and companies to help promote their products and services.'>
          </Experience>
        </div>}

      {contact && <div className='contact info_outer_section'>
            <p className='contact_info'>Email bobbyjames839@gmail.com, alternatively you can send me a message on LinkedIn <a href='https://www.linkedin.com/in/bobby-davidson1/  '>here.</a></p>
          </div>}
    </div>
    </>
  )
}
