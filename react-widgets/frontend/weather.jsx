import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.sendAJAXReq = this.sendAJAXReq.bind(this);
    this.getWeatherData = this.getWeatherData.bind(this);
  }
  
  componentDidMount () {
    navigator.geolocation.getCurrentPosition(this.getWeatherData);
  }
  
  sendAJAXReq (url) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (xmlhttp.status == 200) {
             
               this.setState({
                 cityName: JSON.parse(xmlhttp.responseText).name,
                 temperature: JSON.parse(xmlhttp.responseText).main.temp - 273.1 
               });
               
              debugger;
           }
           else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }


  getWeatherData (position) {
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=f816d7f39052e3a98b21952097a43076`;
      
    this.sendAJAXReq(url);
  }
  
  render() {
    return (<h1>Weather!</h1>);
  }
}

export default Weather;