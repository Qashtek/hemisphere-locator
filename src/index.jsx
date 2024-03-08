import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Hemisphere from './components/Hemisphere';
import './css/style.css';

class App extends React.Component{
// initializing state without the constructor method
    state = {
        latitude: null,
        errorMessage: ''
    }

    componentDidMount(){
        // fetching latitude from geolocation api
        window.navigator.geolocation.getCurrentPosition(
            (position) =>{
                this.setState(
                    {latitude: position.coords.latitude}
                )
            },
            (error) => {
                this.setState({
                    errorMessage: error.message
                })
            
            }
        );
    }

    render(){
       
        if(this.state.errorMessage && !this.state.latitude){
            return <div>{ this.state.errorMessage }</div>
        }
        else if(this.state.latitude && !this.state.errorMessage){
            return <div> <Hemisphere lat={this.state.latitude} /> </div>
        }
        else{
            return <div>Loading...</div>
        }

    }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
)