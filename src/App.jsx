import './App.css'
// import { Container, Row, Col } from "react-bootstrap";

import MyBookCard from "./components/MyBooksCards";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import WelcomeAlert from "./components/MyWelcomeAlert";

function App() {
  return (
    <div className="d-flex flex-column" style={{minHeight:"100vh"}}>
      <header>
        <MyNavbar />
      </header>
      <main className="flex-grow-1">
        <WelcomeAlert/>
        <MyBookCard/>
      </main>
      <footer className="bg-dark" data-bs-theme="dark">
        <MyFooter/>
      </footer>
    </div>
  );
}

export default App;
