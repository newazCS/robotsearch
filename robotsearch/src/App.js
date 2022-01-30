import React, { Component } from 'react';
import CardList from './CardList';
import robots from './robots';
import Scroll from './Scroll';
import SearchBox from './SearchBox';


 class App extends Component {
     constructor(){
         super();
         this.state={
            robots:robots,
            searchfield:''
         }
     }

     onSearchChange = (e) => {
         this.setState({searchfield:e.target.value});
        
     }
    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="tc">
               <h1 className="f1">RoboFrinds</h1>
               <SearchBox searchChange={this.onSearchChange}></SearchBox>
               <Scroll>
               <CardList robots={filteredRobots}></CardList>
                </Scroll>
               
           </div>
        );
    }
 
 }

 export default App;