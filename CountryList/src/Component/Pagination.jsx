function Pagination({current, total, onChange}) {
  const prev = (
    <button
      onClick={()=> onChange(current-1)}
      data-testid="prev-page"
      disabled={current === 1 ? true : false}
    >
      Prev
    </button>
  );
  const currentPage = <button data-testid="current-page">{current}</button>;
  const next = (
    <button
      onClick={()=> onChange(current+1)}
      data-testid="next-page"
      disabled={current === total ? true : false}
    >
      Next
    </button>
  );
  return (
  <div data-testid="page-container">
      <div>
      {prev}
      {currentPage}
      {next}
      </div>
      <div className="totalPages">
        Total Pages: <b data-testid="total-pages">{total}</b>
      </div>
    </div>
  );
}

export default Pagination;
