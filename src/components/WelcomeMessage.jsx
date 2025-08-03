import WelcomeMessage from 'src/components/WelcomeMessage.jsx';

function App() {
    return (
        <div>
            <WelcomeMessage />
        </div>
    );
}

export default App;

function WelcomeMessage() {
    return (
        <div>
            <h1>Hello everyone, I am learning React at ALX!</h1>
            <p>This is a simple JSX component.</p>
            <p>I am learning about JSX!</p>
        </div>
    );
}

export default WelcomeMessage;