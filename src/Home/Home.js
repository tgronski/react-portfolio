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
                <p > <i className="welcome"> Welcome! </i>
                <br/>  <br/>
                My name is Tess Gronski. I am a new developer with a background in finance, leadership, and e-Commerce. </p>
            </section>
               <Main />
               <About/>
           </section>
            
        )
        
    }
}