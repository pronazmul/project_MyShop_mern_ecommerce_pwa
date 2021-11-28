/*
@Filter Product Method
-> Required Parameters

*/
export const productFilter = (
  search = '',
  page = 1,
  entities = 10,
  array = []
) => {
  const regex = new RegExp(search, 'i')

  // Filter By String Search:
  let searchedData = search
    ? array.filter(
        (item) =>
          item.name.match(regex) ||
          item.description.match(regex) ||
          item.brand.match(regex) ||
          item.category.match(regex)
      )
    : array

  // Pagination Data
  let pages = searchedData && Math.ceil(searchedData.length / entities)
  let skipData = entities * (page - 1) || 0

  // Filter By Entities:
  let filteredEntities = entities
    ? searchedData.slice(skipData, skipData ? skipData + entities : entities)
    : searchedData

  return {
    filteredData: filteredEntities,
    pages,
    page,
    totalData: searchedData,
    startAt: skipData,
  }
}
