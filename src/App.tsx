const App = () => {
  return (
    <div>
      {/* TODO understand why text-lg does this not work tw config may be bad*/}
      <h1 className="font-bold text-blue-500 text-lg">Hello</h1>
      <img src="/logo.png" alt="logo" />
    </div>
  );
};

export default App;
