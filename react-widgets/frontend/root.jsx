import React from 'react';
import Clock from './clock.jsx';
import Tabs from './tabs.jsx';
import Weather from './weather.jsx'

const Root = () => {
  const tabs = [{ 
    title: "Tab 1",
    content: "I am the first tab!"
  },
  { 
    title: "Tab 2",
    content: "I am the second tab!"
  },
  { 
    title: "Tab 3",
    content: "I am an evil tab!"
  }];
  
  return (
    <div>
      <div><Clock /></div>
      <div><Tabs tabs={tabs} /></div>
      <div><Weather /></div>
    </div>
  );
};

export default Root;

// OpenWeather Solution API Key: f816d7f39052e3a98b21952097a43076