import axios from "axios"
import { useState } from "react"
import { FaPhoneAlt, FaUser } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { RiLockPasswordLine } from "react-icons/ri"
import { useNavigate } from "react-router-dom"

const CreateRest = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [l, setl] = useState(false)

    const [rest, setrest] = useState({
        name: "",
        email: "",
        password: "",
        bg: "",
        logo: '',
        city: "baraki",
        phone: "",
        location: null
    })
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setrest({
                        ...rest, location: {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        }
                    })
                },
                (error) => {
                    setError(error.message);
                }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    };
    console.log(rest);
    let kolsh = (e) => {
        const apiKey = 'e798f49d36bcce0c31437b67b8806bca';
        const imageData = e.target.files[0]; // This could be the image file or a URL

        const formData = new FormData();
        formData.append('image', imageData);
        formData.append('key', apiKey);

        fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setrest({ ...rest, logo: data.data.url })
                // Handle the response, which contains the URL of the uploaded image
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    let kolshb = (e) => {
        const apiKey = 'e798f49d36bcce0c31437b67b8806bca';
        const imageData = e.target.files[0]; // This could be the image file or a URL

        const formData = new FormData();
        formData.append('image', imageData);
        formData.append('key', apiKey);

        fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setrest({ ...rest, bg: data.data.url })
                // Handle the response, which contains the URL of the uploaded image
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    const post = async () => {
        setl(true)
        await axios.post('https://tawssilat-api.onrender.com/restaurant', rest)
            .then(res => {
                if (res.data.good) {
                    navigate('/')
                    setl(false)
                }
            })
    }
    return (
        <div
            className="w-full flex flex-col pb-20"
        >
            <h1
                className="w-fit mx-auto my-10 text-2xl font-bold"
            >
                complete the form
            </h1>

            <label className="input input-bordered flex items-center gap-2">
                <MdEmail />
                <input
                    type="text"
                    className="grow"
                    placeholder="Email"
                    value={rest.email}
                    onChange={(e) => {
                        setrest({ ...rest, email: e.target.value })
                    }}

                />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                <FaUser />
                <input
                    type="text"
                    className="grow"
                    placeholder="restaurant Name"
                    value={rest.name}
                    onChange={(e) => {
                        setrest({ ...rest, name: e.target.value })
                    }}
                />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                <RiLockPasswordLine />
                <input
                    type="password"
                    className="grow"
                    placeholder="password"
                    value={rest.password}
                    onChange={(e) => {
                        setrest({ ...rest, password: e.target.value })
                    }}
                />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                <FaPhoneAlt />
                <input
                    type="tel"
                    placeholder="phone"
                    className="grow"
                    value={rest.phone}
                    onChange={(e) => {
                        setrest({ ...rest, phone: e.target.value })
                    }}
                />
            </label>
            {rest.location && <div className="flex justify-center my-5">
                <span
                    className="mx-5 text-green-600 font-bold"
                >{rest.location.latitude}</span>
                <span
                    className="mx-5 text-green-600 font-bold"
                >{rest.location.longitude}</span>
            </div>}
            {error && <p>Error: {error}</p>}
            <button
                className={`w-fit my-3 text-white px-5 py-2 ${rest.location ? "bg-green-600" : "bg-red-600"} mx-auto rounded-xl`}
                onClick={() => {
                    getLocation()
                }}
            >get location</button>
            <div
                className="flex"
            >
                <div
                    className="mx-2 flex flex-col items-center"
                >
                    <h1
                        className="text-2xl my-2 text-center"
                    >logo</h1>
                    <label htmlFor="file-upload"
                        className='w-6/12 mx-auto mt-5'>
                        <img src={rest.logo ? rest.logo : "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="}
                            className='w-full max-h-52'
                        />
                    </label>
                    <input
                        type="file"
                        name="myFile"
                        id='file-upload'
                        className='hidden'
                        accept='.jpeg, .png, .jpg'
                        onChange={(e) => kolsh(e)} />
                </div>
                <div
                    className="mx-2 flex flex-col items-center justify-center"
                >
                    <h1
                        className="text-2xl my-2 text-center"
                    >bg</h1>
                    <label htmlFor="file-uploadd"
                        className='w-6/12 mx-auto mt-5'>
                        <img src={rest.bg ? rest.bg : "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="}
                            className='w-full max-h-52'
                        />
                    </label>
                    <input
                        type="file"
                        name="myFile"
                        id='file-uploadd'
                        className='hidden'
                        accept='.jpeg, .png, .jpg'
                        onChange={(e) => kolshb(e)} />
                </div>
            </div>

            <button
                onClick={() => post()}
                className="my-5 text-white bg-green-600 w-8/12 mx-auto py-1 rounded-xl"
            >{l ? <div className="animate-spin h-5 w-5  border-2 border-l-4 border-[#fff] rounded-full mx-auto" >
            </div> : "post"}</button>
        </div>
    )
}

export default CreateRest