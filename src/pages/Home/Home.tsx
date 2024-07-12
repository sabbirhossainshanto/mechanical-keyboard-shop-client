import Container from "@/components/shared/Container";
import Loader from "@/components/shared/Loader";
import ProductCard from "@/components/shared/ProductCard";
import CustomersReview from "@/components/ui/home/CustomersReview";
import FeaturedBrand from "@/components/ui/home/FeaturedBrand";
import HeroSection from "@/components/ui/home/HeroSection";
import ServiceAdvertisement from "@/components/ui/home/ServiceAdvertisement";
import WhyChooseMechanicalKeyboard from "@/components/ui/home/WhyChooseMechanicalKeyboard";
import { useGetAllProductQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types";
import { Button } from "antd";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const { data, isLoading } = useGetAllProductQuery(undefined);
  const navigate = useNavigate();
  return (
    <div className="bg-[#f0f0f0] h-full pt-14">
      <Container>
        <HeroSection />
        <ServiceAdvertisement />
        <div className="pt-20">
          <h1 className="text-3xl text-secondaryBlack font-bold py-5">
            Products
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {isLoading && <Loader />}
            {data?.data?.slice(0, 6)?.map((product: TProduct) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
          <div className="py-10 flex items-center justify-center">
            <Button onClick={() => navigate("/products")}>See More</Button>
          </div>
        </div>
        <FeaturedBrand />
        <CustomersReview />
        <WhyChooseMechanicalKeyboard/>
      </Container>
    </div>
  );
};

export default Home;
