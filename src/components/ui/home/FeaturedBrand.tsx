import { CardContent, CardHeader, CardTitle } from "../card";
import { featuredBrand } from "@/static/featuredBrand";

const FeaturedBrand = () => {
  return (
    <div className="pb-20">
      <h1 className="text-3xl text-secondaryBlack font-bold py-5">
     Top Featured Brand
      </h1>
      <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-5 gap-2">
        {featuredBrand.map((item) => {
          return (
            <CardContent key={item.id} className=" p-0  group overflow-hidden">
              <CardHeader className="p-0 ">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  src={item.logo}
                  alt=""
                />
                <CardTitle className="text-base text-accentBlack text-center group-hover:text-blue-500 transition-colors ">
                  {item.title}
                </CardTitle>
              </CardHeader>
            </CardContent>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedBrand;
