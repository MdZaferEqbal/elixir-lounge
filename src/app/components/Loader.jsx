import Image from "next/image";
import { loader } from "../utils";

const Loader = () => {
  return (
    <section
      id="el-loader"
      className="flex justify-center items-center top-0 overflow-hidden absolute w-[100vw] h-[100vh] backdrop-blur-3xl text-9xl font-extrabold uppercase text-yellow"
    >
      <Image src={loader} alt="Loading..." priority />
    </section>
  );
};

export default Loader;
