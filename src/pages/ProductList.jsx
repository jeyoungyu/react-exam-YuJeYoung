import { products } from "../datas/products";
import ProductCard from "../components/ProductCard";
import LikeButton from "../components/LikeButton";
import LiveInput from "../components/LiveInput";
import Page from "../components/Page";

const ProductList = () => {
  return (
    <div>
      <h2>상품 목록</h2>

      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      <hr />
      <h2>문제 1</h2>

      <h3>좋아요 버튼</h3>
      <LikeButton />

      <h3>실시간 입력</h3>
      <LiveInput />

      <Page />
    </div>
  );
};

export default ProductList;