import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const DeleteAlert = ({ item }) => {
  const [visible, setVisible] = useState(true);
  console.log(`delete alert for ${item}`);
  setTimeout(() => {
    setVisible(false);
  }, 2000);

  return (
    <div>
      {visible && (
        <Alert variant="danger" onClose={() => setVisible(false)} dismissible>
          {`${item} has been deleted`}
        </Alert>
      )}
    </div>
  );
};

export default DeleteAlert;
