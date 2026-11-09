function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center justify-center p-6">
      <header className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-indigo-600 mb-4">
          Studja
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Encontre o curso superior ideal para o seu futuro com uma orientação
          inteligente e personalizada.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg shadow transition-colors">
          Começar Orientação
        </button>
      </header>
    </div>
  );
}

export default App;
