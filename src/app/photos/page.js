import Image from "next/image";

export const metadata = {
  title: "Photos Page",
};

//
// NOT USING
// issue on vercel side with loading in the env var saying not auth
//  { errors: [ 'OAuth error: The access token is invalid' ] }
// TypeError: photosArray.map is not a function
//     at PhotosPage (/vercel/path0/.next/server/app/photos/page.js:425:39)
//     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
export default async function PhotosPage() {
  // neat way of fetching data straight from the source
  // const photosArray = await fetch("https://jsonplaceholder.typicode.com/photos")
  //   .then((res) => res.json())
  //   .then((res) => res.slice(0, 10));

  // const API_KEY = "YOUR_API_KEY";
  // const perPage = 10;
  // const url = `https://api.unsplash.com/photos/random?count=${10}&client_id=${
  //   process.env.PHOTO_ACCESS_KEY
  // }`;
  // const data = await fetch(`${url}`);
  // const photosArray = await data.json();

  // console.log(photosArray);

  return (
    <div className="w-full h-full flex flex-col gap-2 p-2 text-center overflow-auto">
      <div className="underline w-full bg-blue-200">Photos displayed here</div>
      <div className="w-full h-full bg-pink-200 flex flex-wrap justify-center items-between">
        photos -
      </div>
    </div>
  );
}

// {
//   photosArray.map((photo) => {
//     return (
//       <Image
//         key={photo.id}
//         src={photo.urls.small}
//         width={200}
//         height={200}
//         alt={photo.description}
//       />
//     );
//   });
// }
