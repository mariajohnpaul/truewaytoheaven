import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* class Hello extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      age : 30,
      name : "Joseph's year",
    }
  }
    render() {
        setTimeout(function(){
            this.setState( {age:40, name:"God is great"})
        }.bind(this),5000);

        return (    
          <div className="App">      
            <p> 
              "God is great "
            </p>
            <p>{this.state.name}</p>
            <p>{this.state.age}</p>
          </div>
        );
    }
} */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); 

/* ReactDOM.render( 
    <Hello/> ,
    document.getElementById("MJ")
); */

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/ 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();