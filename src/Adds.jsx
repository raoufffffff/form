import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const Adds = () => {
    const [rest, setRest] = useState([])
    useEffect(() => {
        const getRest = async () => {
            try {
                const res = await axios.get(`https://tawssilat-api.onrender.com/adds`);
                setRest(res.data.message);

            } catch (error) {
                console.error("Error fetching restaurant data:", error);
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
            <div
                className='flex '
            >

                <Link
                    className='flex bg-green-600 w-fit mx-auto my-10 text-white rounded-xl px-5 py-2'
                    to={'/create'}>create restaurants</Link>
                <Link
                    className='flex bg-green-600 w-fit mx-auto my-10 text-white rounded-xl px-5 py-2'
                    to={'/createliv'}>create livror</Link>
                <Link
                    className='flex bg-green-600 w-fit mx-auto my-10 text-white rounded-xl px-5 py-2'
                    to={'/createadds'}>create adds</Link>
            </div>
            <div className='flex justify-between px-10'>

                <Link
                    to={'/'}
                    className='text-2xl text-center'
                >all  restaurants</Link>
                <Link
                    to={'/liv'}
                    className='text-2xl text-center'
                >all  livror</Link>
                <Link
                    to={'/adds'}
                    className='text-2xl text-center'
                >all  adds</Link>
            </div>
            <div>
                {myrest}
            </div>
        </div>
    )
}

export default Adds