const Pagination = ({ total, limit, page, onPage }) => {

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="pagination">

      {Array.from({ length: totalPages }).map((_, i) => (

        <button
          key={i}
          className={page === i + 1 ? "active" : ""}
          onClick={() => onPage(i + 1)}
        >
          {i + 1}
        </button>

      ))}

    </div>
  );
};

export default Pagination;