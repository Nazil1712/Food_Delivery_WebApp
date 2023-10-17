import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Normal
import Header from "./components/Header";
import ImgLayout from "./components/ImgLayout";
import Body from "./components/Body";
import ErrorElement from "./components/ErrorElement";

// Shimmers
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
import CollectionPage from "./components/CollectionPage";
import CollectionPage2 from "./components/CollectionPage2";

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
        element: <CollectionPage2/>
      },
    ],
    errorElement: <ErrorElement />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
