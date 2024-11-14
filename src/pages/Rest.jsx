import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

const Rest = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [restaurantFood, setRestaurantFood] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch food data
    const fetchFood = useCallback(async () => {
        try {
            const response = await axios.get(`https://tawssilat-user-backend.onrender.com/rest/food/${id}`);
            setRestaurantFood(response.data.reslut);

        } catch (error) {
            console.error("Error fetching restaurant food data:", error);
        }
    }, [id]);

    // Fetch restaurant data and food data on component mount
    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                const response = await axios.get(`https://tawssilat-api.onrender.com/restaurant/${id}`);
                setRestaurant(response.data.result);
                await fetchFood();
            } catch (error) {
                console.error("Error fetching restaurant data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchRestaurant();
    }, [id, fetchFood]);

    // Delete food item
    const deleteFood = async (foodId) => {
        try {
            await axios.delete(`https://tawssilat-api.onrender.com/food/${foodId}`);
            fetchFood();
        } catch (error) {
            console.error("Error deleting food item:", error);
        }
    };

    // Loading skeleton
    if (loading) {
        return (
            <div className="animate-pulse w-10/12 mx-auto flex-wrap flex justify-center gap-5">
                {[...Array(3)].map((_, index) => (
                    <div key={index} className="w-11/12 md:w-3/12 shadow-xl h-fit">
                        <div className="w-full h-20 bg-slate-500"></div>
                        <div className="flex-1 space-y-6 py-1">
                            <div className="h-2 bg-slate-700 rounded"></div>
                            <div className="space-y-3">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-700 rounded"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    // Render food table rows
    const foodRows = restaurantFood.map((item) => (
        <tr key={item._id}>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img src={item.img} alt={item.name} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{item.name}</div>
                        <div className="text-sm opacity-50">{item._id}</div>
                    </div>
                </div>
            </td>
            <td>{item.des}</td>
            <td>{item.price} DA</td>
            <th>
                <button
                    onClick={() => deleteFood(item._id)}
                    className="btn btn-ghost btn-xs text-red-600">
                    Delete
                </button>
            </th>
        </tr>
    ));

    return (
        <div className="w-full">
            {restaurant && (
                <>
                    <h1 className="text-center">Name: <strong>{restaurant.name}</strong></h1>
                    <h1 className="text-center">Email: <strong>{restaurant.email}</strong></h1>
                    <h1 className="text-center">Password: <strong>{restaurant.password}</strong></h1>
                </>
            )}
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{foodRows}</tbody>
                <tfoot>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Rest;
