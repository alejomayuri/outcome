export default function Header() {
    return (
        <header className="flex flex-col">
            <div className="flex justify-between items-center px-8 py-4 border-b border-gray-200 bg-black">
                <div className="px-8 flex justify-between items-center w-full max-w-7xl mx-auto">
                    <div className="flex items-center space-x-2">
                        <img src="/logo.png" alt="Logo" className="h-12" />
                    </div>
                    <nav className="hidden md:flex space-x-8 text-sm">
                        <a href="#" className="text-white hover:text-purple-600">Qué hacemos</a>
                        <a href="#" className="text-white hover:text-purple-600">Servicios</a>
                        <a href="#" className="text-white hover:text-purple-600">Nuestros Pilares</a>
                        <a href="#" className="text-white hover:text-purple-600">Quiénes Somos</a>
                    </nav>
                </div>
            </div>
            <div className="px-8 py-4 border-b border-gray-200 bg-white">
                <div className="w-full max-w-5xl flex justify-between items-center space-x-2 mx-auto">
                    <nav className="flex gap-8 md:space-x-8 text-sm">
                        <a href="#" className="text-black font-bold hover:text-purple-600">RECLUTAMIENTO</a>
                        <a href="#" className="text-black font-bold hover:text-purple-600">CONTACTO</a>
                    </nav>
                    <nav className="md:space-x-8 text-sm">
                        <a href="#" className="text-black font-bold hover:text-purple-600">ES-IN</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}