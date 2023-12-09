import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

/* 
// Normal
import ImgLayout from "./src/components/ImgLayout";
import Body from "./src/components/Body";
*/

// Shimmers
import Header from "./src/components/Header";
import BodyShimm2 from "./src/components/BodyShimm2";
import Help from "./src/components/Help";
import Cart from "./src/components/Cart";
import Search from "./src/components/Search";
import ImgLayoutShimm3 from "./src/components/ImgLayoutShimm3";
import OffersShimm3 from "./src/components/OfffersShimm3";
import OfferRoute from "./src/components/offerRoute";
import RestaurantMenu from "./src/components/RestaurantMenu";
import User from "./src/components/User";
import HelpClass from "./src/components/HelpClass";
import CollectionPage2 from "./src/components/CollectionPage2";
import CollectionPageShimmer from "./src/components/Shimmers/CollectionPageShimmer";
import ResMenuShimmer from "./src/components/Shimmers/ResMenuShimmer";
import ErrorElement from "./src/components/ErrorElement";
import BodyShimmer from "./src/components/Shimmers/BodyShimmer";
import ImgLayoutShimmer from "./src/components/ImgLayoutShimmer";
import UserContext from "./src/utils/UserContext";
// import Grocery from "./src/components/Grocery";

// Lazy Loading
const Grocery = lazy(() => import("./src/components/Grocery"));

const AppLayout = () => {
  // ------ How to Pass new Context --------

  //Assume Authentication code

  const [userName, setUserName] = useState();

  useEffect(() => {
    // Assume Make an API call and fetching userName
    const data = {
      name: "Nazil Dhalwala",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUserName: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
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
      {
        path: "/shimmer",
        element: <ImgLayoutShimmer />,
      },
    ],
    errorElement: <ErrorElement />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
