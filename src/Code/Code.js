import React, {Component} from 'react'
import '../Engineers.css'
import quizapp from './quizapp.png'
import './Code.css'
import ParkApp from './ParkApp.png'
import noteful from './noteful.png'

export default class Code extends Component {
    constructor(props){
        super(props)
        this.state={
          
        }
    }
    
    

    render(){
        
        return(
        
            <section className='projectPage'>
            <section className='projects'>
            <section className='project1'>
            <img src={quizapp} className='winephoto'alt='quiz-app'/> <section className='description'><a href='https://github.com/tcgronk/Quiz-App' target='_blank'><b className='title'>Quiz App</b></a>
            <p>This was one of my first projects. I have a personal interest in studying the wine industry, so I created a wine quiz to test wine industry knowledge.</p>
                <ul className='projectList'>Technologies Used: 
                    <li>Javascript</li>
                    <li>jQuery</li>
                    <li>HTML/CSS</li>
                </ul>
            </section>
            </section>
            <section className='project2'>
            <img src={ParkApp} className='parkphoto'alt='quiz-app'/> <section className='description'><a target='_blank' href='https://github.com/tcgronk/outdoorApp'><b className='title'>Parks API App</b></a><p>This was my first experience implementing data from multiple APIs. Users can search for their state or a state they want to travel to. Then, they will be provided with a description of National Parks in the state, the 3-day forecast in each park, and nearby restaurants and attractions. I used the National Parks API for the park information, Weatherbit API for the forecast, and the Foursquare API for the nearby attractions.  </p>
            <ul className='projectList'>Technologies Used: 
                    <li>Javascript</li>
                    <li>jQuery</li>
                </ul>
            </section>
            </section>
            <section className='project3'>
            <a href='https://github.com/tcgronk/Noteful-App' target='_blank'><img src={noteful} className='notephoto'alt='quiz-app'/> </a><section className='description'><a href='https://github.com/tcgronk/Noteful-App' target='_blank'><b className='title'>Note Taking App</b></a>
            <p>This was one of my first projects using React. Users can add new folders and notes to the notetaking app. They can also delete old notes. </p>
            <ul className='projectList'>Technologies Used: 
                    <li>Javascript</li>
                    <li>React</li>
            </ul>
            </section>
            </section>
            </section>
            </section>
        )
        
    }
}