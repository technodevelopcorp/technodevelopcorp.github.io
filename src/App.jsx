import { Home, Contact, About, News, Post, NotFound } from "./routes";
import { Navigation, Footer } from "./components";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Navigation />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/news/posts/:id",
        element: <Post />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <div className="container">
        <RouterProvider router={router} />
        <Footer />
      </div>
    </>
  );
}

export default App;
