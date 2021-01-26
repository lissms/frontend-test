import React, { useEffect, useState } from "react";
import data from "./service/getData";
import Menu from "./components/Menu";
import ModalWindow from "./components/ModalWindow";

function App() {
  const [itemsList, setItemsList] = useState([]);
  const [hasFlag, setHasFlag] = useState(false);

  useEffect(() => {
    data.getData().then((data) => {
      setItemsList(data);
    });
  }, []);

  const getValueForNewSections = (objet) => {
    if (objet !== "") {
      setItemsList([...itemsList, objet]);
    }
  };
  const showModalWindow = () => {
    setHasFlag(hasFlag ? false : true);
  };

  return (
    <div className="App">
      <Menu itemsList={itemsList} />
      <div onClick={showModalWindow}>
        <p>Add new section</p>
      </div>
      {hasFlag ? <ModalWindow getValueForNewSections={getValueForNewSections} /> : null}
    </div>
  );
}

export default App;
