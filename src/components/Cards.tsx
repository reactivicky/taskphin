import Logo from "../assets/netflix-icon.svg";
import Edit from "../assets/edit-icon.svg";
import Delete from "../assets/delete-icon.svg";
import Button from "../common/Button";
import { CardData } from "../data";
import instance from "../api/axiosInstance";

interface CardsProps {
  jobs: CardData[];
  fetchJobs: () => Promise<void>;
}

const Cards = ({ jobs, fetchJobs }: CardsProps) => {
  const handleEdit = () => {};
  const handleDelete = async (id: string) => {
    try {
      await instance.delete(`/${id}`);
      fetchJobs();
    } catch (error) {
      console.log(error);
    }
  };
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
                <h2 className="text-cardHeading flex items-center gap-3">
                  {job_title}{" "}
                  <button title="edit" onClick={handleEdit}>
                    <img src={Edit} alt="edit-icon" />
                  </button>
                  <button title="delete" onClick={() => handleDelete(id)}>
                    <img src={Delete} alt="delete-icon" />
                  </button>
                </h2>
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
                <p>
                  {total_exployees.length == 0 ? 0 : total_exployees} employees
                </p>
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
