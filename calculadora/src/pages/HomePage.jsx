function HomePage({ onNavigate }) {
    return (
        <div className="flex flex-col items-center gap-4 mt-20">
            <h1 className="text-3xl font-bold mb-6">Menu</h1>
            <button onClick={() => onNavigate('plus')} className="w-48 bg-blue-600 text-white rounded p-3 hover:bg-blue-700">
                Plus numbers
            </button>
            <button onClick={() => onNavigate('calculator')} className="w-48 bg-blue-600 text-white rounded p-3 hover:bg-blue-700">
                Calculator
            </button>
            <button onClick={() => onNavigate('searchpage')} className="w-48 bg-blue-600 text-white rounded p-3 hover:bg-blue-700">
                Search Page
            </button>
        </div>
    );
}

export default HomePage;
