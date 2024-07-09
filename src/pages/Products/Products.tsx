import Container from "@/components/shared/Container";
import ProductCard from "@/components/shared/ProductCard";
import { useGetAllProductQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types";

const Products = () => {
  window.scrollTo(0, 0);
  const { data } = useGetAllProductQuery(undefined);
  console.log(data);
  return (
    <Container>
      <div>
        <h1 className="text-3xl text-secondaryBlack font-bold py-5">
          Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {data?.data?.map((product: TProduct) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
        <div className="py-10 flex items-center justify-center"></div>
      </div>
    </Container>
  );
};

export default Products;
