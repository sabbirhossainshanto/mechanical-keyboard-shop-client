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
    minPrice: "",
    maxPrice: "",
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
          <div className="flex items-center justify-center bg-gray-300 w-full py-10 sm:py-3 rounded-full ">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-5">
              <Input
                onChange={(e) =>
                  setQuery({ ...query, searchTerm: e.target.value })
                }
                className="w-auto"
                type="email"
                placeholder="Search Products By Name, Brand"
                value={query.searchTerm}
              />

              <Input
                onChange={(e) =>
                  setQuery({ ...query, minPrice: e.target.value })
                }
                className="w-auto"
                type="number"
                placeholder="Min Price"
                value={query.minPrice}
              />
              <Input
                onChange={(e) =>
                  setQuery({ ...query, maxPrice: e.target.value })
                }
                className="w-auto"
                type="number"
                placeholder="Max Price"
                value={query.maxPrice}
              />
              <SortProduct setQuery={setQuery} query={query} />
              <Button
                className="text-base font-semibold py-[16px]"
                onClick={() =>
                  setQuery({
                    searchTerm: "",
                    sort: "",
                    minPrice: "",
                    maxPrice: "",
                  })
                }
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
