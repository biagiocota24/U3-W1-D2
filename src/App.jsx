import "./App.css";
import MyNavbar from "./components/MyNavbar";
import WelcomeAlert from "./components/MyWelcomeAlert";
import BookList from "./components/BookList";
import MyFooter from "./components/MyFooter";

import fantasyBooks from "./assets/BOOKS/fantasy.json";
import horrorBooks from "./assets/BOOKS/romance.json"
import romanceBooks from "./assets/BOOKS/scifi.json";
import scifiBooks from "./assets/BOOKS/history.json"
import historyBooks from "./assets/BOOKS/horror.json";
const allTheBooks = [...fantasyBooks, ...historyBooks, ...horrorBooks, ...romanceBooks, ...scifiBooks].sort(() => Math.random() - 0.5);

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <MyNavbar />
      </header>
      <main className="flex-grow-1">
        <WelcomeAlert />
        <BookList books={historyBooks} />
      </main>
      <footer className="bg-dark mt-3" data-bs-theme="dark">
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
