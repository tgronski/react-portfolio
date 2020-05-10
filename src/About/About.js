import React from 'react'
import './About.css'
import PersonalBrand from './logo copy.png'

class About extends React.Component {
 

    render(){
       
       return  <section className='About'> 
       <br/>
       <br/>
       <section className="About-description">
       <img src={PersonalBrand} className='personal-logo'alt='personal-logo'/> 
        <section className='contact'>
        <i className="About-me"> Let's Connect: </i>
        <p>Email me at <br/>tessgronski@gmail.com</p>
        <p>or find me on </p>
        <a target='_blank' href='https://www.linkedin.com/in/therese-tess-gronski/'>Linked In </a>
        <span>//{' '}</span>
        <a target='_blank' href='https://github.com/tcgronk'>Github </a>

        </section>
        </section>
        </section>
    }
}
export default About;