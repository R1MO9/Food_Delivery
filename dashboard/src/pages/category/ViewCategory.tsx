import { Link, useParams } from "react-router-dom";
import { Category } from "../../util/type";
import { useEffect, useState } from "react";
import axios from "axios";

const ViewCategory = () => {
    const { id } = useParams<{ id: string }>();

    const [data, setData] = useState<Category | null>(null);

    useEffect(() => {
        axios.get<Category>(`http://localhost:8080/api/categories/get?id=${id}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [id]);

    function deleteCategory() {
        return () => {
            axios.delete(`http://localhost:8080/api/categories/delete?id=${id}`)
                .then(response => {
                    console.log(response.data);
                    window.location.href = "/category";
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        }
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="flex items-center mb-8 mt-5">
                <Link to="/category" className="flex flex-row items-center gap-2 text-grey-700">
                    <div>
                        <svg className="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold dark:text-white flex items-center">View Category</h1>
                    </div>
                </Link>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-1">
                <div>
                    <label htmlFor="category_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input value={data.name} type="text" id="category_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Category name..." required disabled />
                </div>
                <div>
                    <label htmlFor="category_restaurants"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Restaurants</label>
                    <input value={data.restaurants} type="text" id="category_restaurants"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Number of available restaurants..." disabled required />
                </div>
                <div>
                    <label htmlFor="category_quantity"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                    <input value={data.quantity}
                        type="text" id="category_quantity"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Available number of items..." disabled required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Category image</label>
                    {data.image && <img src={`data:image/png;base64,${data.image}`} className="rounded-md" alt="Image not available" />}
                    {!data.image && <p>No image available</p>}
                </div>
                <div className="flex gap-2">
                    <Link to={`/category/edit/${id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">EDIT</Link>
                    <button onClick={deleteCategory()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">DELETE</button>
                </div>
            </div>
        </div>
    )
}

export default ViewCategory;