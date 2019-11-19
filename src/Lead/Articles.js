import React, {Component} from 'react'
import './Article.css'
import { Link } from 'react-router-dom';
import Data from '../Data.js'

export default class Articles extends Component {
    constructor(props){
        super(props)
        this.state={
          
          
        }
    }
   


    render(){
        for(let i=0; i<Data.articles.length+1; i++){
            console.log(this.props.match.params.article)
            console.log(Data.articles[0][i].article)
        if(this.props.match.params.article===Data.articles[0][i].article){
        return(
            <section className="articlePage">
           
            <Link to='/leadership' class='buttonLink' ><button class='backButton'>All <br/>Posts</button></Link>
            <span class='articleHeader'>
            <p><b class='title'>{Data.articles[0][i].title}</b>
            <br/>
            
            {Data.articles[0][i].author}
            {Data.articles[0][i].date} · {Data.articles[0][i].read}</p>
            </span>
            <br/>
            
            <img className='articlePhoto' src={Data.articles[0][i].img} alt='article'></img>
            <p className='credits'>Image is from Sandra at HerCreativeStudio.com</p>
            <p class='content'>{Data.articles[0][i].content1}  
            <br/>
            <br/>
            {Data.articles[0][i].original}           
            </p>
            </section>
        )
        }
        
    }
}
}
