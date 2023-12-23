import {useState} from 'react'
import './App.css'

function App() {
  return <div className='App'>
    <form>
    <h1 className='App-logo'>Register</h1>
    <input type='text' placeholder='Name'></input>
    <input type='email' placeholder='Email'></input>
    <input type='password' placeholder='Password'></input>
    <button type='submit'>Submit</button>
    </form>
  </div>
}

export default App;
