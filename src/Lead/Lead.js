import React, {Component} from 'react'
import '../Engineers.css'
import './Lead.css'
import leadership from './leadership.jpg'
import computer from './computer.jpg'
import { Link } from 'react-router-dom';


export default class Lead extends Component {
    constructor(props){
        super(props)
        this.state={
       
        }
    }
  

    render(){
        return(
           
            <section className="leadPage"> 
            <span className='contain'>      
            <section className='leadNotes'> <p>I love studying and practicing different leadership styles. I am most passionate about feedback, career coaching, and performance management. </p></section>
            <section className='articles'>
                <Link  to='/leadership/1' ><img src={leadership} alt='desktop'></img> <br/><b >An Actionable Guide to Managing Introverts</b></Link>
                <p>Aug 18, 2019 ||  3 min Read</p>
            </section>
            <section className='articles'>
                <Link to='/leadership/2' ><img src={computer} alt='computerdesk'></img> <br/><b >A Running List of Newbie Resources</b></Link>
                <p>Nov 3, 2019 ||  3 min Read</p>
            </section>
            <p className='leadQuote'>“If you want to build a ship, don’t herd people together to collect wood and don’t assign them tasks and work, but rather teach them to long for the endless immensity of the sea.” <br/>-Antoine de Saint-Exupery</p>
            </span>
            </section>
        )

        
        
    }
}