import Container from "@/components/shared/Container";
import { useEffect, useState } from "react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab: number) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <Container>
      <div className={`my-14`}>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">About US</h2>
        <div className="mx-auto space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(2)}
            >
              <span className="text-lg font-medium text-gray-900">
                Our Story
              </span>
              {activeTab === 2 ? (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
            {activeTab === 2 && (
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  At KEGEM, our journey began with a passion for music and
                  technology. We are dedicated to creating innovative electronic
                  keyboards that inspire musicians of all levels. Our mission is
                  to blend superior sound quality with cutting-edge features,
                  making music creation more accessible and enjoyable for
                  everyone.
                </p>
              </div>
            )}
          </div>

          <div className="border-b border-gray-200 pb-4">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(3)}
            >
              <span className="text-lg font-medium text-gray-900">
                Our Mission
              </span>
              {activeTab === 3 ? (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
            {activeTab === 3 && (
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  Our mission is to revolutionize the world of electronic music
                  by offering state-of-the-art keyboards that cater to the needs
                  of both beginners and professionals. We believe in the power
                  of music to transform lives and are committed to delivering
                  instruments that help you express your creativity and reach
                  your full musical potential.
                </p>
              </div>
            )}
          </div>

          <div className="border-b border-gray-200 pb-4">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(4)}
            >
              <span className="text-lg font-medium text-gray-900">
                Why Choose Us?
              </span>
              {activeTab === 4 ? (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
            {activeTab === 4 && (
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  With years of experience in the industry, KEYGEM stands out
                  for our commitment to quality, innovation, and customer
                  satisfaction. Our keyboards are meticulously designed and
                  rigorously tested to ensure they meet the highest standards of
                  performance. We pride ourselves on offering products that not
                  only sound great but also enhance your playing experience.
                </p>
              </div>
            )}
          </div>

          <div className="border-b border-gray-200 pb-4">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(5)}
            >
              <span className="text-lg font-medium text-gray-900">
                Meet the Team
              </span>
              {activeTab === 5 ? (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
            {activeTab === 5 && (
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  Our team is composed of passionate musicians, skilled
                  engineers, and dedicated customer support professionals. Each
                  member brings a unique set of skills and a shared love for
                  music, working together to create instruments that inspire and
                  empower. Get to know the people behind KEYGEM and discover the
                  dedication that goes into every product we make.
                </p>
              </div>
            )}
          </div>

          <div className="border-b border-gray-200 pb-4">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(6)}
            >
              <span className="text-lg font-medium text-gray-900">
                Our Vision
              </span>
              {activeTab === 6 ? (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
            {activeTab === 6 && (
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  Looking ahead, KEYGEM aims to continue pushing the boundaries
                  of what's possible in electronic music. We envision a future
                  where every musician, regardless of their background or skill
                  level, has access to the tools they need to create and share
                  their music with the world. Join us on this exciting journey
                  as we shape the future of music together.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};
export default AboutUs;
