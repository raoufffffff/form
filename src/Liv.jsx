import axios from 'axios';
import { useEffect, useState } from 'react'

const Liv = () => {
    const [rest, setRest] = useState([])
    const [l, setl] = useState(true)

    const getRest = async () => {
        try {
            const res = await axios.get(`https://tawssilat-backend-liv.onrender.com/liv`);
            setRest(res.data.result);

        } catch (error) {
            console.error("Error fetching restaurant data:", error);
        } finally {
            setl(false)
        }
    };
    useEffect(() => {


        getRest();



    }, []);
    const delet = async (e) => {
        axios.delete(`https://tawssilat-backend-liv.onrender.com/liv/${e}`)
            .then(() => {
                getRest()

            })
    }
    if (l) {
        return <div className=" animate-pulse w-10/12 mx-auto flex-wrap flex justify-center gap-5 ">
            <div
                className='w-11/12 md:w-3/12 shadow-xl h-fit'
            >
                <div
                    className=' w-full h-20 bg-slate-500'
                >

                </div>
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
            <div
                className='w-11/12 md:w-3/12 shadow-xl h-fit'
            >
                <div
                    className=' w-full h-20 bg-slate-500'
                >

                </div>
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
            <div
                className='w-11/12 md:w-3/12 shadow-xl h-fit'
            >
                <div
                    className=' w-full h-20 bg-slate-500'
                >

                </div>
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


        </div>
    }

    const myrest = rest.map(e => {
        return <tr key={e._id}>

            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src="https://i.ibb.co/wY3Lxq0/images.jpg"
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{e.name}</div>
                        <div className="text-sm opacity-50">{e.phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {e.email}
            </td>
            <td>{e.password}</td>
            <th>
                <button
                    onClick={() => delet(e._id)}
                    className="btn btn-ghost btn-xs text-red-600">delete</button>
            </th>
        </tr>
    })
    return (
        <div
            className='w-full'
        >
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>email</th>
                            <th>pass</th>
                            <th>delete</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {myrest}

                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>email</th>
                            <th>pass</th>
                            <th>delete</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>


        </div>
    )
}

export default Liv