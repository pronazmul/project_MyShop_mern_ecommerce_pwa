import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'

const CustomSelectList = ({ data, selected, setSelected }) => {
  return (
    <div className='relative'>
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Button className='w-full p-2 text-sm bg-white rounded-lg shadow-sm ring-gray-300 ring-1 focus:ring-primary text-gray-600 flex space-x-3 items-baseline'>
          <span className='font-bold uppercase'>show :</span>
          <span className=''>{selected}</span>
          <span className=''>
            <i className='fas fa-sort-down'></i>
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options className='w-full absolute z-10 overflow-auto top-10 text-base bg-white rounded-md shadow-lg sm:text-sm'>
            {data.map((item, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `${
                    active
                      ? 'text-white bg-primary font-medium'
                      : 'text-gray-500'
                  }
                          cursor-default select-none relative py-2 pl-10 pr-4 transition duration-300`
                }
                value={item}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`${
                        selected ? 'font-medium' : 'font-normal'
                      } block truncate`}
                    >
                      {item}
                    </span>
                    {selected ? (
                      <span
                        className={`${
                          active
                            ? 'text-white bg-primary font-medium'
                            : 'text-gray-500'
                        }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                      >
                        <i className='fas fa-check' />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  )
}

export default CustomSelectList

/*
@Requirments
                <CustomSelectList
                  data={entitiesData}
                  selected={entities}
                  setSelected={setEntities}
                />
*/
