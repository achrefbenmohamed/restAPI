import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AddUser } from './Components/AddUser';
import { EditUserr } from './Components/EditUser';
import { Home } from './Components/Home';
import { ListUser } from './Components/ListUser';
import { NavUser } from './Components/NavUser';

function App() {
  return (
    <div>
      <NavUser />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Users' element={<ListUser />} />
        <Route path='/Add' element={<AddUser />} />
        <Route path='/edit/:id' element={<EditUserr />} />
      </Routes>
    </div>
  );
}

export default App;
