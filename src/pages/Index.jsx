import { useState, useEffect, useContext } from "react";
import { SheetNamesContext } from "../context/SheetNamesContext";
import { readSheetNames } from "read-excel-file";

import "../App.css";

function Index() {
  const { setMonths, selectedFile, setSelectedFile } =
    useContext(SheetNamesContext);
  const [hideForm, setHideForm] = useState(false);

  useEffect(() => {
    if (selectedFile && selectedFile?.name.includes(".xlsx")) {
      readSheetNames(selectedFile).then((sheetNames) => {
        setMonths(sheetNames);
      });

      setHideForm(true);
    }
  }, [selectedFile]);

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {!hideForm && (
        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
      )}
    </div>
  );
}

export default Index;
