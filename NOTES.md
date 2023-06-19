# NOTES

### Head title information

This info is stored with:
export const metadata = {
title: "{input name here}",
};

### OLD FETCHING METHODS

Previous Next.js data fetching methods such as getServerSideProps, getStaticProps, and getInitialProps are not supported in the new App Router. However, you can still use them in the Pages Router.
https://nextjs.org/docs/app/building-your-application/data-fetching

### DYNAMIC ROUTES

When you have a dynamic route, the Component gets access to searchParams, and params...
Both are objects and get information from the route name and the search url params...
You can use this information in your component for fetching or displaying your data dynamically!

### ENV vars

Add them to the next.config.js file as a property under env {}

### Fetching Data

You can just fetch your data straight from inside a component because they are server components -- using the api route functionality allows other people to interact with your API for example! You should not be requesting your own API routes

### links

Use Next <Link> element to handle the internal naviagtion around the routes in your app.. useful for prefetching and handling snappy navigation.. use the normal <a> element to handle external navigation

### use reuable components

setup components for reusing across the different pages and layouts to apply styles in a common way and better for future development... refactor code as you go and just render the {children} in the reusable components!!

### alias paths

can help with organising imports and make it neater and easier to move in future

### images

keep your image assest in the public folder and they will be server as static files and the same can be done for other assets

### fonts

import the fonts using the next/font/google import and grab the font you want.. this way no requests will be sent to google from the client and it will be kept private and secure

- You can also add a custom font var with tailwind and then be easier to use in components...dont have to import anything but just have to set it up and then can be used everywhere... lecture @28

### reading files with node file system

Our components are server components by default now which means we can use the node environment to read files from the system which enables us to reads markdown files and display them on our page!
