import { Button } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Image from 'react-bootstrap/Image';
import DeleteButton from './deleteButton.component';

const TableRow = ({ zone, onHandleDelete, onHandleEdit }) => {
  let { name, squareFeet, colorScheme, sunlight, diagram, alt, id } = zone;
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        <h5>{name}</h5>
        <Image src={diagram} alt={alt} />
        <ul>
          <li>area: {squareFeet} sq ft</li>
          <li>colors: {colorScheme}</li>
          <li>sunlight: {sunlight}</li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger
      trigger="hover"
      overlay={popover}
      delay={{ show: 500, hide: 100 }}
    >
      <tr>
        <th>{name}</th>
        <td>{squareFeet}</td>
        <td className="d-none d-sm-table-cell">{colorScheme}</td>
        <td className="d-none d-sm-table-cell">{sunlight}</td>

        <td>
          <Button onClick={onHandleEdit} variant="light">
            <i className="bi bi-pencil-square"></i>
          </Button>
          <DeleteButton
            name={name}
            title="Please confirm"
            noText="Cancel"
            confirmText="Yes"
            iconClass="bi bi-trash3"
            itemKey={id}
            onHandleDelete={onHandleDelete}
          />
        </td>
      </tr>
    </OverlayTrigger>
  );
};

export default TableRow;
