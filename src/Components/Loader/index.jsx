import seal from "../../assets/seal.png";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <img
        src={seal}
        alt="Rotating"
        className="w-40 h-40 animate-spin duration-700"
      />
    </div>
  );
};

export default Loader;
