import TableHeaderColumn from './table-header-column.component';
const TableHeader = ({ thClasses, sortCol, sortDir, onHandleSort }) => {
  return (
    <tr>
      <TableHeaderColumn
        label="Name"
        thClasses={`${thClasses}`}
        colName="name"
        sortCol={sortCol}
        sortDir={sortDir}
        onHandleSort={() => onHandleSort('name')}
      />
      <TableHeaderColumn
        label="Square Feet"
        thClasses={`${thClasses}`}
        colName="squareFeet"
        sortCol={sortCol}
        sortDir={sortDir}
        onHandleSort={() => onHandleSort('squareFeet')}
      />
      <TableHeaderColumn
        label="Color Scheme"
        thClasses={`${thClasses} d-none d-sm-table-cell`}
        colName="colorScheme"
        sortCol={sortCol}
        sortDir={sortDir}
        onHandleSort={() => onHandleSort('colorScheme')}
      />
      <TableHeaderColumn
        label="Sunlight"
        thClasses={`${thClasses} d-none d-sm-table-cell`}
        colName="sunlight"
        sortCol={sortCol}
        sortDir={sortDir}
        onHandleSort={() => onHandleSort('sunlight')}
      />
      <TableHeaderColumn
        label="Actions"
        thClasses={thClasses}
        colName="actions"
        sortCol={sortCol}
        sortDir={sortDir}
        onHandleSort={() => onHandleSort('actions')}
      />
    </tr>
  );
};

export default TableHeader;
