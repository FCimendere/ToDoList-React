import { useState } from 'react'
import './App.css'
import CssBaseline from "@mui/material/CssBaseline";
import TodoList from './TodoList';
import TodoNavbar from './TodoNavbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < CssBaseline />
      < TodoNavbar />
      < TodoList />
    </>
  )
}

export default App
