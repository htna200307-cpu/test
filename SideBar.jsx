const Sidebar = ({ categories, onSelect }) => {
  return (
    <div className="sidebar">

      <h3>Bộ lọc</h3>

      {categories.map((cat) => (
        <div key={cat} className="filter">

          <input
            type="checkbox"
            onChange={() => onSelect(cat)}
          />

          <label>{cat}</label>

        </div>
      ))}

    </div>
  );
};

export default Sidebar;