import React from "react";
import { Link } from "react-router-dom";

export const Months = ({ months }) => {
  return (
    <div>
      <h2>Datos disponibles</h2>
      {months.map((month) => {
        return (
          <p key={month}>
            <Link to={`/detalle/${month.toLowerCase()}`}>{month}</Link>
          </p>
        );
      })}
    </div>
  );
};
