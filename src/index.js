import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const data = [
  {className:" yellow",name:"*"},
  {className:" yellow",name:"/"},
  {className:" yellow",name:"+"},
  {className:" yellow",name:"-"},
  {className:" yellow",name:"="},
  {className:" yellow delete",name:"del"},
  {className:" grey",name:1},
  {className:" grey",name:2},
  {className:" grey",name:3},
  {className:" grey",name:4},
  {className:" grey",name:5},
  {className:" grey",name:6},
  {className:" grey",name:7},
  {className:" grey",name:8},
  {className:" grey",name:9},
  {className:" grey",name:0},
  {className:"grey",name:"."},
  {className: "clear",name:"Clear"}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={data}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

