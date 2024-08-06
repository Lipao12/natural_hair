export const ErrorRoute = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center w-auto p-4 bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          Página Não Encontrada
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          A página que você está procurando não foi encontrada.
        </p>
        <a
          href="/"
          className="bg-[#242933] text-white hover:bg-[#424755] px-4 py-2 rounded-lg transition duration-300"
        >
          Voltar para a Página Inicial
        </a>
      </div>
    </div>
  );
};
