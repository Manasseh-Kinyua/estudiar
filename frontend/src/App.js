import Container from '@mui/material/Container';
import { HashRouter, Routes, Route } from 'react-router-dom'

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
import EditRoomScreen from './screens/EditRoomScreen';
import ProfileScreen from './screens/ProfileScreen';
import UserEditScreen from './screens/UserEditScreen';

function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <main className='py-3'>
          <Container maxWidth='xl'>
            <Routes>
              <Route path='/' element={ <HomeScreen /> } />
              <Route path='/room/:id' element={ <SingleRoom /> } />
              <Route path='/login' element={ <LoginScreen /> } />
              <Route path='/register' element={ <RegisterScreen /> } />
              <Route path='/profile' element={ <ProfileScreen /> } />
              <Route path='/room/create' element={ <CreateRoomScreen /> } />
              <Route path='/room/edit/:id' element={ <EditRoomScreen /> } />
              <Route path='/admin/userlist' element={ <UserList /> } />
              <Route path='/admin/user/:id/edit' element={ <UserEditScreen /> } />
              <Route path='/admin/roomlist' element={ <RoomListScreen /> } />
              <Route path='/admin/messagelist' element={ <MessageListScreen /> } />
            </Routes>
          </Container>
        </main>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
