import { useState } from 'react';
import './App.css';
import {Button, Form, FormCheck, FormControl, FormLabel} from "react-bootstrap"
function App() {
  
  const [checked, setChecked] = useState(true)
  const [adres, setAdres] = useState("")
  const [login, setLogin] = useState("")
  const [haslo, setHaslo] = useState("")

  // nazwa funkcji: handleFill
  // opis funkcji: ustawia adres, login i haslo na wartosci z inputow
  // parametry: brak
  // zwracany typ i opis: brak
  // autor: 12345678901
  const handleFill = ()=>{
    setAdres(document.getElementById('adres').value)
    setLogin(document.getElementById('login').value)
    setHaslo(document.getElementById('haslo').value)
  }

  return (
    <div>
      {/* blok 1 */}
      <div>
        <h1>Menedżer hasel - wykonal 12345678901</h1>

        <Form>
          <FormLabel htmlFor='adres'>Adres WWW</FormLabel>
          <FormControl id='adres' onChange={(e)=>console.log(e)} placeholder='Adres strony WWW'/>

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
        <p class="lead p-2 text-primary">Adres: {adres}</p>
        <p class="p-2">Login: {login}</p>
        <p class="p-2">Haslo{checked ? " automatycznie generowane" : `: ${haslo}`}</p>
      </div>
    </div>
  );
}

export default App;
