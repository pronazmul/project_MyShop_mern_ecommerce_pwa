import { Disclosure } from '@headlessui/react'
import { accrodionData } from './../data'

const CustomAccordion = ({ data = accrodionData }) => {
  return (
    <div className='w-full mx-auto space-y-1'>
      {data &&
        data.map((item) => (
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`${
                    open ? 'bg-primary text-white' : 'text-gray-500 bg-gray-100'
                  } flex justify-between w-full px-4 py-2 rounded-xl `}
                >
                  <span>{item.name}</span>
                  <span className={`${open && 'transform rotate-180'}`}>
                    <i className='fas fa-sort-down'></i>
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className='p-2 text-sm text-gray-500'>
                  {item.desciption}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
    </div>
  )
}

export default CustomAccordion
