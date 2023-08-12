import { createContext } from 'react';
import './App.css'
import MyComponent from './MyComponent';

export const Context = createContext('Default Value');


function App() {
  const value = 'My Context Value';

  return (
    <Context.Provider value={value}>
    <MyComponent />
  </Context.Provider>

  )
}

export default App
