import {useState} from 'react'
import './App.css'

function App() {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');

  async function LoginUser(event) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:1338/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  }  

  return <div className='App'>
    <form onSubmit={LoginUser}>
    <h1 className='App-logo'>Login</h1>
    <input 
    type='email' 
    placeholder='Email'
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    ></input>
    <input 
    type='password' 
    placeholder='Password'
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    ></input>
    <input type='submit' value="Submit"/>
    </form>
  </div>
}

export default App;
