import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "../../pages/Root/Root";
import { MockupPage } from "../../pages/MockupPage/MockupPage";
import { TOPAL_MOCKUP } from "../../mockupData/topalMockup";
import { OKNA_MOCKUP } from "../../mockupData/oknaMockup";
import { KARTONY_MOCKUP } from "../../mockupData/kartony24Mockup";
import { LUSTRA_MOCKUP } from "../../mockupData/lustraMockup";
import { ZASLONY_MOCKUP } from "../../mockupData/zaslonyMockup";

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
    { path: "/kartony", element: <MockupPage mockup={KARTONY_MOCKUP} /> },
    { path: "/lustra", element: <MockupPage mockup={LUSTRA_MOCKUP} /> },
    { path: "/zaslony", element: <MockupPage mockup={ZASLONY_MOCKUP} /> },
  ],
  { basename: "/mockupus/" }
);

export const Router = () => {
  return <RouterProvider router={router} />;
};
