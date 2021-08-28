import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import WelcomeScreen from "./components/WelcomeScreen";

function App() {
    return (
        <div className="App">
            <Header />
            <WelcomeScreen />
            <About />
            <Skills />
            <Portfolio />
            <Footer />
        </div>
    );
}

export default App;
