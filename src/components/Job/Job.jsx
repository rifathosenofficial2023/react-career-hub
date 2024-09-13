
import { MdLocationOn } from "react-icons/md";
import { AiOutLineDollar } from "react-icons/ai";


const Job = ({ job }) => {
  const { logo,job_title,company_name,location,remote_or_onsite,job_type, salary } = job;
  return (
    <div>
      <div className="card card-compact bg-base-100  shadow-xl">
        <figure>
          <img
            src={logo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{job_type}</button>
          </div>
          <div className="mt-4 flex">
            <h2 className="flex "><MdLocationOn className="text-2xl mr-2"></MdLocationOn> {location}</h2>
            <h2 className="flex"><AiOutLineDollar className="text-2xl mr-2 " ></AiOutLineDollar> {salary}</h2>
          </div>
          <div className="card-actions ">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
