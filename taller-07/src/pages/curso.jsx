import { useParams } from 'react-router-dom';

function Curso() {
  const { cursoSlug } = useParams();
  return <h1>{cursoSlug}</h1>;
}

export default Curso;
