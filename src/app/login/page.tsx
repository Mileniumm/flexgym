import Link from "next/link";

export default function Login()
{
    return (
        <main className="flex bg-neutral-950 w-full h-screen justify-between items-center">
            <div className={"flex flex-col justify-center h-full p-6 md:w-1/2 md:items-center"}>
                <div className={"flex flex-col items-center gap-2"}>
                    <h1 className="text-center text-5xl font-bold ">
                        Ingrese su cuenta
                    </h1>
                    <p className="text-gray-400">
                        "Controla tu rutina, domina tu progreso"
                    </p>
                </div>
                <button className={"border border-rose-500 flex items-center w-full py-2.5 justify-center gap-2 rounded-md my-8 md:w-2/3"}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.99 13.9V10.18H21.35C21.49 10.81 21.6 11.4 21.6 12.23C21.6 17.94 17.77 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C14.7 2 16.96 2.99 18.69 4.61L15.85 7.37C15.13 6.69 13.87 5.89 12 5.89C8.69 5.89 5.99 8.64 5.99 12.01C5.99 15.38 8.69 18.13 12 18.13C15.83 18.13 17.24 15.48 17.5 13.91H11.99V13.9Z"
                            fill="white"/>
                    </svg>
                    <span className="">
                          Ingrese con Google
                    </span>
                </button>

                <div className="flex flex-col items-center gap-4 my-4 w-full md:w-2/3">
                    <input type="text" placeholder="Nombre" className={"w-full py-2.5 px-2 bg-neutral-800 rounded-md"} />
                    <input type="password" placeholder="Contraseña" className={"w-full py-2.5 px-2 bg-neutral-800 rounded-md"} />

                </div>
                <div className="my-2 text-end w-full md:w-2/3">
                    <Link href="/" className={"text-gray-400"}>
                        ¿Haz olvidado tu contraseña?
                    </Link>
                </div>
                <button className={"border border-rose-500 flex items-center w-full py-2.5 justify-center gap-2 rounded-md text-white bg-gradient-to-r from-pink-600 to-orange-600 font-semibold md:w-2/3 my-2 "}>
                    Ingrese a su cuenta
                </button>
                <div className="mt-16 text-center text-gray-400">
                    <p>
                        ¿No tienes cuenta? <Link href="/register" className={"text-white underline mx-1"}> Regístrese aquí </Link>
                    </p>
                </div>
            </div>
            <div className="hidden md:flex w-1/2 h-full ">
                <img src={"/instagram.png"} className={"w-full h-full object-cover"}
                />
            </div>
        </main>
    )
}