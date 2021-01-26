import React, { useEffect, useState } from "react";
import data from "./service/getData";
import Menu from "./components/Menu";
import ModalWindow from "./components/ModalWindow";

function App() {
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    data.getData().then((data) => {
      setItemsList(data);
    });
  }, []);

  return (
    <div className="App">
      <Menu itemsList={itemsList} />
      <div>
        <p>Add new section</p>
      </div>
      <ModalWindow></ModalWindow>
    </div>
  );
}

export default App;
