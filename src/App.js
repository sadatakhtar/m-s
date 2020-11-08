import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body'
import React, { useState, useEffect } from 'react' ;
import './App.css';
//https://quotes-cyf.glitch.me

function App() {
 const [fetchedData, setFetchedData] = useState("");

 useEffect(() => {
  fetch('https://quotes-cyf.glitch.me/quotes/random')
  .then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data);
    setFetchedData(data);
  })
  .catch(err => {
    console.error(err);
    console.log('Error!!!!');
  })
  
 }, []);



  return (
    <div className="App">
     <Header />
     <Body fetchedData={fetchedData}/> 
     <Footer />
    </div>
  );
}

export default App;
