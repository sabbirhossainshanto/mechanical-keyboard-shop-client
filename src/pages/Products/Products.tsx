import SortProduct from "@/components/modal/SortProduct";
import Container from "@/components/shared/Container";
import Loader from "@/components/shared/Loader";
import ProductCard from "@/components/shared/ProductCard";
import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/useDebounce";
import { useGetAllProductQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types";
import { Button } from "antd";
import { useState } from "react";

const Products = () => {
  window.scrollTo(0, 0);
  const [query, setQuery] = useState({
    searchTerm: "",
    sort: "",
  });
  const debouncedSearchTerm = useDebounce(query.searchTerm, 500);
  const debouncedQuery = {
    ...query,
    searchTerm: debouncedSearchTerm,
  };
  const { data, isLoading } = useGetAllProductQuery(debouncedQuery);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <div className="pt-14">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center bg-gray-300 w-full py-3 rounded-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <Input
                onChange={(e) =>
                  setQuery({ ...query, searchTerm: e.target.value })
                }
                className="w-auto sm:w-[250px]"
                type="email"
                placeholder="Search Products By Name, Brand"
                value={query.searchTerm}
              />
              <SortProduct setQuery={setQuery} query={query} />

              <Button
                className="text-base font-semibold"
                onClick={() => setQuery({ searchTerm: "", sort: "" })}
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
        {data?.data?.length > 0 ? (
          <div>
            <h1 className="text-3xl text-secondaryBlack font-bold py-5">
              Products
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {data?.data?.map((product: TProduct) => (
                <ProductCard product={product} key={product._id} />
              ))}
            </div>
          </div>
        ) : (
          <div className="py-10 flex items-center justify-center">
            <p className="text-lg font-semibold">No Product Found!</p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Products;
