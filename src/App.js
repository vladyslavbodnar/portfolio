import About from "./components/About";
import Header from "./components/Header";
import WelcomeScreen from "./components/WelcomeScreen";

function App() {
    document.title = "Vladyslav Bodnar | Front-end Developer";

    return (
        <div className="App">
            <Header />
            <WelcomeScreen />
            <About />
        </div>
    );
}

export default App;
