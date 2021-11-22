import logo from './logo.svg';

const App = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-700 text-white">
      <img className="w-64" src={logo} alt="logo" />
      <h2>This commit contains:</h2>
      <div className="mt-2">
        <p>✍️ Typescript</p>
        <p>💅 Tailwind CSS</p>
        <p>🔎 ESlint </p>
        <p>📜 Prettier</p>
      </div>
    </div>
  );
};

export default App;
