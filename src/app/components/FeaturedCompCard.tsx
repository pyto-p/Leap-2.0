import Image, { StaticImageData } from "next/image";

interface FeaturedCompanyCardProps {
  logo: StaticImageData;
  companyName: string;
  location: string;
  activeJobPosts: number;
}

const FeaturedCompanyCard: React.FC<FeaturedCompanyCardProps> = ({ logo, companyName, location, activeJobPosts }) => {
  return (
    <div className="flex items-start p-5 border border-gray-300 rounded-lg shadow-md w-96 h-48">
      <div className="mr-5">
        <div className="relative w-16 h-16">
          <Image src={logo} alt="Company Logo" layout="fill" objectFit="cover" />
        </div>
        <div>
          <p className="text-gray-700 font-bold">{companyName}</p>
          <div className="flex items-center mt-2">
            <p className="text-primary">{location}</p>
          </div>
        </div>
      </div>
      
      <div>
        <p className="text-xl font-bold mb-2 text-primary">Active Job Posts</p>
        <p className="text-primary">{activeJobPosts}</p>
      </div>
    </div>
  );
};

export default FeaturedCompanyCard;
