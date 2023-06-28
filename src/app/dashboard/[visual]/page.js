// a dynamic page for loading the right component
// This component can be used to fetch data and then pass it down to the components....
// if they mount that will get updated data and render correctly??
// or should they just read the searchParams data themselves?
// currently this is server component which is dope... can load the two client components in suspense

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

// this visual page will render everytime the param changes and it will then fetch that data...
// the navbar will control the url changes mostly and it will cause the component to rerender

// if you can get the map working with data and the shading etc, test here and see how it reloads
