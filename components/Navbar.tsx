import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    <Link href="/">Gestión financiera</Link>
                </div>
                <div className="space-x-4 relative">
                    <Link
                        href="/inicio"
                        className="text-gray-300 hover:text-white transition duration-300"
                    >
                        Inicio
                    </Link>
                    <Link
                        href="/SituacionFinanciera"
                        className="text-gray-300 hover:text-white transition duration-300"
                    >
                        Situación financiera
                    </Link>

                    <Link
                        href="/CrearMovimiento"
                        className="text-gray-300 hover:text-white transition duration-300"
                    >
                        Crear nuevo movimiento
                    </Link>
                    <Link
                        href="/Reportes"
                        className="text-gray-300 hover:text-white transition duration-300"
                    >
                        Reportes
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
