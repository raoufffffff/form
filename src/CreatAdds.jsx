import axios from "axios"
import { useState } from "react"
import { FaPhoneAlt } from "react-icons/fa"
import { RiLockPasswordLine } from "react-icons/ri"
import { useNavigate } from "react-router-dom"
const CreatAdds = () => {
    const navigate = useNavigate();

    const [rest, setrest] = useState({
        img: "",
        in: true,
        linkout: "",
        linkin: {
            name: "",
            id: "",
        }

    })


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
                setrest({ ...rest, img: data.data.url })
                // Handle the response, which contains the URL of the uploaded image
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    const post = async () => {
        await axios.post('https://tawssilat-api.onrender.com/adds', rest)
            .then(res => {
                if (res.data.good) {
                    navigate('/')
                }
            })
    }
    console.log(rest);

    return (
        <div
            className="w-full flex flex-col pb-20"
        >
            <h1
                className="w-fit mx-auto my-10 text-2xl font-bold"
            >
                complete the form
            </h1>

            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Remember me</span>
                    <input type="checkbox" defaultChecked className="checkbox"
                        onChange={() => setrest({ ...rest, in: !rest.in })}

                    />
                </label>
            </div>
            {rest.in ?
                <>
                    <select className="select select-bordered w-full max-w-xs"
                        onChange={(e) => setrest(
                            { ...rest, linkin: { name: e.target.value, id: rest.linkin.id } })
                        }
                    >

                        <option
                            value={"food"}
                        >food</option>
                        <option
                            value={"resturent"}
                        >resturent</option>
                    </select>
                    <label className="input input-bordered flex items-center gap-2">
                        <RiLockPasswordLine />
                        <input
                            type="text"
                            className="grow"
                            placeholder="password"
                            value={rest.linkin.id}
                            onChange={(e) => {
                                setrest({
                                    ...rest, linkin: {
                                        name: rest.linkin.name,
                                        id: e.target.value
                                    }
                                })
                            }}
                        />
                    </label>
                </> :
                <label className="input input-bordered flex items-center gap-2">
                    <FaPhoneAlt />
                    <input
                        type="tel"
                        placeholder="link"
                        className="grow"
                        value={rest.linkout}
                        onChange={(e) => {
                            setrest({ ...rest, linkout: e.target.value })
                        }}
                    />
                </label>
            }




            <div
                className="flex"
            >
                <div
                    className="mx-2 flex flex-col items-center"
                >
                    <h1
                        className="text-2xl my-2 text-center"
                    >adds image</h1>
                    <label htmlFor="file-upload"
                        className='w-6/12 mx-auto mt-5'>
                        <img src={rest.img ? rest.img : "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="}
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

            </div>

            <button
                onClick={() => post()}
                className="my-5 text-white bg-green-600 w-8/12 mx-auto py-1 rounded-xl"
            >post</button>
        </div >
    )
}

export default CreatAdds