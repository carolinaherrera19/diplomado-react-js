import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function CardCustom(props) {
  const { title, text, textButton, path, urlImage } = props;
  const navigate = useNavigate();
  const handleClick = () => navigate(path);

  return (
    <Card>
      <Card.Img variant="top" src={urlImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary" onClick={handleClick}>
          {textButton}
        </Button>
      </Card.Body>
    </Card>
  );
}

CardCustom.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired
};

export default CardCustom;
