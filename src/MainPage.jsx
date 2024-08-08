import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const MainPage = () => {
    const [rest, setRest] = useState([])
    const [hi, setHi] = useState(true)
    useEffect(() => {
        const getRest = async () => {
            try {
                const res = await axios.get(`https://tawssilat-api-1.onrender.com/restaurant`);
                setRest(res.data.result);
                console.log(res.data.result[0]);

            } catch (error) {
                console.error("Error fetching restaurant data:", error);
            }
        };

        getRest();

        const timer = setTimeout(() => {
            setHi(prev => !prev);
        }, 2000);

        // Clean up the timeout
        return () => clearTimeout(timer);
    }, [hi]);
    const delet = async (e) => {
        axios.delete(`https://tawssilat-api-1.onrender.com/restaurant/${e}`)
            .then(res => {
                console.log(res.data);

            })
    }
    const myrest = rest.map(e => {
        return <div key={e._id}
            className='flex h-36 w-11/12 mx-auto my-5 items-center border-b border-green-600 p-4'
        >
            <img src={e.logo}
                className='w-3/12 h-full mr-3'
            />
            <div
                className='flex flex-col w-7/12'
            >
                <div
                    className='flex'>
                    name :
                    <h1
                        className='font-bold mx-1'
                    > {e.name}</h1>
                </div>
                <div
                    className='flex'
                >
                    phone : <h1
                        className='font-bold mx-1'
                    >{e.phone}</h1>
                </div>
                <div
                    className='flex'
                >
                    pass : <h1
                        className='font-bold mx-1'
                    >{e.password}</h1>
                </div>
                <div
                    className='flex'
                >
                    email : <h1
                        className='font-bold mx-1'
                    >{e.email}</h1>
                </div>



            </div>
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
            <Link
                className='flex bg-green-600 w-fit mx-auto my-10 text-white rounded-xl px-5 py-2'
                to={'create'}>create restaurants</Link>

            <h1
                className='text-2xl text-center'
            >all  restaurants</h1>
            <div>
                {myrest}
            </div>
        </div>
    )
}

export default MainPage