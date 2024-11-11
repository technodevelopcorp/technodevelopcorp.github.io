import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Home from "./routes/Home/Home";
import Contact from "./routes/Contact/Contact";
import About from "./routes/About/About";
import News from "./routes/News/News";
import Post from "./routes/Post/Post";
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
