import { useParams } from 'react-router-dom';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  return <div>Detalle del producto {id}</div>;
}