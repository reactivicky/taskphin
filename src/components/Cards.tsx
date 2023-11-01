import Logo from "../assets/netflix-icon.svg";
import Button from "../common/Button";
import { CardData } from "../data";

interface CardsProps {
  jobs: CardData[];
}

const Cards = ({ jobs }: CardsProps) => {
  return (
    <div className="flex gap-cardGap flex-wrap justify-center">
      {jobs.map(
        ({
          id,
          job_title,
          company_name,
          industry,
          location,
          remote_type,
          experience,
          salary,
          total_exployees,
          apply_type,
        }) => (
          <div
            key={id}
            className="min-h-cardHeight w-cardWidth flex gap-cardLogoTextGap border border-cardBorder rounded-cardRadius p-cardPadding"
          >
            <img src={Logo} alt="logo" className="h-logoHeight w-logoWidth" />
            <div className="flex flex-col gap-cardGap">
              <div>
                <h2 className="text-cardHeading">{job_title}</h2>
                <div className="text-cardSubheading">
                  <p className="text-dark">
                    {company_name} - {industry}
                  </p>
                  <p>{location}</p>
                </div>
              </div>
              <div className="flex flex-col gap-cardTextGap text-cardText text-dark">
                <p>{remote_type}</p>
                <p>
                  Experience ({experience.min} - {experience.max})
                </p>
                <p>
                  INR (₹) {salary.min} - {salary.max}
                </p>
                <p>{total_exployees} employees</p>
              </div>
              <div className="flex gap-cardGap">
                {apply_type === "quick_apply" ? (
                  <Button type="primary" onClick={() => null}>
                    Apply Now
                  </Button>
                ) : (
                  <Button type="secondary" onClick={() => null}>
                    External Apply
                  </Button>
                )}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Cards;
