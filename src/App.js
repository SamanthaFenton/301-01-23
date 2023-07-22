import "./App.css";

import { useState } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import SelectedBeast from "./components/SelectedBeast/SelectedBeast";

import data from "./components/Main/Data/data.json";

function App() {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [beastData, setBeastData] = useState(data);

  function handleModal(beast) {
    setModal(!modal);
    setModalContent(beast);
  }

  function closeModal() {
    setModal(!modal);
    setModalContent({});
  }
  function handleBeasts(event) {
    let beastNum = parseInt(event.target.value);
    const filteredBeasts = data.filter((beast) => beast.horns === beastNum);
    event.target.value === "" ? setBeastData(data) : setBeastData(filteredBeasts);
  }

  return (
    <div className="App">
      <Header />
      <Main data={data} handleModal={handleModal} />
      {modal && <SelectedBeast modalContent={modalContent} closeModal={closeModal} />}
      <Footer />
    </div>
  );
}

export default App;
