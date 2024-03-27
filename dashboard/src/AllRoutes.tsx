import { Route, Routes } from "react-router-dom"
import DashBoard from "./pages/dashboard/DashBoard"
import Category from "./pages/category/Category"
import Product from "./pages/product/Product"
import SignIn from "./pages/sign-in/SignIn"
import SignUp from "./pages/sign-up/SignUp"
import Profile from "./pages/profile/Profile"
import EditCategory from "./pages/category/EditCategory"
import ViewCategory from "./pages/category/ViewCategory"
import AddCategory from "./pages/category/AddCategory"

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/category" element={<Category />} />
            <Route path="/category/add" element={<AddCategory />} />
            <Route path="/category/edit/:id" element={<EditCategory />} />
            <Route path="/category/view/:id" element={<ViewCategory />} />
            <Route path="/product" element={<Product />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
        </Routes>
    )
}

export default AllRoutes