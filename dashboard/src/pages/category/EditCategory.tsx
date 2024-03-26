import { useState } from 'react';

const EditCategory = () => {
    const [name, setName] = useState('');
    const [restaurants, setRestaurants] = useState('');
    const [quantity, setQuantity] = useState('');
    return (
        <div>
            <div className="flex items-center mb-8 mt-5">
                <a href="/category" className="flex flex-row items-center gap-2 text-grey-700">
                    <div>
                        <svg className="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M5 12h14M5 12l4-4m-4 4 4 4" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold dark:text-white flex items-center">Edit Category</h1>
                    </div>
                </a>
            </div>
            <form encType="multipart/form-data">
                <div className="grid gap-6 mb-6 md:grid-cols-1">
                    <div>
                        <label htmlFor="category_name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input value={name} onChange={e => setName(e.target.value)} type="text" id="category_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Category name..." required />
                    </div>
                    <div>
                        <label htmlFor="category_restaurants"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Restaurants</label>
                        <input value={restaurants} onChange={e => setRestaurants(e.target.value)} type="text" id="category_restaurants"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Number of available restaurants..." required />
                    </div>
                    <div>
                        <label htmlFor="category_quantity"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                        <input value={quantity} onChange={e => setQuantity(e.target.value)}
                            type="text" id="category_quantity"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Available number of items..." required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload
                            image file</label>
                        <input
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            aria-describedby="file_input_help" id="file_input" type="file" />
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF
                            (MAX. 800x400px).</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        VIEW
                    </button>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        UPDATE
                    </button>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        DELETE
                    </button>
                </div>
            </form>
        </div>
    )
};

export default EditCategory;