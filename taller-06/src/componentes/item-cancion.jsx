import React, { useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function ItemCancion(props) {
  const { name, id, autor } = props;
  const navigate = useNavigate();
  const click_ref = React.useRef(null);

  useEffect(() => {
    click_ref.current = () => navigate(`/canciones/${id}`);
  }, []);

  return (
    <ListGroup.Item className="text-capitalize" key={id} action onClick={() => click_ref.current()}>
      <div className="ms-2 me-auto">
        <div className="fw-bold">{name}</div>
        Autor: {autor}
      </div>
    </ListGroup.Item>
  );
}

ItemCancion.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired
};

export default ItemCancion;
