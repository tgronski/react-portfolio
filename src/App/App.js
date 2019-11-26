import React,{Component} from 'react';
import { Route, Link } from 'react-router-dom';
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Code from '../Code/Code'
import Lead from '../Lead/Lead'
import './App.css';
import Articles from '../Lead/Articles'



export default class App extends Component{

  

  renderNavRoutes(){
    
    return(
      <span>
      <Route exact path='/' component={()=><Nav pageWrapId={"page-wrap"} outerContainerId={"App"}/>}/>
      <Route path='/home' component={Nav}/>
      <Route path= "/tech" component={Nav} />
      <Route path= "/leadership" component={Nav} />
      <Route path= "/code" component={Nav} />
      </span>
    )
  }
  renderMainPage(){
    return(
      <span>
      {['/', '/home'].map(path => (
                    <Route
                        exact
                        path={path}
                        component={()=><Home/>}
                    />
      ))}
      
      <Route exact path= "/leadership" component={()=><Lead />} />
      <Route path= "/code" component={()=><Code/>} />

      {['/leadership/:article'].map(path =>(
        <Route  
        exact
        key={path}
        exact
        path={path} component={Articles}/>
        ))}
      </span>
    )
  }


  render(){
    const queryString = require('query-string');
    const params = queryString.parse(document.location.search);
    const redirect = params.redirect; // this would be "abcdefg" if the query was "?redirect=abcdefg"
    if (document.location.pathname === '/' && redirect) {
      document.location.assign(`${document.location.origin}/${redirect}`);
    }
  return (
   
    <div className="App" >
      <header className="App-header">
      
      <link href="https://fonts.googleapis.com/css?family=Text+Me+One&display=swap" rel="stylesheet"/>
      <Link className='nav' to='/' ><h1  >business(engineer)</h1></Link>  
      <nav>{this.renderNavRoutes()}</nav>
       
      </header>
      

      <div className='body' id="page-wrap">
      <main>{this.renderMainPage()}</main>     
    
      
    
      </div>
      <Footer />
    </div>
   
  );
}

}

