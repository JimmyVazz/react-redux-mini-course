import { useEffect } from "react";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAction } from "../../state/actions/ProductsAction";
export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);

  const products = useSelector((state) => state.Products.products);

  return (
    <>
      <h1 className="title">Productos</h1>
      {products?.map((product, i) => (
        <section key={i} className="section-container">
          <div className="grid-list">
            <img className="img" src={product.image} alt="imagen" />
            <div>
              <p>{product.title}</p>
              <p>{product.price}</p>
              <p>{product.category}</p>
            </div>
            <div className="buttons">
              <button>Detalles</button>
              <button>Agregar al carrito</button>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
