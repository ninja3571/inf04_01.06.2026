import { useState } from 'react';
import './App.css';
import {Button, Form, FormCheck, FormControl, FormLabel} from "react-bootstrap"
function App() {
  const [checked, setChecked] = useState(true)
  const [adres, setAdres] = useState("")
  const [login, setLogin] = useState("")
  const [haslo, setHaslo] = useState("")

  const handleFill = ()=>{
    console.log(document.getElementById(adres))
    console.log(document.getElementById(login))
    console.log(document.getElementById(haslo))
  }
  return (
    <div>
      {/* blok 1 */}
      <div>
        <h1>Menedżer hasel - wykonal 12345678901</h1>

        <Form>
          <FormLabel htmlFor='adres'>Adres WWW</FormLabel>
          <FormControl id='adres' placeholder='Adres strony WWW'/>

          <FormLabel htmlFor='login'>Login</FormLabel>
          <FormControl id='login' placeholder='Twój login'/>

          <div style={{display:"flex", flexDirection:"row", gap:"10px"}}>
            <FormCheck id='checkBox' defaultChecked onChange={(e)=>setChecked(e.target.checked)}/>
            <FormLabel htmlFor='checkBox'>Wygeneruj haslo</FormLabel>
          </div>
          
          <FormLabel htmlFor='haslo'>Haslo</FormLabel>
          <FormControl type='password' disabled={checked} id='haslo'/>
          
          <Button variant='primary' onClick={()=>handleFill()}>Zapisz</Button>
        </Form>
      </div>

      {/* blok 2 */}
      <div>
        <p style={{padding:"0.5rem", color:"blue"}}>Adres: {adres}</p>
        <p style={{padding:"0.5rem"}}>Login: {login}</p>
        <p style={{padding:"0.5rem"}}>Haslo: {adres ? (haslo && checked ? "Haslo automatycznie generowane" : haslo) : null }</p>
      </div>
    </div>
  );
}

export default App;
