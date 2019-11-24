import React, {Component} from 'react'
import './Home.css'
import Main from '../Main/Main'

export default class Home extends Component {
        constructor(props){
            super(props)
            this.state={
                
            }
            this.name=React.createRef();
        }

        

        render(){

        return(
            <section className='page'>
            <section className='homePage'>
                <p> Welcome! <br/>  <br/>I am a new developer with a background in finance, leadership, and e-Commerce. My favorite class in college was Computer Science, and I've always gravitated towards roles that have analytical and technical challenges. Recently, I made the exciting decision to invest in a coding bootcamp, so that I can pursue my passion for technology. <br/><br/>I'm learning Javascript, jQuery, React, HTML, and CSS. I'm also learning about responsive, mobile-first design, testing with Mocha and Chai, deploying API servers with Express, SQL, and more. <br/><br/> I'm also supplementing my bootcamp experience by getting involved in the tech community. Since learning to code, I've attended a conference, and I attend weekly tech meetups. I enjoy listening to tech podcasts like Code Newbie, Free Code Camp Podcast, & Software Engineering Daily. </p>
            </section>
               <Main />
           </section>
            
        )
        
    }
}