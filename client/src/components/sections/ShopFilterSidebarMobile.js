import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const ShopFilterSidebarMobile = ({
  showFilter,
  handleFilterSidebar,
  products,
  categories,
  handleCategory,
  selectedCategory,
  searchedCategory,
  brands,
  handleBrand,
  filteredProducts,
  handleMinMax,
}) => {
  return (
    <Transition.Root show={showFilter ? true : false} as={Fragment}>
      <Dialog
        as='div'
        className='absolute z-30 inset-0 overflow-hidden'
        onClose={handleFilterSidebar}
      >
        <div className='absolute z-30 inset-0 overflow-hidden'>
          <Transition.Child
            as={Fragment}
            enter='ease-in-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in-out duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='absolute h-screen inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>
          <div className='fixed inset-y-0 right-0 pl-30 w-3/4 flex'>
            <Transition.Child
              as={Fragment}
              enter='transform transition ease-in-out duration-500 sm:duration-700'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transform transition ease-in-out duration-500 sm:duration-700'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              <div className='w-screen max-w-md'>
                <div className='h-full flex flex-col bg-white shadow-xl overflow-y-scroll'>
                  <div className='flex-1 py-6 overflow-y-auto px-4 sm:px-6'>
                    <div className='flex items-start justify-between'>
                      <Dialog.Title className='text-lg font-bold uppercase text-gray-900'>
                        Filter Product
                      </Dialog.Title>
                      <div className='ml-3 h-7 flex items-center'>
                        <button
                          className='-m-2 p-2 text-gray-400 hover:text-gray-500'
                          onClick={handleFilterSidebar}
                        >
                          <span className='h-6 w-6'>
                            <i className='fa fa-times'></i>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className='mt-8'>
                      {/* Filter Iitems Start From Here */}
                      <div className='bg-white p-4 shadow rounded overflow-hidden'>
                        <div className=' divide-y divide-gray-200 space-y-4 text-xs '>
                          {/* Categories */}
                          <div className='space-y-1'>
                            <h3 className='uppercase text-sm lg:text-base text-gray-800 font-bold'>
                              Categories
                            </h3>
                            <div className=' space-y-1 pt-2'>
                              {categories &&
                                categories.map((category, index) => (
                                  <div
                                    key={index}
                                    className='flex items-center'
                                  >
                                    <input
                                      type='checkbox'
                                      id={index + 'category'}
                                      value={category}
                                      className=' text-primary focus:ring-0 rounded cursor-pointer'
                                      onChange={handleCategory}
                                      checked={
                                        selectedCategory.length &&
                                        selectedCategory.includes(category)
                                      }
                                      disabled={
                                        searchedCategory &&
                                        searchedCategory === category
                                      }
                                    />
                                    <label
                                      for={index + 'category'}
                                      className='text-gray-600 ml-3 cursor-pointer capitalize'
                                    >
                                      {category}
                                    </label>
                                    <div className=' text-gray-600 text-sm ml-auto'>
                                      (
                                      {
                                        products.filter(
                                          (item) => item.category === category
                                        ).length
                                      }
                                      )
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                          {/* Brands */}
                          <div
                            className={
                              brands && brands.length
                                ? `space-y-1 pt-2 block`
                                : `space-y-1 pt-2 hidden`
                            }
                          >
                            <h3 className='uppercase text-sm lg:text-base text-gray-800 font-bold'>
                              Brands
                            </h3>
                            <div className='space-y-1 pt-2'>
                              {brands &&
                                brands.map((brand, index) => (
                                  <div
                                    key={index}
                                    className='flex items-center'
                                  >
                                    <input
                                      type='checkbox'
                                      id={index + 'brand'}
                                      value={brand}
                                      className=' text-primary focus:ring-0 rounded cursor-pointer'
                                      onChange={handleBrand}
                                    />
                                    <label
                                      for={index + 'brand'}
                                      className='text-gray-600 ml-3 cursor-pointer capitalize'
                                    >
                                      {brand}
                                    </label>
                                    <div className=' text-gray-600 text-sm ml-auto'>
                                      (
                                      {
                                        filteredProducts.filter(
                                          (item) => item.brand === brand
                                        ).length
                                      }
                                      )
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                          {/* Pricing */}
                          <div className='space-y-1 pt-2'>
                            <h3 className='uppercase text-sm lg:text-base text-gray-800 font-bold'>
                              Price
                            </h3>
                            <div className='flex items-center'>
                              <input
                                type='text'
                                name='min'
                                className='w-full border-gray-300 focus:border-primary focus:ring-0 py-1 rounded  shadow-sm'
                                placeholder='min'
                                onChange={handleMinMax}
                              />
                              <span className='text-gray-500 mx-3'>-</span>
                              <input
                                type='text'
                                name='max'
                                className='w-full border-gray-300 focus:border-primary focus:ring-0 py-1 rounded shadow-sm'
                                placeholder='max'
                                onChange={handleMinMax}
                              />
                            </div>
                          </div>
                          {/* Sizing */}
                          <div className='space-y-1 pt-2'>
                            <h3 className='uppercase text-sm lg:text-base text-gray-800 font-bold'>
                              Size
                            </h3>
                            <div className='flex items-center gap-2'>
                              <div className='size-selector'>
                                <input
                                  type='radio'
                                  name='size'
                                  id='size-xs'
                                  className='hidden'
                                />
                                <label
                                  for='size-xs'
                                  className='text-xs text-gray-600 border border-gray-200 w-6 h-6 flex items-center justify-center rounded cursor-pointer shadow-sm '
                                >
                                  XS
                                </label>
                              </div>
                              <div className='size-selector'>
                                <input
                                  type='radio'
                                  name='size'
                                  id='size-s'
                                  className='hidden'
                                />
                                <label
                                  for='size-s'
                                  className='text-xs text-gray-600 border border-gray-200 w-6 h-6 flex items-center justify-center rounded cursor-pointer shadow-sm '
                                >
                                  S
                                </label>
                              </div>
                              <div className='size-selector'>
                                <input
                                  type='radio'
                                  name='size'
                                  id='size-m'
                                  className='hidden'
                                />
                                <label
                                  for='size-m'
                                  className='text-xs text-gray-600 border border-gray-200 w-6 h-6 flex items-center justify-center rounded cursor-pointer shadow-sm '
                                >
                                  M
                                </label>
                              </div>
                              <div className='size-selector'>
                                <input
                                  type='radio'
                                  name='size'
                                  id='size-l'
                                  className='hidden'
                                />
                                <label
                                  for='size-l'
                                  className='text-xs text-gray-600 border border-gray-200 w-6 h-6 flex items-center justify-center rounded cursor-pointer shadow-sm '
                                >
                                  L
                                </label>
                              </div>
                              <div className='size-selector'>
                                <input
                                  type='radio'
                                  name='size'
                                  id='size-xl'
                                  className='hidden'
                                />
                                <label
                                  for='size-xl'
                                  className='text-xs text-gray-600 border border-gray-200 w-6 h-6 flex items-center justify-center rounded cursor-pointer shadow-sm '
                                >
                                  XL
                                </label>
                              </div>
                            </div>
                          </div>
                          {/* Colors */}
                          <div className='space-y-1 pt-2'>
                            <h3 className='uppercase text-sm lg:text-base text-gray-800 font-bold'>
                              colors
                            </h3>
                            <div className='flex items-center gap-2'>
                              <div className='color-selector'>
                                <input
                                  type='radio'
                                  name='color'
                                  id='color-red'
                                  className='hidden'
                                />
                                <label
                                  for='color-red'
                                  className='border border-gray w-6 h-6 block rounded cursor-pointer shadow-sm'
                                  style={{ backgroundColor: '#FC4444' }}
                                ></label>
                              </div>
                              <div className='color-selector'>
                                <input
                                  type='radio'
                                  name='color'
                                  id='color-white'
                                  className='hidden'
                                />
                                <label
                                  for='color-white'
                                  className='border border-gray w-6 h-6 block rounded cursor-pointer shadow-sm'
                                  style={{ backgroundColor: '#ffffff' }}
                                ></label>
                              </div>
                              <div className='color-selector'>
                                <input
                                  type='radio'
                                  name='color'
                                  id='color-blue'
                                  className='hidden'
                                />
                                <label
                                  for='color-blue'
                                  className='border border-gray w-6 h-6 block rounded cursor-pointer shadow-sm'
                                  style={{ backgroundColor: '#0000FF' }}
                                ></label>
                              </div>
                              <div className='color-selector'>
                                <input
                                  type='radio'
                                  name='color'
                                  id='color-black'
                                  className='hidden'
                                />
                                <label
                                  for='color-black'
                                  className='border border-gray w-6 h-6 block rounded cursor-pointer shadow-sm'
                                  style={{ backgroundColor: '#000000' }}
                                ></label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Filter Items End Here */}
                    </div>
                  </div>
                  <div className='border-t border-gray-200 py-2 lg:py-6 px-6 space-y-4'>
                    <div className='mt-6'>
                      <div
                        onClick={handleFilterSidebar}
                        className='flex justify-center items-center px-6 py-2 border border-primary text-black rounded-md shadow-sm text-sm uppercase font-black hover:text-white hover:bg-primary transition duration-200'
                      >
                        Find Product
                      </div>
                    </div>
                    <div className='mt-6 flex justify-center text-sm text-center text-gray-500'>
                      <p>
                        <button
                          type='button'
                          className='text-gray-600 font-medium hover:text-primary'
                          onClick={handleFilterSidebar}
                        >
                          <span aria-hidden='true'>Back To shop</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ShopFilterSidebarMobile
