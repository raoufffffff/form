import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Liv = () => {
    const [rest, setRest] = useState([])
    useEffect(() => {
        const getRest = async () => {
            try {
                const res = await axios.get(`https://tawssilat-backend-liv.onrender.com/liv`);
                setRest(res.data.result);
                console.log(res.data.result[0]);

            } catch (error) {
                console.error("Error fetching restaurant data:", error);
            }
        };

        getRest();



        // Clean up the timeout
    }, []);
    const delet = async (e) => {
        axios.delete(`https://tawssilat-backend-liv.onrender.com/liv/${e}`)
            .then(res => {
                console.log(res.data);

            })
    }
    const myrest = rest.map(e => {
        return <div key={e._id}
            className='flex h-36 w-11/12 mx-auto my-5 items-center border-b border-green-600 p-4'
        >
            <img src="https://i.ibb.co/wY3Lxq0/images.jpg"
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
            {myrest}
        </div>
    )
}

export default Liv