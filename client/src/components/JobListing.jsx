import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext.jsx';
import { assets, JobCategories, JobLocations } from '../assets/assets.js';
import JobCard from './JobCard.jsx';


function JobListing() {
    const { value } = useContext(AppContext);
    const { isSearched, searchFilter, setSearchFilter, jobs } = value;

    const [showFilter, setShowFilter] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]);

    const [filteredJobs, setFilteredJobs] = useState(jobs);

    const handleCategoryChange = (category) => {
        setSelectedCategories(prev => {
            if (prev.includes(category)) {
                return prev.filter(c => c !== category);
            }
            return [...prev, category];
        });
    }

    useEffect(() => {
        const matchesCategory = job => selectedCategories.length === 0 || selectedCategories.includes(job.category);

        const matchesLocation = job => selectedLocations.length === 0 || selectedLocations.includes(job.location);

        const titleMatch = job => searchFilter.title === "" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase());

        const locationMatch = job => searchFilter.location === "" || job.location.toLowerCase().includes(searchFilter.location.toLowerCase());

        const newFilteredJobs = jobs.slice().reverse().filter(job =>
            matchesCategory(job) &&
            matchesLocation(job) &&
            titleMatch(job) &&
            locationMatch(job)
        );

        setFilteredJobs(newFilteredJobs);
        setCurrentPage(1);
    }, [jobs, selectedCategories, selectedLocations, searchFilter]);

    const handleLocationChange = (location) => {
        setSelectedLocations(prev => {
            if (prev.includes(location)) {
                return prev.filter(c => c !== location);
            }
            return [...prev, location];
        });
    }

    return (
        <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8'>
            {/* Side bar */}
            <div className='w-full lg:w-1/4 bg-white px-4'>
                {/* Search Filter From Hero Component*/}
                {
                    isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
                        <>
                            <h3 className='font-medium text-lg mb-4'>Current Search</h3>
                            <div className='mb-4 text-gray-600'>
                                {searchFilter.title && (
                                    <span className="inline-flex items-center gap-2.5 bg-blue-50 border-blue-200 px-4 py-1.5 rounded">
                                        {searchFilter.title}
                                        <img className='cursor-pointer' src={assets.cross_icon} alt="Cross Image"
                                            onClick={() => setSearchFilter(prev => ({ ...prev, title: "" }))} />
                                    </span>
                                )}
                                {searchFilter.location && (
                                    <span className="ml-2 inline-flex items-center gap-2.5 bg-red-50 border-red-200 px-4 py-1.5 rounded">
                                        {searchFilter.location}
                                        <img className='cursor-pointer' src={assets.cross_icon} alt="Cross Image"
                                            onClick={() => setSearchFilter(prev => ({ ...prev, location: "" }))} />
                                    </span>
                                )}
                            </div>
                        </>
                    )}

                <button onClick={() => setShowFilter(!showFilter)} className='px-6 py-1.5 rounded border border-gray-400 lg:hidden'>
                    {
                        showFilter ? "Close" : "Filters"
                    }
                </button>

                {/* Category Filter  */}
                <div className={showFilter ? "" : "max-lg:hidden"}>
                    <h4 className='font-medium text-lg py-4'>Search by Category</h4>
                    <ul className='space-y-4 text-gray-600'>
                        {JobCategories.map((category, index) => (
                            <li key={index} className='flex items-center gap-3'>
                                <input
                                    onChange={() => handleCategoryChange(category)}
                                    checked={selectedCategories.includes(category)}
                                    className='scale-125' type="checkbox" />
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Location Filter  */}
                <div className={showFilter ? "" : "max-lg:hidden"}>
                    <h4 className='font-medium text-lg py-4 pt-14'>Search by Location</h4>
                    <ul className='space-y-4 text-gray-600'>
                        {JobLocations.map((location, index) => (
                            <li key={index} className='flex items-center gap-3'>
                                <input
                                    onChange={() => handleLocationChange(location)}
                                    checked={selectedLocations.includes(location)}
                                    className='scale-125' type="checkbox" />
                                {location}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Job listings */}
            <section className='w-full lg:w-3/4 text-gray-800 max-lg:px-4'>
                <h3 className='font-medium text-3xl py-2' id='job-list'>Latest Jobs</h3>
                <p className='mb-8'>Get your desired job from top companies</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
                    {filteredJobs.slice((currentPage - 1) * 6, currentPage * 6).map((job, index) => (
                        <JobCard key={index} job={job} />
                    ))}
                </div>
                {/* Pagination */}
                {
                    filteredJobs.length > 0 && (
                        <div className='flex items-center justify-center space-x-2 mt-10'>
                            <a href="#job-list">
                                <img
                                    onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                                    src={assets.left_arrow_icon} alt="Left Arrow" />
                            </a>
                            {
                                Array.from({ length: Math.ceil(filteredJobs.length / 6) }).map((_, index) => (
                                    <a href="#job-list" key={index}>
                                        <button className={`w-10 h-10 flex items-center justify-center border border-gray-300  ${currentPage === index + 1 ? 'bg-blue-100 text-blue-500 ' : 'text-gray-500'}`}
                                            onClick={() => setCurrentPage(index + 1)}
                                        >{index + 1}</button>
                                    </a>
                                ))

                            }
                            <a href="#job-list">
                                <img
                                    onClick={() => setCurrentPage(Math.min(currentPage + 1, Math.ceil(filteredJobs.length / 6)))}
                                    src={assets.right_arrow_icon} alt="Right Arrow" />
                            </a>
                        </div>
                    )
                }
            </section>



        </div>
    );
}

export default JobListing;