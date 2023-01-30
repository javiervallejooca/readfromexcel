import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SheetNamesContext } from "../context/SheetNamesContext";
import readXlsxFile from "read-excel-file";

const MonthDetail = () => {
  const { month } = useParams();
  const { selectedFile } = useContext(SheetNamesContext);

  const [benefits, setBenefits] = useState(0);
  const [costs, setCosts] = useState(0);

  useEffect(() => {
    readXlsxFile(selectedFile, { sheet: month.toUpperCase() }).then((data) => {
      setBenefits(data[11][6]);
      setCosts(data[11][10]);
    });
  }, [month]);

  return (
    <div>
      MonthDetail <p>Viendo los detalles de {month}</p>
      <p>
        Ingresos:{" "}
        {new Intl.NumberFormat("es-ES", {
          style: "currency",
          currency: "EUR",
        }).format(benefits)}{" "}
      </p>
      <p>
        Gastos:{" "}
        {new Intl.NumberFormat("es-ES", {
          style: "currency",
          currency: "EUR",
        }).format(costs)}
      </p>
      <p></p>
    </div>
  );
};

export default MonthDetail;
