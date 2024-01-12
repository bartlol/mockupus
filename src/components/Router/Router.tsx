import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "../../pages/Root/Root";
import { ShopPage } from "../../pages/ShopPage";
import { MockupPage } from "../../pages/MockupPage/MockupPage";
import { TOPAL_MOCKUP } from "../../mockupData/topalMockup";
import { OKNA_MOCKUP } from "../../mockupData/oknaMockup";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "/topal",
      element: <MockupPage mockup={TOPAL_MOCKUP} />,
    },
    { path: "/okna", element: <MockupPage mockup={OKNA_MOCKUP} /> },
  ],
  { basename: "/mockupus/" }
);

export const Router = () => {
  return <RouterProvider router={router} />;
};
