import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { testimonials } from "./data"; // Import the testimonials array from the new file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow component for previous
const CustomPrevArrow: React.FC<{ onClick?: React.MouseEventHandler<HTMLDivElement> }> = ({ onClick }) => (
  <div
    className="custom-arrow absolute -left-[35px] top-1/2 transform -translate-y-1/2"
    onClick={onClick}
  >
    <FaChevronLeft size={50} color="gray" />
  </div>
);

// Custom arrow component for next
const CustomNextArrow: React.FC<{ onClick?: React.MouseEventHandler<HTMLDivElement> }> = ({ onClick }) => (
  <div
    className="custom-arrow absolute -right-[35px] top-1/2 transform -translate-y-1/2"
    onClick={onClick}
  >
    <FaChevronRight size={50} color="gray" />
  </div>
);

// Member component
interface MemberComponentProps {
  imgurl: string;
  name: string;
  testimonial: string;
}

const MemberComponent: React.FC<MemberComponentProps> = ({ imgurl, name, testimonial }) => (
  <div className="flex">
    <div className="relative w-[40rem] bg-gray-200 rounded-xl p-6">
      <div className="flex items-center justify-end">
        <div className="w-28 h-28 bg-black rounded-full text-center mr-4">
          <img src={imgurl} alt={name} className="rounded-full w-full h-full object-cover" />
        </div>
      </div>
      <div className="gap-2 flex flex-row">
        <div
          className="bg-black/40 w-10 h-10 p-2"
          style={{
            clipPath: "polygon(0 0, 0 100%, 100% 100%)",
          }}
        >
          {/* Custom Element */}
        </div>
        <div
          className="bg-black/40 w-10 p-2"
          style={{
            clipPath: "polygon(0 0, 0 100%, 100% 100%)",
          }}
        >
          {/* Custom Element */}
        </div>
      </div>
      <div className="mt-4">
        <p>{testimonial}</p>
      </div>
      <div className="absolute bottom-6 right-4 gap-2 flex flex-row">
        <div
          className="bg-black opacity-20 w-20 h-20"
          style={{
            clipPath: "polygon(0 0, 0 100%, 100% 100%)",
          }}
        >
          1
        </div>
        <div
          className="bg-black opacity-20 w-20 h-20"
          style={{
            clipPath: "polygon(0 0, 0 100%, 100% 100%)",
          }}
        >
          1
        </div>
      </div>
    </div>
  </div>
);

// Testimonials component
const Testimonials: React.FC = () => {
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 2224,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 1100,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 680,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="bg-white py-12">
      <div className="overflow-x-hidden w-full hidden text-2xl shad relative">
        <h2 className="flex flex-row max-w-sm md:max-w-max mx-0 text-center font-bold md:pt-0 uppercase md:w-max relative text-[#F7931E]">
          TESTIMONIALS
        </h2>
      </div>
      <div className="overflow-x-hidden w-full sm:block shad relative">
        <h2 className="text-center text-5xl font-bold relative text-[#F7931E]">TESTIMONIALS</h2>
      </div>

      <div className="mt-10">
        <Slider {...sliderSettings} className="lg:mr-[4%] mr-8 ml-8 flex justify-center items-center lg:ml-[4%]">
          {testimonials.map((testimonialData, index) => (
            <MemberComponent
              key={index}
              imgurl={testimonialData.imgurl}
              name={testimonialData.name}
              testimonial={testimonialData.testimonial}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
