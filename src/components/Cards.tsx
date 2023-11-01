import Logo from "../assets/netflix-icon.svg";
import Button from "../common/Button";

const Cards = () => {
  return (
    <div className="flex gap-cardGap">
      <div className="h-cardHeight w-cardWidth flex gap-cardLogoTextGap border border-cardBorder rounded-cardRadius p-cardPadding">
        <img src={Logo} alt="logo" className="h-logoHeight w-logoWidth" />
        <div className="flex flex-col gap-cardGap">
          <div>
            <h2 className="text-cardHeading">UX UI Designer</h2>
            <div className="text-cardSubheading">
              <p className="text-dark">Great Vibes - Information Technology</p>
              <p>Chennai, Tamilnadu, India (In-office)</p>
            </div>
          </div>
          <div className="flex flex-col gap-cardTextGap text-cardText text-dark">
            <p>Part-Time (9.00 am - 5.00 pm IST)</p>
            <p>Experience (1 - 2 years)</p>
            <p>INR (₹) 30,000 - 50,000 / Month</p>
            <p>51-200 employees</p>
          </div>
          <div className="flex gap-cardGap">
            <Button type="primary" onClick={() => null}>
              Apply Now
            </Button>
            <Button type="secondary" onClick={() => null}>
              External Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
