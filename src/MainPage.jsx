import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {
    const [rest, setRest] = useState([])
    const [l, setl] = useState(true)
    const naigation = useNavigate()
    const getRest = async () => {
        try {
            const res = await axios.get(`https://tawssilat-api.onrender.com/restaurant`);
            setRest(res.data.result);
            console.log(res.data.result[0]);

        } catch (error) {
            console.error("Error fetching restaurant data:", error);
        }
        finally {
            setl(false)
        }
    };
    useEffect(() => {


        getRest();
    }, []);
    const delet = async (e) => {
        axios.delete(`https://tawssilat-api.onrender.com/restaurant/${e}`)
            .then(res => {
                console.log(res);
                getRest()
            })
    }
    const myrest = rest.map(e => {
        return <div
            onClick={() => {
                naigation(`rest/${e._id}`)
            }}
            key={e._id} className="card card-compact bg-base-100 w-5/12 md:w-3/12 lg:w-3/12  shadow-xl h-fit">
            <figure>
                <img
                    src={e.logo ? e.logo : "https://i.ibb.co/W0sndJX/1000015238.png"}
                    alt="Shoes"
                    className='w-full h-32'
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{e.name}</h2>
                <p>{e.phone}</p>
                <p
                    className='text-xs text-wrap'
                >{e._id}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => delet(e._id)}
                        className="btn bg-rose-600 text-white">delet</button>
                </div>
            </div>
        </div>
    })
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
    return (
        <div
            className='flex flex-wrap gap-5 my-3 justify-center items-center'
        >
            {myrest}
        </div>
    )
}

export default MainPage