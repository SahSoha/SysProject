import { useParams } from 'react-router-dom';

function ProductScreen() {
  const params = useParams();
  const { slug } = params;
  return(
    <div>
        <p>
            {slug}
        </p >
    </div>
  )
}
export default ProductScreen;
