// import React from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import './components/Header.css';

function App() {
  return (
    <>
      <Header />
      <Card username="Manikanta" img='https://images.pexels.com/photos/825904/pexels-photo-825904.jpeg?auto=compress&cs=tinysrgb&w=800' />
      <Card username="Dileep" />
    </>
  );
}

export default App;
