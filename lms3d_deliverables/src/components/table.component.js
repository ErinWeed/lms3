import Table from 'react-bootstrap/Table';
import TableHeader from './table-header.component';
import TableRow from './table-row.component';

const ZonesTable = ({
  zones,
  viewModel,
  sortCol,
  sortDir,
  onHandleDelete,
  onHandleEdit,
  onHandleSort,
}) => {
  return (
    <Table className="bg-light text-primary">
      <thead>
        <TableHeader
          thClasses={viewModel.list.thClasses}
          sortCol={sortCol}
          sortDir={sortDir}
          onHandleSort={onHandleSort}
        />
      </thead>
      <tbody>
        {zones.map((zone) => {
          return (
            <TableRow
              key={zone.id}
              zone={zone}
              onHandleDelete={onHandleDelete}
              onHandleEdit={onHandleEdit}
              onHandleSort={onHandleSort}
            />
          );
        })}
      </tbody>
    </Table>
  );
};

export default ZonesTable;
