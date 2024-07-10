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
        style={{backgroundColor: grades ? '#bebebe' : 'white'}}
      >
        Grades & Skills
      </button>
      <button
        className='information_button work_experience_button'
        onClick={() => handleSection('Experience')}
        style={{backgroundColor: experience ? '#bebebe' : 'white'}}
      >
        Work Experience & Internships
      </button>
      <button
        className='information_button contact_button'
        onClick={() => handleSection('Contact')}
        style={{backgroundColor: contact ? '#bebebe' : 'white'}}
      >
        Contact Info
      </button>
      </div>

      {grades && <div className='grades info_outer_section'>

          <div className='info_section'>
            <h3 className='info_title'>Thirsk School & Sixth Form College</h3>
            <p className='info_info'><span className='info_bold'>GCSEs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 9, 9, 9, 9, 9, 8, 8, 8, 8, 7</p>
            <p className='info_info'><span className='info_bold'>ALevels&nbsp;&nbsp;&nbsp;</span> A*, A*, A*, A* (Biology, Chemistry, Mathematics, EPQ)</p>
            <p className='info_info'><span className='info_bold'>Other&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Head Boy, top student in year 12 and 13, all levels of DofE, football district</p>
          </div>

          <div className='info_section'>
            <h3 className='info_title'>University College London (UCL), BSc Biochemistry</h3>
            <p className='info_info'><span className='info_bold'>Year 1</span> &nbsp;&nbsp;&nbsp;70% First Class</p>
            <p className='info_info'><span className='info_bold'>Year 2</span> &nbsp;&nbsp;&nbsp;74% First Class</p>
            <p className='info_info'><span className='info_bold'>Modules&nbsp;&nbsp;&nbsp;</span>Coding For BioScience Research (Python). Achieved 96% in final exam.</p>
            <p className='info_info'><span className='info_bold'>Other&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>UCL Football Club</p>
          </div>

          <div className='info_section'>
            <h3 className='info_title'>Skills</h3>
            <p className='info_info'><span className='info_bold'>Profecient Programming</span> &nbsp;&nbsp;&nbsp;JavaScript (ReactJS), Python</p>
            <p className='info_info'><span className='info_bold'>Beginner Programming</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SwiftUI, R-Studio</p>
          </div>
        </div>}


      {experience && <div className='experience info_outer_section'>
        
          <div className='info_section'>
            <h3 className='info_title'>Avanade Technology Internship (summer 2024)</h3>
            <p className='info_info'>• Worked in the data and AI team on an AI pricing model.</p>
            <p className='info_info'>• Learned about various ML models, specifically RandomForest.</p>
            <p className='info_info'>• Worked with the software engineering to develop various softwares.</p>
          </div>

          <div className='info_section'>
            <h3 className='info_title'>Squadoo Social Media Internship (Aug 2023 - Jan 2024)</h3>
            <p className='info_info'>• Worked as a social media manager for a startup app that connects people through sports.</p>
            <p className='info_info'>• Used various editing software, HTML and CSS to develop UI for the posts.</p>
            <p className='info_info'>• Filmed street interviews throughout London to promote the app.</p>
            <p className='info_info'>• Worked with my football team (UCL) to film content and advertise for student ambassadors.</p>
          </div>

          <div className='info_section'>
            <h3 className='info_title'>Biking Connect Founder (Feb 2020 - present)</h3>
            <p className='info_info'>• A social media platform aimed at showcasing the best road bikes and news.</p>
            <p className='info_info'>• Gained an Instagram following of over 120 thousand spread over 2 accounts.</p>
            <p className='info_info'>• Consistently posted on my pages and platforms to increase engagement and interaction.</p>
            <p className='info_info'>• Worked with brands and companies to help promote their products and services.</p>
          </div>

        </div>}

      {contact && <div className='contact info_outer_section'>
          <p className='contact_info'>Email bobbyjames839@gmail.com, alternatively you can send me a message on LinkedIn <a href='https://www.linkedin.com/in/bobby-davidson1/'>here.</a></p>
        </div>}
    </div>
    </>
  )
}
