import axios from "axios";
import { useState } from "react";

const AddCategory = () => {
  const [name, setName] = useState('');
  const [restaurants, setRestaurants] = useState('');
  const [quantity, setQuantity] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('categoryDto', new Blob([JSON.stringify({ name, restaurants, quantity })], {
      type: "application/json"
    }));

    if (file) {
      formData.append('file', file);
    }

    try {
      const response = await axios.post('http://localhost:8080/api/categories/save', formData);
      console.log(response.data);
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      console.log(file);
      setFile(file);
    }
  };

  return (
    <div>
      <h1 className="text-2xl mb-4 font-semibold text-gray-900 dark:text-white">Add Category</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="grid gap-6 mb-6 md:grid-cols-1">
          <div>
            <label htmlFor="category_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input type="text" id="category_name" onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Category name..." required />
          </div>
          <div>
            <label htmlFor="category_restaurants" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Restaurants</label>
            <input type="text" id="category_restaurants" onChange={(e) => setRestaurants(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number of available restaurants..." required />
          </div>
          <div>
            <label htmlFor="category_quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
            <input type="text" id="category_quantity" onChange={(e) => setQuantity(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Available number of items..." required />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload image file</label>
            <input onChange={handleFileChange} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
          </div>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Category</button>
      </form>
    </div>
  );
};

export default AddCategory;