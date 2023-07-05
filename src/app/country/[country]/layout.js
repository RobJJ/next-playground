import MapLateNight from "@/app/components/MapLateNight";

const CountryLayout = ({ children, params }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="w-full bg-slate-400 p-1 text-2xl font-bold text-center underline">
        can I read country name??? : {params.country} AND PROVINCE? :{" "}
        {params.province}
      </h1>

      <div className="h-full w-full bg-yellow-300 ">{children}</div>
    </div>
  );
};

export default CountryLayout;

// this server component does not rerender when the params province changes.. it doesnt know its there when it renders,, so it doesnt rerender
