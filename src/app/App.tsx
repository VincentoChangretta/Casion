import { CasinoPage } from "pages/CasinoPage";
import { SitiPage } from "pages/SitiPage";
import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { Footer } from "widgets/Footer/Footer";
import { Header } from "widgets/Header";
import { NavRoutes } from "widgets/Header/routes/routes";

function App() {
  return (
    <div className="app text">
      <Header />
      <main className="grow">
        <Suspense fallback={<div>...Loading</div>}>
          <Routes>
            <Route path={NavRoutes.CASINO_NON_AAMS} element={<CasinoPage />} />
            <Route path={NavRoutes.SITI_NON_AAMS} element={<SitiPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
