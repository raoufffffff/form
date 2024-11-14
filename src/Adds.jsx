import axios from 'axios';
import { useEffect, useState } from 'react';

const Adds = () => {
    const [rest, setRest] = useState([])
    const [l, setl] = useState(true)

    useEffect(() => {
        const getRest = async () => {
            try {
                const res = await axios.get(`https://tawssilat-api.onrender.com/adds`);
                setRest(res.data.message);

            } catch (error) {
                console.error("Error fetching restaurant data:", error);
            } finally {
                setl(false)
            }
        };

        getRest();



        // Clean up the timeout
    }, []);
    const delet = async (e) => {
        axios.delete(`https://tawssilat-api.onrender.com/adds/${e}`)
            .then(res => {
                console.log(res.data);

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
        return <div key={e._id}
            className='flex h-36 w-11/12 mx-auto my-5 items-center border-b border-green-600 p-4'
        >
            <img src={e.img}
                className='w-6/12 h-full mr-3 rounded-xl'
            />

            {e.name != "FAST FOOD EL BENNA" && <button
                onClick={() => {
                    delet(e._id)
                }}
                className='bg-red-600 px-2 py-1 rounded-xl text-white mx-auto w-fit'>delete</button>}
        </div>
    })
    return (
        <div
            className='w-full'
        >

            <div>
                {myrest}
            </div>
        </div>
    )
}

export default Adds