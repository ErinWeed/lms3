import SearchBar from './search-bar.component';
import ZonesTable from './table.component';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import DeleteAlert from './deleteAlert.component';

const TeamList = ({ viewModel, model }) => {
  const [filterText, setFilterText] = useState('');
  const [data, updateData] = useState(model.list());
  const [alertList, setAlertList] = useState([]);

  const handleReset = () => {
    model.reset();
    updateData(model.list());
  };

  const handleSort = (sortCol) => {
    let curDirection = model.sortDir;
    if (model.sortCol === sortCol) {
      model.sortDir = curDirection === 'asc' ? 'desc' : 'asc';
    } else {
      model.sortDir = 'asc';
    }

    model.sortCol = sortCol;
    model.sort(model.sortCol, model.sortDir, true);
    updateData(model.list());
  };

  const handleEdit = (e) => {
    console.log('clicked edit');
  };

  const handleDelete = (id, name) => {
    console.log('clicked delete');
    model.delete(id);
    updateData(model.list());
    setAlertList((current) => [...current, name]);
    console.log(alertList);
  };

  const handleSearch = (e) => {
    model.filterStr = e.target.value;
    setFilterText(e.target.value);
    updateData(model.list());
  };
  return (
    <>
      <div className="alert-list">
        {alertList.map((name) => {
          return <DeleteAlert item={name} />;
        })}
      </div>

      <SearchBar
        filterText={filterText}
        onfilterTextChange={handleSearch}
        title={viewModel.list.listTitle}
      />
      <ZonesTable
        zones={data}
        sortCol={model.sortCol}
        sortDir={model.sortDir}
        viewModel={viewModel}
        onHandleDelete={handleDelete}
        onHandleSort={handleSort}
        onHandleEdit={handleEdit}
      />
      <Button
        className="text-primary"
        variant="light"
        onClick={(e) => {
          handleReset();
        }}
      >
        Reset
      </Button>
    </>
  );
};

export default TeamList;
