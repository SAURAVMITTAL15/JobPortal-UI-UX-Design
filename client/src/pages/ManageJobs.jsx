import { manageJobsData } from "../assets/assets";
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

function ManageJobs() {

    const navigate = useNavigate()

    return (
        <div className="container p-4 max-w-5xl">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 max-sm:text-sm">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b text-left max-sm:hidden">#</th>
                            <th className="py-2 px-4 border-b text-left">Job Title</th>
                            <th className="py-2 px-4 border-b text-left max-sm:hidden">Date</th>
                            <th className="py-2 px-4 border-b text-left max-sm:hidden">Location</th>
                            <th className="py-2 px-4 border-b text-center">Applicants</th>
                            <th className="py-2 px-4 border-b text-left">Visible</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageJobsData.map((data, index) => (
                                <tr key={index} className="text-gray-700">
                                    <td className="py-2 px-4 border-b max-sm:hidden">{index + 1}</td>
                                    <td className="py-2 px-4 border-b">{data.title}</td>
                                    <td className="py-2 px-4 border-b max-sm:hidden">{moment(data.date).format("ll")}</td>
                                    <td className="py-2 px-4 border-b max-sm:hidden">{data.location}</td>
                                    <td className="py-2 px-4 border-b text-center">{data.applicants}</td>
                                    <td className="py-2 px-4 border-b">
                                        <input className="scale-125 ml-4" type="checkbox" />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="mt-4 flex justify-end">
                <button onClick={() => navigate('/dashboard/add-jobs')} className="bg-black text-white py-2 px-4 rounded cursor-pointer">Add New Job</button>
            </div>
        </div>
    )
}

export default ManageJobs;