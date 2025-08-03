import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import WelcomeMessage from './components/WelcomeMessage';
import './App.css';
import './index.css';

function App() {
    return (
        <div>
            <Header />
            <WelcomeMessage />
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;