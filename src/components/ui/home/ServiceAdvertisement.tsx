import assets from "@/assets";
import { CardContent, CardDescription, CardHeader, CardTitle } from "../card";

const ServiceAdvertisement = () => {
  return (
    <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <CardContent className="bg-[#feff83] p-0 rounded-2xl">
        <CardHeader>
          <img className="size-20" src={assets.freeDelivery} alt="" />
          <CardTitle className="text-lg">Free Shipping</CardTitle>
          <CardDescription>Order over $500</CardDescription>
        </CardHeader>
      </CardContent>
      <CardContent className="bg-[#ccd5e6] p-0 rounded-2xl">
        <CardHeader>
          <img className="size-20" src={assets.quick} alt="" />
          <CardTitle className="text-lg">Quick Payment</CardTitle>
          <CardDescription>100% Secure</CardDescription>
        </CardHeader>
      </CardContent>
      <CardContent className="bg-[#b5b9e9] p-0 rounded-2xl">
        <CardHeader>
          <img className="size-20" src={assets.cashback} alt="" />
          <CardTitle className="text-lg">Big Cashback</CardTitle>
          <CardDescription>Over 40% Cashback</CardDescription>
        </CardHeader>
      </CardContent>
      <CardContent className="bg-[#9fc0a1] p-0 rounded-2xl">
        <CardHeader>
          <img className="size-20" src={assets.support} alt="" />
          <CardTitle className="text-lg">24/7 Support</CardTitle>
          <CardDescription>Ready For You</CardDescription>
        </CardHeader>
      </CardContent>
    </div>
  );
};

export default ServiceAdvertisement;
