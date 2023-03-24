import { useState } from 'react';
import userStore from '../../../stores/user-store';
import CheckBadgeIcon from '../../ui/icons/CheckBadgeIcon';
import KeyIcon from '../../ui/icons/KeyIcon';
import PencilIcon from '../../ui/icons/PencilIcon';
import AccountActivationModal from './AccountActivationModal';
import ChangePasswordModal from './ChangePasswordModal';
import EditUserModal from './EditUserModal';

function ProfileInformation() {

    const { user } = userStore()


    const [editUserModalVis, setEditUserModalVis] = useState(false)

    function toggleEditUserModal()
    {
        setEditUserModalVis(prevState => !prevState)
    }

    const [changePasswordModalVis, setChangePasswordModalVis] = useState(false)

    function toggleChangePasswordModal()
    {
        setChangePasswordModalVis(prevState => !prevState)
    }

    const [accActivationModalVis, setAccActivationModalVis] = useState(false)

    function toggleAccActivationModal()
    {
        setAccActivationModalVis(prevState => !prevState)
    }


    return (
        <div className="relative mt-8 p-3 flex flex-col gap-y-2">
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold text-gray-300">Profile Information</h2>
                <button onClick={toggleEditUserModal} className="px-3 py-2 flex flex-nowrap gap-x-1 rounded-xl bg-yellow-300 text-black text-md">
                    <span className='scale-90'><PencilIcon /></span>
                    <span>Edit</span>
                </button>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">

                <div className='col-span-1 flex flex-col gap-y-1'>
                    <span className='text-lg text-gray-400'>Full Name</span>
                    <div className='px-3 py-2 rounded-xl bg-gray-600 text-gray-200 text-xl'>
                        {user.fullName}
                    </div>
                </div>
                <div className='col-span-1 flex flex-col gap-y-1'>
                    <span className='text-lg text-gray-400'>Email</span>
                    <div className='px-3 py-2 rounded-xl bg-gray-600 text-gray-200 text-xl'>
                        {user.email}
                    </div>
                </div>
                <div className='col-span-1 flex flex-col gap-y-1'>
                    <span className='text-lg text-gray-400'>Birthday</span>
                    <div className='px-3 py-2 rounded-xl bg-gray-600 text-gray-200 text-xl'>
                        1999/06/11
                    </div>
                </div>
                <div className='col-span-1 flex flex-col gap-y-1'>
                    <span className='text-lg text-gray-400'>Phone Number</span>
                    <div className='px-3 py-2 rounded-xl bg-gray-600 text-gray-200 text-xl'>
                        +1 555 9688
                    </div>
                </div>
                <div className='col-span-1 flex flex-col gap-y-1'>
                    <span className='text-lg text-gray-400'>Password</span>
                    <div className='px-3 py-2 flex justify-between items-center rounded-xl bg-gray-600 text-gray-200 text-xl'>
                        <span className='leading-3'>********</span>
                        <button onClick={toggleChangePasswordModal} className="flex items-center gap-x-1 px-2 py-1 w-fit rounded-xl text-sm bg-red-500 text-white">
                            <span className="scale-75"><KeyIcon /></span>
                            <span>Change</span>
                        </button>
                    </div>
                </div>
                <div className='col-span-1 flex flex-col gap-y-1'>
                    <span className='text-lg text-gray-400'>Join Date</span>
                    <div className='px-3 py-2 rounded-xl bg-gray-600 text-gray-200 text-xl'>
                        2023/01/02
                    </div>
                </div>
                <div className='col-span-1 flex flex-col gap-y-1'>
                    <span className='text-lg text-gray-400'>Account Activation</span>
                    <div className='px-3 py-2 flex justify-between items-center rounded-xl bg-gray-600 text-gray-200 text-xl'>
                        <span className='leading-3'>not activated</span>
                        <button onClick={toggleAccActivationModal} className="flex items-center gap-x-1 px-2 py-1 w-fit rounded-xl text-sm bg-emerald-600 text-white">
                            <span className="scale-75"><CheckBadgeIcon/></span>
                            <span>Active</span>
                        </button>
                    </div>
                </div>
            </div>

            {editUserModalVis && (<EditUserModal toggle={toggleEditUserModal}/>)}
            {changePasswordModalVis && (<ChangePasswordModal toggle={toggleChangePasswordModal}/>)}
            {accActivationModalVis && (<AccountActivationModal toggle={toggleAccActivationModal}/>)}
        </div>
    );
}

export default ProfileInformation;