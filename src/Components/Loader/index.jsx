const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen absolute">
      <img
        src="/src/assets/seal.png"
        alt="Rotating"
        className="w-40 h-40 animate-spin duration-700"
      />
    </div>
  );
};

export default Loader;
