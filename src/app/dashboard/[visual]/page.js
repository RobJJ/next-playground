// a dynamic page for loading the right component
export default function VisualPage({ params, searchParams }) {
  console.log("searchParams:", searchParams);

  return (
    <div className="flex w-full h-full">
      {params.visual === "scatter" && (
        <div>
          Im scatter, the params is:{params.visual}, and the searchParams is:
          {searchParams.year}, the view is: {searchParams.view}
        </div>
      )}
      {params.visual === "map" && (
        <div>
          Im map, the params is:{params.visual}, and the year is:
          {searchParams.year}, the view is: {searchParams.view}
        </div>
      )}
    </div>
  );
}
