import Header from "./components/Header";
import WelcomeScreen from "./components/WelcomeScreen";

function App() {
    document.title = "Vladyslav Bodnar | Front-end Developer";

    return (
        <div className="App">
            <Header />
            <WelcomeScreen />
        </div>
    );
}

export default App;
