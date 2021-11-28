import React, { useState } from 'react'
import EmailEdit from './EmailEdit'
import ParentsDataEdit from './ParentsDataEdit'
import PersonalDataEdit from './PersonalDataEdit'
import { useSelector } from 'react-redux'

const BasicInfo = () => {
  const [edit, setEdit] = useState({
    personal: false,
    parent: false,
    email: false,
  })

  const editPanelOpener = (item) => {
    setEdit({ ...edit, [item]: true })
  }

  const editPanelCloser = (item) => {
    setEdit({ ...edit, [item]: false })
  }

  const { userInfo } = useSelector((state) => state.userLogin)

  return (
    <>
      <div className='shadow rounded bg-white px-4 pt-6 pb-8'>
        {/* Section Header */}
        <div className='flex items-baseline border-b pb-1 border-gray-100'>
          <h3 className='text-sm lg:text-base font-black text-gray-600 pr-2'>
            Basic Information
          </h3>
          <span className='text-xs lg:text-sm text-gray-500'>
            Enter your basic information for ensuring security and recovery of
            your account.
          </span>
        </div>
        <div className='basic-info pl-10'>
          {/* Basic Information Title */}
          <div className='flex py-6 relative'>
            <div className='absolute -left-10'>
              <span className='bg-primary h-8 w-8 rounded-full text-white flex justify-center items-center'>
                <i className='far fa-file-alt'></i>
              </span>
            </div>
            <div className='border-b-2 pb-1 border-gray-200 w-full flex justify-between'>
              <h3 className='text-sm lg:text-base font-black text-gray-600 uppercase'>
                Personal Information
              </h3>
              {!edit.personal && (
                <button
                  onClick={() => editPanelOpener('personal')}
                  className='  text-gray-500 font-semibold border border-primary px-4 py-1 rounded text-sm hover:bg-primary hover:text-white transition duration-300'
                >
                  Edit
                </button>
              )}
            </div>
          </div>
          {/* Switch Info and Edit Screen */}
          {!edit.personal ? (
            <div className='w-full text-gray-600 text-sm flex md:flex-row md:justify-between flex-col-reverse gap-6'>
              <div className='space-y-2 w-full'>
                <div className='flex justify-between'>
                  <span className='w-full font-black'>Full Name:</span>
                  <span className='w-full'>
                    {userInfo.name ? userInfo.name : 'N/A'}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='w-full font-black'>Contract Number:</span>
                  <span className='w-full '>
                    {userInfo.mobile ? userInfo.mobile : 'N/A'}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='w-full font-black'>Gender:</span>
                  <span className='w-full '>
                    {userInfo.gender ? userInfo.gender : 'N/A'}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='w-full font-black'>Date of Birth:</span>
                  <span className='w-full '>
                    {userInfo.dateOfBirth ? userInfo.dateOfBirth : 'N/A'}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='w-full font-black'>Member Since:</span>
                  <span className='w-full '>24 August 2021</span>
                </div>
                <div className='flex justify-between'>
                  <span className='w-full font-black'>Organization:</span>
                  <span className='w-full '>
                    {userInfo.organization ? userInfo.organization : 'N/A'}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='w-full font-black'>Occupatoin:</span>
                  <span className='w-full '>
                    {userInfo.occupation ? userInfo.occupation : 'N/A'}
                  </span>
                </div>
              </div>
              <div className=' w-full flex flex-col items-center justify-center space-y-2'>
                <h3 className='text-sm font-black text-gray-600 pb-4'>
                  Update Avatar
                </h3>
                {userInfo.photo ? (
                  <img
                    src={userInfo.photo}
                    alt='Profile Image'
                    className='rounded-full w-20 h-20 border border-gray-200 p-1 object-cover block'
                  />
                ) : (
                  <div className='bg-gray-400 w-20 h-20 rounded-full text-white uppercase font-bold flex justify-center items-center'>
                    {userInfo.name.split('')[0]}
                  </div>
                )}
                <div>
                  <label htmlFor='avatar' style={{ cursor: 'pointer' }}>
                    <p className='m-0 '>
                      <i className='fas fa-cloud-upload-alt'></i>
                      <span> Update</span>
                    </p>
                  </label>
                  <input
                    className='hidden'
                    id='avatar'
                    name='avatar'
                    type='file'
                  />
                  {/* {errors.avatar && (
                    <Form.Text className='text-danger'>
                      <p className='m-0 '>{errors.avatar}</p>
                    </Form.Text>
                  )} */}
                </div>
              </div>
            </div>
          ) : (
            <PersonalDataEdit editPanelCloser={editPanelCloser} />
          )}
        </div>
        <div className='parents-info pl-10'>
          {/* Parents Information Title */}
          <div className='flex py-6 relative'>
            <div className='absolute -left-10'>
              <span className='bg-primary h-8 w-8 rounded-full text-white flex justify-center items-center'>
                <i className='far fa-user-circle'></i>
              </span>
            </div>
            <div className='border-b-2 pb-1 border-gray-200 w-full flex justify-between'>
              <h3 className='text-sm lg:text-base font-black text-gray-600 uppercase'>
                Parent's Infromaton
              </h3>
              {!edit.parent && (
                <button
                  onClick={() => editPanelOpener('parent')}
                  className='  text-gray-500 font-semibold border border-primary px-4 py-1 rounded text-sm hover:bg-primary hover:text-white transition duration-300'
                >
                  Edit
                </button>
              )}
            </div>
          </div>
          {/* Switch Parents Info and Edit Screen */}
          {!edit.parent ? (
            <div className='w-full lg:w-1/2 text-gray-600 text-sm space-y-2'>
              <div className='flex justify-between'>
                <span className='w-full font-black'>Father's Info:</span>
                <span className='w-full'>N/A</span>
              </div>
              <div className='flex justify-between'>
                <span className='w-full font-black'>Father's Phone No:</span>
                <span className='w-full'>N/A</span>
              </div>
              <div className='flex justify-between'>
                <span className='w-full font-black'>Mothers's Info:</span>
                <span className='w-full'>N/A</span>
              </div>
              <div className='flex justify-between'>
                <span className='w-full font-black'>Mothers's Phone No:</span>
                <span className='w-full'>N/A</span>
              </div>
            </div>
          ) : (
            <ParentsDataEdit editPanelCloser={editPanelCloser} />
          )}
        </div>
        <div className='email-address pl-10'>
          {/* Email Address Title */}
          <div className='flex py-6 relative'>
            <div className='absolute -left-10'>
              <span className='bg-primary h-8 w-8 rounded-full text-white flex justify-center items-center'>
                <i className='far fa-paper-plane'></i>
              </span>
            </div>
            <div className='border-b-2 pb-1 border-gray-200 w-full flex justify-between'>
              <div className='flex items-baseline space-x-2'>
                <h3 className='text-sm lg:text-base font-black text-gray-600 uppercase'>
                  Email Address
                </h3>
                <span className='text-xs lg:text-sm text-gray-500'>
                  This email address to which all notification will be sent.
                </span>
              </div>

              {!edit.email && (
                <button
                  onClick={() => editPanelOpener('email')}
                  className='  text-gray-500 font-semibold border border-primary px-4 py-1 rounded text-sm hover:bg-primary hover:text-white transition duration-300'
                >
                  Edit
                </button>
              )}
            </div>
          </div>
          {/* Switch Email Address Section */}
          {!edit.email ? (
            <div className='w-full lg:w-1/2 text-gray-600 text-sm space-y-2'>
              <div className='flex justify-between'>
                <span className='w-full font-black'>Primary Email:</span>
                <span className='w-full'>N/A</span>
              </div>
              <div className='flex justify-between'>
                <span className='w-full font-black'>Backup Email:</span>
                <span className='w-full'>N/A</span>
              </div>
            </div>
          ) : (
            <EmailEdit editPanelCloser={editPanelCloser} />
          )}
        </div>
      </div>
    </>
  )
}

export default BasicInfo
