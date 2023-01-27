import { useState, useEffect } from "react";
import readXlsxFile from "read-excel-file";

import "./App.css";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  useEffect(() => {
    if (selectedFile && selectedFile?.name.includes(".xlsx")) {
      readXlsxFile(selectedFile).then((rows) => {
        console.log(rows);
      });
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
      <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
    </div>
  );
}

export default App;
