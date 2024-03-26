import { useEffect, useState } from 'react';
import axios from 'axios';
import { Category } from '../../util/type';
import CategoriesItem from './CategoriesItem';

const DisplayCategoryItems = () => {

    const [data, setData] = useState<Category[]>([]);

    useEffect(() => {
        axios.get<Category[]>('http://localhost:8080/api/categories/getAll')
            .then(response => {
                setData(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            SL No.
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Restaurants
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Image Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">View</span>
                            View
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                            Edit
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Delete</span>
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <CategoriesItem key={item.id} item={item} index={index} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DisplayCategoryItems