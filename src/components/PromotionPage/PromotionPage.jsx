import businessPlan from "../../assets/PromotionPage/businessPlan.png";
import premiumPlan from "../../assets/PromotionPage/premiumPlan.png";
import diamondBackground from "../../assets/PromotionPage/diamondBg.png";
import basicPlan from "../../assets/PromotionPage/basicPlan.png";

const plans = [
  {
    name: "Basic Plan",
    price: "₹550",
    image: basicPlan,
    altText: "basic plan",
    description: "Inclusive all taxes",
  },
  {
    name: "Business Plan",
    price: "₹1250",
    image: businessPlan,
    altText: "business plan",
    description: "Inclusive all taxes",
  },
  {
    name: "Premium Plan",
    price: "₹4890",
    image: premiumPlan,
    altText: "premium plan",
    description: "Inclusive all taxes",
  },
];

const PromotionPage = () => {
  return (
    <div>
      <div className="w-full m-auto text-center mt-11">
        <h1 className="text-3xl mb-0">Plans that work best for your</h1>
        <span className="text-[#FF6600] italic text-3xl font-bold">
          Business
        </span>
      </div>
      <h2 className="mt-10 text-sm font-normal text-center">
        Logbiz features that will help your company scale faster
      </h2>
      <section className="flex flex-wrap gap-10 md:flex-row flex-col justify-center items-center">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative rounded-xl hover:border-black hover:cursor-pointer hover:border-2 flex p-3 flex-col h-[500px] w-[350px] bg-[#FAFAFA] overflow-hidden"
          >
            {/* Background image as a pseudo-element */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${diamondBackground})`,
                backgroundSize: "auto 30%", // Adjust size for the diamond
                backgroundPosition: "right -12% bottom -3%", // Position it slightly to the right
                backgroundRepeat: "no-repeat",
                opacity: "5%", // Apply opacity only to the background image
                zIndex: 1,
              }}
            />
            <div className="flex gap-4 items-center relative z-10">
              <img src={plan.image} alt={plan.altText} height={40} width={40} />
              <h5 className="text-black opacity-[60%]">{plan.name}</h5>
            </div>
            <h1 className="text-black opacity-[60%] relative z-10">
              {plan.price} <span className="text-sm">{plan.description}</span>
            </h1>
          </div>
        ))}
      </section>
      <div className="bg-[#FAFAFA] m-auto w-[70%] p-10 text-center mt-10">
        Explore Elite Plans that offer everything you would ever need
      </div>
    </div>
  );
};

export default PromotionPage;
