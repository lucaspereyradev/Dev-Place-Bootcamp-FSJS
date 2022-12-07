import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="sticky z-10 w-full px-4 py-4 lg:py-7 bg-indigo-600 text-white overflow-hidden">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <Link to="/" className="text-2xl font-bold leading-none flex items-center">
                            <span className="text-white font-medium uppercase">TuTienda</span>
                        </Link>
                    </div>
                    <div>
                        <ul className="hidden justify-end lg:flex lg:m-auto lg:items-center lg:space-x-6">
                            <li>
                                <Link to="/">Inicio</Link>
                            </li>
                            <li className="text-indigo-100"> | </li>
                            <li>
                                <Link to="/products">Productos</Link>
                            </li>
                            <li className="text-indigo-100"> | </li>
                            <li>
                                <Link to="/login">Iniciar sesión</Link>
                            </li>
                            <li className="text-indigo-100"> | </li>
                            <li>
                                <Link to="/register">Registrarse</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden w-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                        <Link to="/cart" className="text-xl">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </Link>
                    </div>
                    <div className="w-auto flex items-center lg:hidden">
                        <Link to="/cart" className="mr-4">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </Link>
                        <button>
                            <i className="fa-solid fa-bars"></i>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
