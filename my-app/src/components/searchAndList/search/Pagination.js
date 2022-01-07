import React from "react";

export default function Pagination({ playerPerPage, totalPlayer, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPlayer / playerPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button type="button" onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
