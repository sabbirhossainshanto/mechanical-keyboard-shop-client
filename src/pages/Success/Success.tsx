import assets from "@/assets";
import Container from "@/components/shared/Container";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";


const Success = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <div className="flex flex-col items-center justify-center py-14 space-y-5">
        <div className="flex items-center gap-4">
          <img className="size-12" src={assets.success} alt="" />
          <h1 className="text-[#73c21e] font-semibold text-xl sm:text-4xl">
            Payment Successful!
          </h1>
        </div>
        <p className="text-black text-base sm:text-3xl font-semibold">
          Thank you ! Your payment has been received!
        </p>
        <p className="text-black text-xs sm:text-sm font-semibold">
         You will get your product within 2 to 3 days!
        </p>
        <Button onClick={()=> navigate('/')} className="px-10 py-6 w-[200px] font-semibold rounded-full mt-2 bg-buttonPrimary text-white">
          Go Back
        </Button>
      </div>
    </Container>
  );
};

export default Success;
