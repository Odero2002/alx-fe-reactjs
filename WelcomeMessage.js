function WelcomeMessage() 
{
    return (
        <div>
            <h1>Hello everyone, I am learning React at ALX!</h1>
            <p>This is a simple JSX component.</p>
            <p>I am learning about JSX!</p>
        </div>
    );
}

export default WelcomeMessage;
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  return (
    <div className="App">
      <WelcomeMessage />
      src/components/WelcomeMessage.jsx
    </div>
  );
}

export default App;
alx-react-app/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   └── WelcomeMessage.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── ...