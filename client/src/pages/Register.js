import {useState} from 'react'


function App() {
  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');

  async function registerUser(event) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:1338/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
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
    <form onSubmit={registerUser}>
    <h1 className='App-logo'>Register</h1>
    <input 
    type='text' 
    placeholder='Name'
    value={name}
    onChange={(e)=>setName(e.target.value)}
    ></input>
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
