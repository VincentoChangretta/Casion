import { CasinoPage } from "pages/CasinoPage";
import { SitiPage } from "pages/SitiPage";
import { useContext } from "react";
import { Route, Routes } from "react-router";
import { Footer } from "widgets/Footer/Footer";
import { Header } from "widgets/Header";
import { NavRoutes } from "widgets/Header/routes/routes";
import { Modal, ModalContext, useModal } from "./ModalProvider";

function App() {
  const { isOpen, closeModal } = useModal();
  const { modalData } = useContext(ModalContext);
  return (
    <div className="app text">
      <Header />
      <main className="grow">
        <Routes>
          <Route path={NavRoutes.CASINO_NON_AAMS} element={<CasinoPage />} />
          <Route path={NavRoutes.SITI_NON_AAMS} element={<SitiPage />} />
        </Routes>
        {isOpen && (
          <Modal isOpen={isOpen} onClose={closeModal} modalData={modalData} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
