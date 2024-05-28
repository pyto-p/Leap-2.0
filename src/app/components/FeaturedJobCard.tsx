import { BiUserCircle } from "react-icons/bi";

interface FeaturedJobCardProps {
  jobTitle: string;
  company: string;
  location: string;
  jobType: string;
  salary: string;
  workSetup: string;
}

const FeaturedJobCard: React.FC<FeaturedJobCardProps> = ({
  jobTitle,
  company,
  location,
  jobType,
  salary,
  workSetup,
}) => {
  return (
    <div className="flex items-center p-5 border border-gray-300 rounded-lg shadow-md">
      <div className="text-8xl text-primary mr-5">
        <BiUserCircle />
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-bold text-primary">{jobTitle}</h3>
        <p className="text-primary">{company}</p>
        <p className="text-gray-500">{location}</p>
        <p className="text-gray-500">
          <span className="font-semibold text-primary">Job Type:</span> {jobType}
        </p>
        <p className="text-gray-500">
          <span className="font-semibold text-primary">Salary:</span> {salary}
        </p>
        <p className="text-gray-500">
          <span className="font-semibold text-primary">Work Setup:</span> {workSetup}
        </p>
      </div>
    </div>
  );
};

export default FeaturedJobCard;
