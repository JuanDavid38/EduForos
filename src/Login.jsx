function Login() {
    return (


        <div class="container">
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                    {/* left side */}
                    <div className="flex flex-col justify-center p-8 md:p-16">
                        <span className="mb-3 text-4xl font-bold">Inico de sesion</span>
                        <div className="py-4">
                            <span className="font-light text-blue-300 mb-8">
                                Te damos la bienvenida a EDUFOROS! inicia sesion para
                                <br />
                                disfrutar de nuestros servicios !BIENVENIDO!.
                            </span>
                        </div>
                        <form id="formLogin" action="post">
                            <span className="mb-2 text-md">Usuario</span>
                            <div className="py-4">
                                <input
                                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="usuario@gmail.com"
                                    required
                                />
                            </div>

                            <span className="mb-2 text-md">Contraseña</span>
                            <div className="py-4">
                                <input
                                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="************"
                                    required
                                />
                            </div>
                            <div className="flex justify-between w-full py-4">
                                <div className="mr-24">
                                    <a
                                        className="text-blue-800 hover:text-blue-400"
                                        href=""
                                    >
                                        Olvido su Contraseña?
                                    </a>
                                </div>
                            </div>

                            <button
                                className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
                                type="submit"
                                id="btn_iniciar_sesion"
                            >
                                Iniciar sesion
                            </button>
                            <span
                                className="mb-2 text-md"
                                id="info"
                                style={{ color: 'brown' }}
                            ></span>
                        </form>
                    </div>

                    <div className="relative">
                        <img
                            src="https://www.magisnet.com/wp-content/uploads/2020/07/Foros.jpg"
                            alt="img"
                            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
                        />
                        <div className="absolute hidden bottom-10 right-2 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"></div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Login;