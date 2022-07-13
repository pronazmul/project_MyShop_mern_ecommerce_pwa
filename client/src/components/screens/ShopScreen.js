import React, { useEffect, useState } from 'react'
import Breadcrumb from '../sections/Breadcrumb'
import Product from '../sections/Product'
import { useDispatch, useSelector } from 'react-redux'
import { productListAction } from './../../redux/actions/productActions'
import { useParams } from 'react-router-dom'
import ShopFilterSidebarMobile from '../sections/ShopFilterSidebarMobile'
import Loader from '../elements/Loader'
import ErrorMessage from '../elements/ErrorMessage'

const filterProduct = (
  categories,
  brands,
  minMaxPrice,
  shortBy,
  showEntities,
  prouducts
) => {
  let byCategory = categories.length
    ? prouducts.filter((i) => categories.includes(i.category))
    : prouducts

  let byBrand = brands.length
    ? byCategory.filter((i) => brands.includes(i.brand))
    : byCategory

  let minPrice =
    minMaxPrice.min > 0
      ? byBrand.filter((i) => i.price > minMaxPrice.min)
      : byBrand

  let maxPrice =
    minMaxPrice.max > 0
      ? minPrice.filter((i) => i.price < minMaxPrice.max)
      : minPrice

  let sort = shortBy
    ? shortBy === 'low-heigh'
      ? maxPrice.sort((a, b) => Number(a.price) - Number(b.price))
      : maxPrice.sort((a, b) => Number(b.price) - Number(a.price))
    : maxPrice

  let entities = showEntities ? sort.slice(0, showEntities) : sort

  return entities.length ? entities : prouducts
}

const ShopScreen = () => {
  const { searchedCategory } = useParams()
  const dispatch = useDispatch()
  const { error, loading, products } = useSelector((state) => state.productList)

  // Filter Categories From All Products
  const categories = searchedCategory
    ? [searchedCategory]
    : [...new Set(products.map((item) => item.category))]

  // Selected Products
  const [selectedCategory, setSelectedCategory] = useState(
    searchedCategory ? [searchedCategory] : []
  )

  // Filter Brands From Selected Categories
  const brands = [
    ...new Set(
      products.map(
        (item) => selectedCategory.includes(item.category) && item.brand
      )
    ),
  ].filter(Boolean)

  const [selectedBrand, setSelectedBrand] = useState([])
  const [minMaxPrice, setMinMaxPirce] = useState({ min: '', max: '' })
  const [shortBy, setShortBy] = useState('')
  const [showEntities, setShowEntities] = useState(12)

  const filteredProducts = filterProduct(
    selectedCategory,
    selectedBrand,
    minMaxPrice,
    shortBy,
    showEntities,
    products
  )

  // Category Handler
  const handleCategory = (e) => {
    const category = e.target.value
    if (!selectedCategory.includes(category)) {
      setSelectedCategory([...selectedCategory, category])
    } else {
      setSelectedCategory(selectedCategory.filter((i) => i !== category))
    }
  }

  // Brand Handler
  const handleBrand = (e) => {
    const brand = e.target.value
    if (!selectedBrand.includes(brand)) {
      setSelectedBrand([...selectedBrand, brand])
    } else {
      setSelectedBrand(selectedBrand.filter((i) => i !== brand))
    }
  }

  // Min Max Handler
  const handleMinMax = (e) => {
    let name = e.target.name
    let value = e.target.value
    setMinMaxPirce({ ...minMaxPrice, [name]: value })
  }

  // const Handle Mobile Screen Sidebar:
  const [showFilter, setShowFilter] = useState(false)

  const handleFilterSidebar = () => {
    setShowFilter(!showFilter)
  }

  // Side Effect
  useEffect(() => {
    dispatch(productListAction())
  }, [dispatch])

  return (
    <>
      <Breadcrumb />
      {/* Shop Wraper */}
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage error={error} />
      ) : (
        <div className='container grid grid-cols-4 gap-2 lg:gap-4 py-8 lg:py-12  items-start'>
          {/* Sidebar */}
          <div className='col-span-1 bg-white px-4 py-4 shadow rounded overflow-hidden md:block hidden'>
            <div className=' divide-y divide-gray-200 space-y-4 text-xs lg:text-sm '>
              {/* Categories */}
              <div className='space-y-1'>
                <h3 className='uppercase text-sm lg:text-base text-gray-800 font-bold'>
                  Categories
                </h3>
                <div className=' space-y-1 pt-2'>
                  {categories &&
                    categories.map((category, index) => (
                      <div key={index} className='flex items-center'>
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
                            searchedCategory && searchedCategory === category
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
                  brands.length
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
                      <div key={index} className='flex items-center'>
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
          {/* Product Wrapper */}
          <div className='col-span-4 md:col-span-3'>
            {/* Sorting */}
            <div className='flex items-center mb-4'>
              <div className=' flex items-center space-x-3'>
                <p className='text-gray-500 text-sm lg:text-base font-semibold'>
                  Sort By:
                </p>
                <select
                  className=' rounded text-xs lg:text-sm text-gray-600 py-1 border-gray-300 shadow-sm focus:ring-primary focus:border-primary'
                  name='sortBy'
                  onChange={(e) => setShortBy(e.target.value)}
                  value={shortBy}
                >
                  <option value=''>Default</option>
                  <option value='low-heigh'>Price low-heigh</option>
                  <option value='heigh-low'>Price heigh-low</option>
                </select>
              </div>

              {/* Filter for Mobile */}
              <div className='ml-auto block md:hidden'>
                <div
                  onClick={handleFilterSidebar}
                  className='border border-gray-200 h-8 w-20 flex items-center justify-between text-gray-500 px-2 hover:text-white hover:bg-primary rounded cursor-pointer text-xs'
                >
                  <span>Filter</span>
                  <i className='fas fa-filter'></i>
                </div>
              </div>
              {/* Show Enteties for Dextop */}
              <div className='ml-auto hidden md:block'>
                <div className=' flex items-center space-x-3'>
                  <p className='text-gray-500 text-sm lg:text-base font-semibold'>
                    Show:
                  </p>
                  <select
                    className=' rounded text-xs lg:text-sm text-gray-600 py-1 border-gray-300 shadow-sm focus:ring-primary focus:border-primary'
                    name='showEntities'
                    onChange={(e) => setShowEntities(Number(e.target.value))}
                    value={showEntities}
                  >
                    <option value='12'>12</option>
                    <option value='24'>24</option>
                    <option value='48'>48</option>
                    <option value='84'>84</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Products */}
            <div className=' grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 gap-3 lg:gap-6'>
              <Product product={filteredProducts} />
            </div>
          </div>
        </div>
      )}
      {/* Mobile Filter Sidebar */}
      <ShopFilterSidebarMobile
        showFilter={showFilter}
        handleFilterSidebar={handleFilterSidebar}
        products={products}
        categories={categories}
        handleCategory={handleCategory}
        selectedCategory={selectedCategory}
        searchedCategory={searchedCategory || ''}
        brands={brands}
        handleBrand={handleBrand}
        filteredProducts={filteredProducts}
        handleMinMax={handleMinMax}
      />
    </>
  )
}

// Data For Mobile Filter Sidebar
// {showFilter,handleFilterSidebar,products,categories,handleCategory, selectedCategory,searchedCategory,brands,handleBrand,filteredProducts,handleMinMax}

export default ShopScreen
