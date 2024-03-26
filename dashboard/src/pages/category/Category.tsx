import { NavLink } from "react-router-dom"
import DisplayCategoryItems from "../../components/category/DisplayCategoryItems"

const Category = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="w-full px-2 flex flex-row items-center justify-between">
          <div className="relative">
            <form action="">
              <div className="relative">
                <div
                  className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="text" id="table-search-users"
                  className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-48 md:w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Category" />
              </div>
            </form>
          </div>
          <NavLink to="/category/add"
            className="flex items-center justify-center px-5 h-10 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
            <span className="">Add Category</span>
          </NavLink>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-sm sm:rounded-lg">
        <DisplayCategoryItems />
      </div>
    </div>
  )
}

export default Category