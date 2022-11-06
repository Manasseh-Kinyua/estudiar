import Container from '@mui/material/Container';

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main className='py-3'>
        <Container maxWidth='xl'>
          <h1>Welcome to Estudiar</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
