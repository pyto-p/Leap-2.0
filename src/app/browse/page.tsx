import { FaSearch } from 'react-icons/fa';
import SearchBar from '../components/SearchBar';

const FilterSection = () => {
  return (
    <div className="p-8 rounded-lg">
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-1 text-primary">Filter by skills:</h3>
        <p className='text-gray-600'>Select up to 3 skills</p>
        <div className="flex items-center mt-2 border-2 border-gray-300 rounded-md shadow-sm p-2">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search for skills..."
            className="focus:outline-none px-2 py-1 w-full"
          />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1 text-primary">Employment Type:</h3>
        <div className='flex flex-col'>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-primary" />
            <span className="ml-2 text-primary">GIG</span>
          </label>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-primary" />
            <span className="ml-2 text-primary">Part-Time</span>
          </label>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-primary" />
            <span className="ml-2 text-primary">Full-Time</span>
          </label>
        </div>
        <div className="text-center mt-4">
          <button className="bg-primary text-white px-4 py-2 rounded-md btn-wide btn-lg hover:bg-secondary">Reset Filter</button>
        </div>
      </div>
    </div>
  );
};

interface JobCardProps {
  jobTitle: string;
  jobType: string;
  companyName: string;
  postedDate: string;
  description: string;
}

const JobCard: React.FC<JobCardProps> = ({ jobTitle, jobType, companyName, postedDate, description }) => {
  return (
    <div className="bg-white p-4 border border-gray-200 mb-4">
      <h3 className="text-lg font-semibold text-primary">{jobTitle}</h3>
      <p className='text-gray-600'>{jobType}</p>
      <p className="text-primary">{companyName} - Posted on {postedDate}</p>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
};


const JobSection = () => {
  const jobs = [
    {
      jobTitle: "React Front-End Developer",
      jobType: "Gig",
      companyName: "Peroptyx",
      postedDate: "May 23, 2024",
      description: "Develop user interfaces using React.js, ensuring high performance and responsive design. Collaborate with other designers to implement interactive and visually appealing elements. Optimize components for maximum performance across a vast array of web-capable devices and browsers.",
    },
    {
      jobTitle: "Java Backend Developer",
      jobType: "Part-Time",
      companyName: "Accenture",
      postedDate: "April 14, 2024",
      description: "Build and maintain robust and scalable server-side applications using Java. Handle data processing and business logic, ensuring security and performance. Work closely with front-end developers to integrate user-facing elements with server-side logic.",
    },
    {
      jobTitle: "User Interface (UI) Designer",
      jobType: "Full-Time",
      companyName: "QIMA",
      postedDate: "Feb 29, 2024",
      description: "Focus on the visual aspects of user interfaces, ensuring that the design is visually appealing and user-friendly. Create and maintain design systems and style guides. Collaborate with developers to ensure accurate implementation of designs.",
    },
    {
      jobTitle: "User Interface (UI) Designer",
      jobType: "Full-Time",
      companyName: "QIMA",
      postedDate: "Feb 29, 2024",
      description: "Focus on the visual aspects of user interfaces, ensuring that the design is visually appealing and user-friendly. Create and maintain design systems and style guides. Collaborate with developers to ensure accurate implementation of designs.",
    },
    {
      jobTitle: "User Interface (UI) Designer",
      jobType: "Full-Time",
      companyName: "QIMA",
      postedDate: "Feb 29, 2024",
      description: "Focus on the visual aspects of user interfaces, ensuring that the design is visually appealing and user-friendly. Create and maintain design systems and style guides. Collaborate with developers to ensure accurate implementation of designs.",
    },
  ];

  return (
    <div className="bg-gray-50 p-4 rounded-r-md overflow-y-auto h-full">
      {jobs.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
};

const HomePage = () => {
  return (
    <div className='p-10 bg-tertiary min-h-screen'>
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 rounded-xl h-[calc(100vh-150px)]">
        <div className="md:col-span-1 rounded-l-md gap-8">
          <FilterSection />
        </div>
        <div className="md:col-span-2 rounded-r-md h-full overflow-y-auto">
          <JobSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
