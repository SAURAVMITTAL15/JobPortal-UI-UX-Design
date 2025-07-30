import { assets } from '../assets/assets';
import { useUser, useClerk, UserButton } from '@clerk/clerk-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function Navbar() {
    const { user } = useUser();
    const { openSignIn } = useClerk();
    const { value } = useContext(AppContext)
    const navigate = useNavigate();
    return (
        <div className='shadow py-4'>
            <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
                <img onClick={() => navigate('/')} src={assets.logo} width="200" alt="logo image" />
                {
                    user
                        ? <div className='flex items-center gap-3'>
                            <Link to={'/applications'}>Applied Jobs</Link>
                            <p>|</p>
                            <p className='max-sm:hidden'>Hi, {user.firstName + " " + user.lastName}</p>
                            <UserButton />
                        </div>
                        : <div onClick={() => value.setShowRecruiterLogin(true)} className='flex max-sm:text-xs gap-4'>
                            <button className='text-gray-400 cursor-pointer'>RecruiterLogin</button>
                            <button className='bg-blue-500 text-white py-2 px-4 rounded-4xl' onClick={() => openSignIn()}>Login</button>
                        </div>
                }

            </div>
        </div>
    )
}

export default Navbar;
