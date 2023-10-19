import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

/* 
// Normal
import ImgLayout from "./components/ImgLayout";
import Body from "./components/Body";
*/

// Shimmers
import Header from "./components/Header";
import BodyShimm2 from "./components/BodyShimm2";
import Help from "./components/Help";
import Cart from "./components/Cart";
import Search from "./components/Search";
import ImgLayoutShimm3 from "./components/ImgLayoutShimm3";
import OffersShimm3 from "./components/OfffersShimm3";
import OfferRoute from "./components/offerRoute";
import RestaurantMenu from "./components/RestaurantMenu";
import User from "./components/User";
import HelpClass from "./components/HelpClass";
import CollectionPage2 from "./components/CollectionPage2";
import CollectionPageShimmer from "./components/Shimmers/CollectionPageShimmer";
import ResMenuShimmer from "./components/Shimmers/ResMenuShimmer";
import ErrorElement from "./components/ErrorElement";
import BodyShimmer from "./components/Shimmers/BodyShimmer";
// import Grocery from "./components/Grocery";

// Lazy Loading
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />

      {/* <OffersShimm3/>
      <ImgLayoutShimm3/>
      <BodyShimm2/> */}

      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <OffersShimm3 />
            <ImgLayoutShimm3 />
            <BodyShimm2 />
          </>
        ),
      },
      {
        path: "/home",
        element: (
          <>
            <OffersShimm3 />
            <ImgLayoutShimm3 />
            <BodyShimm2 />
          </>
        ),
      },
      {
        path: "/offer",
        element: <OfferRoute />,
      },
      {
        path: "/help",
        // element: <Help />,
        element: <HelpClass />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/collection/:resId",
        element: <CollectionPage2 />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading..........</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorElement />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
