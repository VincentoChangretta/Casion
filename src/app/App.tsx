import { MainPage } from "pages/MainPage";
import { Header } from "widgets/Header";
import { UnderHeader } from "widgets/UnderHeader/UnderHeader";

function App() {
  return (
    <div className="app text">
      <Header />
      <UnderHeader/>
      <main>
        <MainPage />
      </main>
    </div>
  );
}

export default App;
