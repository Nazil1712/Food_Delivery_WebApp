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
import BodyShimm2 from "./src/components/Body";
import Help from "./src/Routes/Help";
import Cart from "./src/Routes/Cart";
import Search from "./src/Routes/Search";
import OfferRoute from "./src/Routes/OfferRoute";
import ImgLayoutShimm3 from "./src/components/ImgLayout";
import OffersShimm3 from "./src/components/Offfers";
import RestaurantMenu from "./src/components/RestaurantMenu";
import User from "./src/components/Helpers/User";
import HelpClass from "./src/components/HelpClass";
import CollectionPage2 from "./src/components/OffersRestaurant";
import CollectionPageShimmer from "./src/components/Shimmers/OffersResShimmer";
import ResMenuShimmer from "./src/components/Shimmers/ResMenuShimmer";
import ErrorElement from "./src/components/Helpers/ErrorElement";
import BodyShimmer from "./src/components/Shimmers/BodyShimmer";
import ImgLayoutShimmer from "./src/components/Shimmers/ImgLayoutShimmer";
import UserContext from "./src/utils/UserContext";
// import Grocery from "./src/components/Grocery";

// Lazy Loading
const Grocery = lazy(() => import("./src/components/Helpers/Grocery"));

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
