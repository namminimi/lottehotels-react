import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import RoomContainer from './container/RoomContainer';
import RoomDetailContainer from './container/RoomDetailContainer';
import SpDetailContainer from './container/SpDetailContainer';
import SpecialContainer from './container/SpecialContainer';
import Example from './pages/Example';
import Main from './pages/Main';
import EditPassword from './pages/member/EditPassword';
import IdFind from './pages/member/IdFind';
import JoinPage from './pages/member/JoinPage';
import Login from './pages/member/Login';
import PassFind from './pages/member/PassFind';
import Reservation from './pages/Reservation';
import WriteEvent from './pages/WriteEvent';
import WriteRoom from './pages/WriteRoom';



function App() {
 
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/special" 
      element={<SpecialContainer isMain={false} limits={10}/>}/>
      <Route path="/special/:no" element={<SpDetailContainer/>}/>
      <Route path='/join' element={<JoinPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/findid' element={<IdFind/>}/>
      <Route path='/findpass' element={<PassFind/>}/>
      <Route path='/updatepass' element={<EditPassword/>}/>
      <Route path='/writeevent' element={<WriteEvent/>}/>
      <Route path='/writeroom' element={<WriteRoom/>}/>
      <Route path='/room' element={<RoomContainer/>}/>
      <Route path='/roomdetail/:no' element={<RoomDetailContainer/>}/>
      <Route path='/test' element={<Example/>}/>
      <Route path='/reservation/*' element={<Reservation/>}/>
      {/* 서브라우팅 */}
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
