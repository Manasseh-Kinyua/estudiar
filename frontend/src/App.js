import Container from '@mui/material/Container';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from './screens/HomeScreen';
import SingleRoom from './screens/SingleRoom';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import UserList from './screens/UserList';
import RoomListScreen from './screens/RoomListScreen';
import MessageListScreen from './screens/MessageListScreen';
import CreateRoomScreen from './screens/CreateRoomScreen';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main className='py-3'>
          <Container maxWidth='xl'>
            <Routes>
              <Route path='/' element={ <HomeScreen /> } />
              <Route path='/room/:id' element={ <SingleRoom /> } />
              <Route path='/login' element={ <LoginScreen /> } />
              <Route path='/register' element={ <RegisterScreen /> } />
              <Route path='/room/create' element={ <CreateRoomScreen /> } />
              <Route path='/admin/userlist' element={ <UserList /> } />
              <Route path='/admin/roomlist' element={ <RoomListScreen /> } />
              <Route path='/admin/messagelist' element={ <MessageListScreen /> } />
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
