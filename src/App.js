import logo from './logo.svg';
import './App.css';
import Directory from "./components/Directory";
import HeaderBar from './components/Header';
import FooterBar from './components/Footer';
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = true;

function App() {
  return (
    <>
      <HeaderBar />
      <Directory />
      <FooterBar />
    </>
  );
}

export default App;
