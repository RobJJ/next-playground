import Image from "next/image";

export const metadata = {
  title: "Photos Page",
};

export default async function PhotosPage() {
  // neat way of fetching data straight from the source
  // const photosArray = await fetch("https://jsonplaceholder.typicode.com/photos")
  //   .then((res) => res.json())
  //   .then((res) => res.slice(0, 10));

  // const API_KEY = "YOUR_API_KEY";
  // const perPage = 10;
  const url = `https://api.unsplash.com/photos/random?count=${10}&client_id=${
    process.env.PHOTO_ACCESS_KEY
  }`;
  const photosArray = await fetch(`${url}`).then((res) => res.json());

  return (
    <div className="w-full h-full flex flex-col gap-2 p-2 text-center overflow-auto">
      <div className="underline w-full bg-blue-200">Photos displayed here</div>
      <div className="w-full h-full bg-pink-200 flex flex-wrap justify-center items-between">
        {photosArray.map((photo) => {
          return (
            <Image
              key={photo.id}
              src={photo.urls.small}
              width={200}
              height={200}
              alt={photo.description}
            />
          );
        })}
      </div>
    </div>
  );
}
