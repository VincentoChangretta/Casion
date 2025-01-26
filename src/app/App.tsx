import { MainPage } from "pages/MainPage";
import { Footer } from "widgets/Footer/Footer";
import { Header } from "widgets/Header";
import { UnderHeader } from "widgets/UnderHeader/UnderHeader";

function App() {
  return (
    <div className="app text">
      <Header />
      <UnderHeader />
      <main>
        <MainPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
