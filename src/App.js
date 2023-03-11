import './App.css'
import Cards from './components/Cards/Cards.jsx'
// import characters from './data.js'
import Nav from './components/Nav/Nav'
import { useState, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'



function App () {

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = 'thomasnovella12@gmail.com';
  const password = 'hola123';
  const navigate = useNavigate()

  const login = (userData) =>{
    if(userData.username === username && userData.password === password){
      setAccess(true);
      navigate('/home')
    }
  }
  useEffect(() => {
    !access && navigate('/');
 }, [access]);


  const location = useLocation()

  function onSearch(id) {
    const URL_BASE = 'https://be-a-rym.up.railway.app/api'
    const API_KEY= 'b33c183065d1.6a36b44c24d84b5e1b7d' 
    fetch(`${URL_BASE}/character/${id}?key=${API_KEY}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name && !characters.find((char)=> char.id === data.id)) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
    }

    function onClose(id){
      return setCharacters(characters.filter((char)=> char.id !== id))
    }
    

  return (
    
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname === '/' ? <Form login={login}/> : <Nav onSearch={onSearch} />}
      
      <Routes>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
