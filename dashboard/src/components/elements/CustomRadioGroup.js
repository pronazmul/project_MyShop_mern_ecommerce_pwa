import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { computerRadioData } from '../data'

const CustomRadioGroup = ({ data = computerRadioData }) => {
  const [selected, setSelected] = useState(data[0])

  return (
    <div className='w-full'>
      <RadioGroup value={selected} onChange={setSelected}>
        <div className='space-y-1'>
          {data &&
            data.map((item) => (
              <RadioGroup.Option
                key={item.id}
                value={item}
                className={({ checked }) =>
                  `${checked ? 'bg-primary text-white' : 'bg-white'}
                    relative rounded-lg shadow-sm px-5 py-4 cursor-pointer flex focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className='flex items-center justify-between w-full'>
                      <div className='flex items-center'>
                        <div className='text-sm'>
                          <RadioGroup.Label
                            as='p'
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            } font-black text-lg`}
                          >
                            {item.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as='span'
                            className={`inline ${
                              checked ? 'text-sky-100' : 'text-gray-500'
                            }`}
                          >
                            <span>
                              {item.ram}/{item.cpus}
                            </span>{' '}
                            <span aria-hidden='true'>&middot;</span>{' '}
                            <span>{item.disk}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className='flex-shrink-0 text-white opacity-75'>
                          <i className='fas fa-check-circle' />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
        </div>
      </RadioGroup>
    </div>
  )
}
export default CustomRadioGroup
