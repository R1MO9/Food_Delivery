import { NavLink } from "react-router-dom";
import { CategoriesItemProps } from "../../util/type";

const CategoriesItem: React.FC<CategoriesItemProps> = ({ item, index }) => {

    return (
        <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index + 1}</td>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.name}</th>
            <td className="px-6 py-4">{item.restaurants}</td>
            <td className="px-6 py-4">{item.quantity}</td>
            <td className="px-6 py-4">{item.imageName}</td>
            <td className="px-6 py-4 ">
                <NavLink to={`/category/view/${item.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">VIEW</NavLink>
            </td>
            <td className="px-6 py-4">
                <NavLink to={`/category/edit/${item.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">EDIT</NavLink>
            </td>
            <td className="px-6 py-4">
                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">DELETE</button>
            </td>
        </tr>
    )
}

export default CategoriesItem;