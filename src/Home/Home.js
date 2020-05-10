import React, {Component} from 'react'
import './Home.css'
import Main from '../Main/Main'
import About from '../About/About'

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
                <p className='bio'> <i className="welcome"> Welcome! </i>
                <br/>  <br/>
                Hi, I'm Tess Gronski. I am a Bay Area developer with one year of Javascript experience. I also have a business background in finance, leadership, and e-Commerce. </p>
            </section>
               <Main />
               <About/>
           </section>
            
        )
        
    }
}