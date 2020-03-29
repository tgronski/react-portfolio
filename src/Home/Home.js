import React, {Component} from 'react'
import './Home.css'
import Main from '../Main/Main'
// import About from '../About/About'

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
                <p> Welcome! <br/>  <br/>I am a new developer with a background in finance, leadership, and e-Commerce. My favorite class in college was Computer Science, and I've always gravitated towards roles that have analytical and technical challenges. I currently work full time as a Technical Project Manager, and recently, I made the exciting decision to invest in a coding bootcamp. <br/><br/>After work & on the weekends, I'm learning Javascript, jQuery, React, HTML, and CSS. I'm also learning about responsive, mobile-first design, testing with Mocha and Chai, deploying API servers with Node & Express, PostgreSQL, and more. <br/><br/> I'm also supplementing my bootcamp experience by getting involved in the tech community. Since learning to code, I've attended a conference, and I attend weekly tech meetups.  </p>
            </section>
               <Main />
               {/* <About/> */}
           </section>
            
        )
        
    }
}