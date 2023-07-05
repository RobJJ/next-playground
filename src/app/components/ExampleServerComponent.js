export default function ExampleServerComponent({ uniqueUserData }) {
  //   console.log("logging props in this exampleServerComp:", props);
  return (
    <div className="w-full bg-purple-200 flex justify-center">
      {JSON.stringify(uniqueUserData)}
    </div>
  );
}
