import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold  text-red-500">Hello world!</h1>
      </div>
      <div>
        <p className="text-emerald-700 text-4xl text-lef">JavaScript</p>
        <p className="text-red-600 text-2xl text-center">React</p>
        <p className="text-blue-500 text-xl text-right">Next</p>
      </div>
      <div className="bg-red-200 w-1/2 h-32">React JS for Frontend</div>
      <div className="bg-yellow-100 opacity-10 text-black m-4 p-8">Node</div>
      <div className="bg-blue-300 opacity-25s">Express</div>

      {/* <div className="bg-[url('https://freshmilk.ch/wp-content/uploads/2024/03/documents-other2-min-scaled-1-2048x1434.jpg')] bg-no-repeat bg-cover bg-center h-screen"></div> */}

      <div className="bg-gradient-to-r from-cyan-500 via blue-500 to bg-yellow-200 p-8 min-h-6 min-w-10">
        We are doing tailwindcss background effect
      </div>
    </>
  );
}

export default App;
