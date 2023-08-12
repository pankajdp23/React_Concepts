import { useContext } from 'react';
import { Context } from './App';


function MyComponent() {
  const value = useContext(Context);

  return <span>{value}</span>;
}

export default MyComponent;