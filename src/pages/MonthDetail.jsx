import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SheetNamesContext } from "../context/SheetNamesContext";
import readXlsxFile from "read-excel-file";

const MonthDetail = () => {
  const { month } = useParams();
  const { selectedFile } = useContext(SheetNamesContext);
  const [dataFromExcel, setDataFromExcel] = useState([]);

  useEffect(() => {
    readXlsxFile(selectedFile, { sheet: month.toUpperCase() }).then((data) => {
      setDataFromExcel(data);
      console.log(data);
    });
  }, []);

  return (
    <div>
      MonthDetail <p>Viendo los detalles de {month}</p>
    </div>
  );
};

export default MonthDetail;
