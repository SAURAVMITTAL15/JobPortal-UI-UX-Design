import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import { assets } from '../assets/assets';
import kconvert from 'k-convert';
import moment from 'moment';
import JobCard from '../components/JobCard';
import Footer from '../components/Footer';

function ApplyJobs() {
  const { id } = useParams();
  const [jobData, setJobData] = useState(null);
  const { value } = useContext(AppContext);
  const { jobs } = value;

  const fetchJob = async () => {
    const data = jobs.filter(job => job._id === id);
    if (data.length !== 0) {
      setJobData(data[0]);
      console.log(data[0]);
    }
  }

  useEffect(() => {
    if (jobs.length > 0) {
      fetchJob()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, jobs])

  return jobData ? (
    <>
      <Navbar />
      <div className='min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto'>
        <div className='bg-white text-black rounded-lg w-full'>
          <div className='flex justify-center md:justify-between flex-wrap gap-8 px-14 py-20 mb-6 bg-sky-50 border border-sky-400 rounded-xl'>
            <div className='flex flex-col md:flex-row items-center'>
              <img className='h-24 bg-white rounded-lg p-4 mr-4 max-md:mb-4 border' src={assets.company_icon} alt="Company Logo" />
              <div className='text-center md:text-left text-neutral-700'>
                <h1 className='text-2xl font-medium sm:text-4xl'>{jobData.title}</h1>
                <div className='flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-2'>
                  <span className='flex items-center gap-1'>
                    <img src={assets.suitcase_icon} alt="SuitCase Icon" />
                    {jobData.companyId.name}
                  </span>
                  <span className='flex items-center gap-1'>
                    <img src={assets.location_icon} alt="Location Icon" />
                    {jobData.location}
                  </span>
                  <span className='flex items-center gap-1'>
                    <img src={assets.person_icon} alt="Person Icon" />
                    {jobData.level}
                  </span>
                  <span className='flex items-center gap-1'>
                    <img src={assets.money_icon} alt="Money Icon" />
                    CTC: {kconvert.convertTo(jobData.salary)}
                  </span>
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-center text-end text-sm max-md:mx-auto max-md:text-center'>
              <button className='bg-blue-600 text-white py-2.5 px-10 rounded'>Apply Now</button>
              <p className='mt-1 text-gray-600'>Posted on: {moment(jobData.data).fromNow()}</p>
            </div>

          </div>

          <div className='flex flex-col lg:flex-row justify-between items-start'>
            <div className='w-full lg:w-2/3'>
              <h2 className='font-bold text-2xl mb-4'>Job description</h2>
              <div className='rich-text' dangerouslySetInnerHTML={{ __html: jobData.description }}></div>
              <button className='bg-blue-600 text-white py-2.5 px-10 rounded'>Apply Now</button>

            </div>
            {/* Right Section More Jobs */}
            <div className='w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 space-y-5'>
              <h2>More jobs from {jobData.companyId.name}</h2>
              {jobs.filter(job => job._id !== jobData._id && job.companyId._id === jobData.companyId._id)
                .filter(() => true).slice(0, 4)
                .map((job, index) => <JobCard key={index} job={job} />)}
            </div>
          </div>

        </div>
      </div>
      {/* Footer Section */}
      <Footer />
    </>
  ) : (
    <Loading />
  )
}

export default ApplyJobs;
