const TableHeaderColumn = ({
  label,
  thClasses,
  colName,
  sortCol,
  sortDir,
  onHandleSort,
}) => {
  const handleColumnClick = () => {
    onHandleSort();
  };

  const determineIcon = (direction) => {
    return colName === sortCol && direction === sortDir ? 1 : 0.3;
  };
  return (
    <th className={thClasses} onClick={handleColumnClick}>
      {label}
      <div className="sort-icons">
        <img
          id={`{${colName}-asc`}
          src="images/caret-up-fill.svg"
          alt="sort ascending"
          style={{ opacity: `${determineIcon('asc')}` }}
        />
        <img
          id={`{${colName}-desc`}
          src="images/caret-down-fill.svg"
          alt="sort descending"
          style={{ opacity: `${determineIcon('desc')}` }}
          //   style={`opacity:${determineIcon('desc')}`}
        />
      </div>
    </th>
  );
};

export default TableHeaderColumn;
