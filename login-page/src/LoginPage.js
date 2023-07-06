import { useState } from "react";
import './App.css';
import axios from "axios";
//import { useNavigate } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import FormPage from "./FormPage";


//const navigate = useNavigate();
function App() {
  const usenavigate = useNavigate();
  //const history = useHistory();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //const usenavigate=useNavigate();

  console.log({ email, password })
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  

  
  const handleApi = () => {
    console.log({ email, password})
    axios.post('https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login', {
      email: email,
      password: password
    }).then(result => {
      console.log(result.data)
      alert(' Login Success')
      usenavigate("/form")
      //history.push("FormPage")
      //navigate("/FormPage.js")

    })
      .catch(error => {
        alert('Login Failed')
        console.log(error)
      })
  }

  return (
    <div className="App">
      Email:<br/> <input value={email} onChange={handleEmail} type="text" /> <br />
      Password:<br/> <input value={password} onChange={handlePassword} type="text" /> <br />
      <button onClick={handleApi} >Login</button>
    </div>
  );
}

export default App;