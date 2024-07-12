import assets from "@/assets";
import { useState } from "react";

const WhyChooseMechanicalKeyboard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab: number) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };
  return (
    <div className={`py-14`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center place-content-center gap-5">
        <img  className="size-52 sm:size-96" src={assets.question} alt="" />
        <div className="flex flex-col justify-center items-center w-full">
          <div className="space-y-4 w-full">
            <div className="border-b border-gray-200 pb-4">
              <button
                className="flex items-center justify-between w-full"
                onClick={() => toggleTab(2)}
              >
                <span className="text-lg font-medium text-gray-900">
                  Why Choose Mechanical Keyboards?
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
                    Mechanical keyboards offer a unique blend of durability,
                    responsiveness, and customization that sets them apart from
                    other types of keyboards. Here’s why a mechanical keyboard
                    might be the perfect choice for you:
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
                  Superior Durability
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
                    Mechanical keyboards are built to last. Each key switch is
                    designed to withstand millions of keystrokes, far outlasting
                    traditional membrane keyboards. This means you can rely on
                    your mechanical keyboard for years, even with heavy daily
                    use.
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
                  Enhanced Typing Experience
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
                    The tactile feedback and audible click of mechanical keys
                    provide a satisfying typing experience that many users find
                    more enjoyable and efficient. Whether you’re typing up
                    documents, gaming, or working on a creative project,
                    mechanical keyboards offer precision and comfort.
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
                  Customizability
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
                    One of the standout features of mechanical keyboards is the
                    ability to customize key switches, keycaps, and backlighting
                    to suit your personal preferences. From different switch
                    types (like Cherry MX, Razer, or Romer-G) to a variety of
                    keycap designs and RGB lighting options, you can tailor your
                    keyboard to match your style and needs.
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
                  Faster and More Accurate Typing
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
                    Mechanical switches register keystrokes faster and more
                    accurately, reducing the chance of missed or repeated keys.
                    This can significantly improve your typing speed and
                    accuracy, making mechanical keyboards a popular choice among
                    professionals and gamers alike.
                  </p>
                </div>
              )}
            </div>
            <div className="border-b border-gray-200 pb-4">
              <button
                className="flex items-center justify-between w-full"
                onClick={() => toggleTab(7)}
              >
                <span className="text-lg font-medium text-gray-900">
                  Versatility and Functionality
                </span>
                {activeTab === 7 ? (
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
              {activeTab === 7 && (
                <div className="mt-4">
                  <p className="text-base text-gray-500">
                    Mechanical keyboards often come with additional features
                    such as programmable keys, macro support, and customizable
                    layouts. These features enhance productivity and
                    functionality, allowing you to optimize your workflow and
                    gaming performance.
                  </p>
                </div>
              )}
            </div>
            <div className="border-b border-gray-200 pb-4">
              <button
                className="flex items-center justify-between w-full"
                onClick={() => toggleTab(8)}
              >
                <span className="text-lg font-medium text-gray-900">
                  Ergonomic Benefits
                </span>
                {activeTab === 8 ? (
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
              {activeTab === 8 && (
                <div className="mt-4">
                  <p className="text-base text-gray-500">
                    Mechanical keyboards are available in various ergonomic
                    designs, including split keyboards and adjustable tilt
                    angles, to help reduce strain and promote better posture.
                    Investing in an ergonomic mechanical keyboard can contribute
                    to long-term comfort and health.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMechanicalKeyboard;
