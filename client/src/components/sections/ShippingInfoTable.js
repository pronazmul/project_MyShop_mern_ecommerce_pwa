import React from 'react'

const ShippingInfoTable = () => {
  const people = [
    {
      fullName: 'Nazmul Huda',
      address: 'Fulbaria, Mymensingh',
      region: 'Bangladesh',
      phoneNumber: '01746888130',
    },
  ]
  return (
    <>
      <div className='shadow rounded bg-white px-4 pt-6 pb-8'>
        {/* Section Header */}
        <div className='flex items-baseline border-b pb-1 border-gray-100'>
          <h3 className='text-sm lg:text-base font-black text-gray-600 pr-2'>
            Shipping Information
          </h3>
          <span className='text-xs lg:text-sm text-gray-500'>
            Keep MyShop updated about your postal code so that you do not miss
            any shipping gift.
          </span>
        </div>
        <div className='shipping-info w-full'>
          <div className='flex flex-col'>
            <div className='overflow-x-auto'>
              <div className='py-4 align-middle inline-block min-w-full'>
                <div className='overflow-hidden border-b border-gray-200 rounded'>
                  <table className='min-w-full divide-y divide-gray-200'>
                    <thead className='bg-gray-50 font-black'>
                      <tr>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                          Fullname
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                          Address
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                          Region
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                          Phone Number
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                          Action
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                          Primary
                        </th>
                      </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200'>
                      {people.map((person) => (
                        <tr key={person.email}>
                          <td className='px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm font-medium text-gray-900'>
                              {person.fullName}
                            </div>
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-500'>
                              {person.address}
                            </div>
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-500'>
                              {person.region}
                            </div>
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                            <div className='text-sm text-gray-500'>
                              {person.phoneNumber}
                            </div>
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                            <div className='text-sm text-gray-500 flex space-x-2'>
                              <span className='hover:text-primary transition duration-300'>
                                <i className='far fa-edit'></i>
                              </span>
                              <span className='hover:text-primary transition duration-300'>
                                <i className='far fa-trash-alt'></i>
                              </span>
                            </div>
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap'>
                            <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                              Active
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='new-info'>
          <button className='text-gray-500 font-semibold border border-primary px-4 py-2 rounded text-sm hover:bg-primary hover:text-white transition duration-300'>
            <span className='mr-2'>
              <i className='fas fa-plus-circle'></i>
            </span>
            Add New Address
          </button>
        </div>
      </div>
    </>
  )
}

export default ShippingInfoTable
