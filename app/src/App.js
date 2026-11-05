import { useState } from 'react';
import './App.css';
import {Button, Form, FormCheck, FormControl, FormLabel} from "react-bootstrap"
function App() {
  
  const [checked, setChecked] = useState(true)
  const [adres, setAdres] = useState("")
  const [login, setLogin] = useState("")
  const [haslo, setHaslo] = useState("")
  const [adresZapisany, setAdresZapisany] = useState("")
  const [loginZapisany, setLoginZapisany] = useState("")
  const [hasloZapisane, setHasloZapisane] = useState("")
  const [checkedZapisane, setCheckedZapisane] = useState(true)

  // nazwa funkcji: handleFill
  // opis funkcji: ustawia adres, login i haslo na wartosci z inputow
  // parametry: brak
  // zwracany typ i opis: brak
  // autor: 12345678901

  const handleFill = ()=>{
    setAdresZapisany(adres)
    setHasloZapisane(haslo)
    setLoginZapisany(login)
    setCheckedZapisane(checked)
  }

  return (
    <div>
      {/* blok 1 */}
      <div>
        <h1>Menedżer hasel - wykonal 12345678901</h1>

        <Form>
          <FormLabel htmlFor='adres'>Adres WWW</FormLabel>
          <FormControl id='adres' value={adres} onChange={(e)=>setAdres(e.target.value)} placeholder='Adres strony WWW'/>

          <FormLabel htmlFor='login'>Login</FormLabel>
          <FormControl id='login' placeholder='Twój login' value={login} onChange={(e)=>setLogin(e.target.value)}/>

          <div style={{display:"flex", flexDirection:"row", gap:"10px"}}>
            <FormCheck id='checkBox' defaultChecked onChange={(e)=>setChecked(e.target.checked)}/>
            <FormLabel htmlFor='checkBox'>Wygeneruj haslo</FormLabel>
          </div>
          
          <FormLabel htmlFor='haslo'>Haslo</FormLabel>
          <FormControl type='password' disabled={checked} id='haslo' value={haslo} onChange={(e)=>setHaslo(e.target.value)}/>
          
          <Button variant='primary' onClick={()=>handleFill()}>Zapisz</Button>
        </Form>
      </div>

      {/* blok 2 */}
      <div>
        <p class="lead p-2 text-primary">Adres: {adresZapisany}</p>
        <p class="p-2">Login: {loginZapisany}</p>
        <p class="p-2">Haslo{checkedZapisane ? " automatycznie generowane" : `: ${hasloZapisane}`}</p>
      </div>
    </div>
  );
}

export default App;
