import React, { useEffect, useState } from "react";
import data from "./service/getData";
import Menu from "./components/Menu";
import ModalWindow from "./components/ModalWindow";
import { Btn } from "./app.styled";

function App() {
  const [itemsList, setItemsList] = useState([]);
  const [hasModalOpen, setHasModalOpen] = useState(false);

  useEffect(() => {
    data.getData().then((data) => {
      setItemsList(data);
    });
  }, []);

  const getValueForNewSections = (objet) => {
    setItemsList([...itemsList, objet]);
  };
  const showModalWindow = () => {
    setHasModalOpen(hasModalOpen ? false : true);
  };

  return (
    <div className="App">
      <Menu itemsList={itemsList} />
      <Btn onClick={showModalWindow}>
        <p>Add new section</p>
      </Btn>
      {hasModalOpen ? (
        <ModalWindow setHasModalOpen={setHasModalOpen} getValueForNewSections={getValueForNewSections} />
      ) : null}
    </div>
  );
}

export default App;
