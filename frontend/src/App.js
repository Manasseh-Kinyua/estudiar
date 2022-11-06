import Container from '@mui/material/Container';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from './screens/HomeScreen';
import SingleRoom from './screens/SingleRoom';

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
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
