import MKForm from "@/components/form/MKForm";
import MKInput from "@/components/form/MKInput";
import Container from "@/components/shared/Container";
import { Button, Row } from "antd";
import { useEffect } from "react";
import toast from "react-hot-toast";

const ContactUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const onSubmit = async () => {
    toast.success("We will message to your email very shortly!");

  };
  return (
    <Container>
      <div className="py-14">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl text-secondaryBlack font-bold py-5">
            Contact Our Team
          </h1>
          <p className="max-w-[70ch] text-center text-gray-600 text-lg">
            Got any questions about the product or scaling on our platform?
            We'have here to help. Chat to our friendly team 24/7 and get onboard
            in less than five minutes.
          </p>
        </div>
        <Row justify="center" align="middle" className="pt-10">
          <MKForm onSubmit={onSubmit}>
            <div className="flex gap-4">
              <MKInput label="First Name:" name="firstName" type="text" />
              <MKInput label="Last Name:" name="lastName" type="text" />
            </div>
            <MKInput label="Email:" name="email" type="text" />
            <MKInput label="Phone No:" name="phone" type="text" />
            <MKInput
              height="100px"
              label="Message:"
              name="message"
              type="text"
            />
            <Button htmlType="submit">Send Message</Button>
          </MKForm>
        </Row>
      </div>
    </Container>
  );
};

export default ContactUs;
