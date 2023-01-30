import { useContext } from "react";
import { SheetNamesContext } from "../context/SheetNamesContext";
import { Months } from "../components/Months";

const Sidebar = () => {
  const { months } = useContext(SheetNamesContext);

  return (
    <div> {months && months.length > 0 && <Months months={months} />}</div>
  );
};

export default Sidebar;
