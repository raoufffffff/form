import axios from "axios";
import { useState } from "react";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Createliv = () => {
    const navigate = useNavigate();
    const [l, setl] = useState(false)
    const [rest, setrest] = useState({
        name: "",
        email: "",
        password: "",
        city: "baraki",
        phone: "",
    })

    console.log(rest);


    const post = async () => {
        setl(true)
        await axios.post('https://tawssilat-backend-liv.onrender.com/liv', rest)
            .then(res => {
                if (res.data.good) {
                    setl(false)
                    navigate('/')
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
                    placeholder="livror Name"
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



            <button
                onClick={() => post()}
                className="my-5 text-white bg-green-600 w-8/12 mx-auto py-1 rounded-xl"
            >{l ? <div className="animate-spin h-5 w-5  border-2 border-l-4 border-[#fff] rounded-full mx-auto" >
            </div> : "post"}</button>
        </div>
    )
}

export default Createliv