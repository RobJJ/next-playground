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
