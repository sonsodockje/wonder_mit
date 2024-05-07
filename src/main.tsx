import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import RootLayout from "./pages/RootLayout";
import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";
import UploadPage from "./pages/UploadPage";
import MyPage from "./pages/MyPage";
import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <p>분명히 에러가 떳슈.</p>,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: "auth",
        element: <AuthPage />,
      },
      {
        path: "upload",
        element: <UploadPage />,
      },
      {
        path: "mypage",
        element: <MyPage />,
      },
      {
        path: "detail/:id",
        element: <DetailPage />,
      },
      {
        path: "search/:keyword",
        element: <SearchPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
