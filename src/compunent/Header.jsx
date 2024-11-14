import { Link } from "react-router-dom"


const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-xl">
            <div className="flex-1">
                <Link
                    to={'/'}
                    className="btn btn-ghost text-xl">Tawssilat </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">

                    <li>
                        <details>
                            <summary>menu</summary>
                            <ul className="bg-base-100 rounded-t-none p-2 z-50 -translate-x-12">
                                <li>
                                    <Link

                                        to={'/create'}>create restaurants</Link>
                                </li>
                                <li>
                                    <Link

                                        to={'/createliv'}>create livror</Link>
                                </li>
                                <li>
                                    <Link

                                        to={'/createadds'}>create adds</Link>
                                </li>
                                <li>
                                    <Link
                                        to={'/'}
                                    >all  restaurants</Link>
                                </li>
                                <li>
                                    <Link
                                        to={'/liv'}

                                    >all  livror</Link>
                                </li>
                                <li>
                                    <Link
                                        to={'/adds'}

                                    >all  adds</Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header