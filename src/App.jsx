import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Reviews from "./pages/reviews/Reviews";
import Review from "./pages/review/Review";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import WriteReviews from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import WriteReview from "./pages/writeReview/WriteReview";
// import Add_discover from "./pages/"
// import WriteReviews from "./pages/writeReviews/WriteReviews";
import BusinessDetials from "./pages/businessDetials/BusinessDetials";
import Add_discover from "./pages/add/Add";
import WriteReviewss from "./pages/writeReviewss/WriteReviewss";
import WriteRev from "./pages/writeRev/WriteRev";
import Coffee from "./pages/coffee/Coffee";
import DigitalMarketing from "./pages/digitalMarketing/DigitalMarketing";
import Hotel from "./pages/hotel/Hotel";
import Gas from "./pages/gas/Gas";
import Resort from "./pages/resort/Resort";
import Business from "./pages/business/Business";
import BusinessService from "./pages/businessService/BusinessService"
import Restuarante from "./pages/restuarante/Restuarante";

// import DigitalMarketing from "./pages/digitalMarketing/DigitalMarketing
// all are import below pages 
//not import the page not use
function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",// first open 
          element: <Home />,
        },
        {
          path: "/reviews",
          element: <Reviews/>,
        },
        {
          path: "/businessDetials",
          element: <BusinessDetials />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/WriteReview/:id",
          element: <WriteReview />,
        },
        {
          path: "/add",
          element: <Add_discover/>,
        },
        {
          path: "/writeReviews",
          element: < WriteReviews/>,
        },
        {
          path: "/writeRev",
          element: < WriteRev/>,
        },
        {
          path: "/coffee",
          element: < Coffee/>,
        },
        {
          path: "/digitalMarketing",
          element: < DigitalMarketing/>,
        },
        {
          path: "/hotel",
          element: < Hotel/>,
        },
        {
          path: "/gas",
          element: < Gas/>,
        },
        {
          path: "/resort",
          element: <Resort/>,
        },
        {
          path: "/business",
          element: <Business/>,
        },
        {
          path: "/businessService",
          element: <BusinessService/>,
        },
        {
          path: "/review/:id",
          element: <Review />,
        },
        {
          path: "/restuarante",
          element: <Restuarante />,
        },
        // {
        //   path: "/digitalMarketing",
        //   element: <DigitalMarketing />,
        // },
        {
          path: "/writeReviewss",
          element: <WriteReviewss />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
