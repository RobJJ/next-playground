import Image from "next/image";
import Spinner from "../components/Spinner-normal-size.svg";

const loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <Image priority src={Spinner} alt="loading spinner" />
    </div>
  );
};

export default loading;
