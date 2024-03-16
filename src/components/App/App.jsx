import './App.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { ThemeProvider } from 'providers/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <>
        <Header />
        <Main />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
