import HeaderLarge from "./components/Header/Large/Index";
import Navbar from "./components/Navbar/Index";
import Header from "./components/Header/Index";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Responsive } from "./helper/Responsive/Responsive";

/* pages */

/* Men */
import NewArrivalsTop from "./Pages/Products/Men/Tops/NewArrivals/NewArrivalsTop";
import NewArrivalsMenTopMobile from "./Pages/Products/Men/Tops/NewArrivals/NewArrivalsTopMobile";
import NewArrivalsBottoms from "./Pages/Products/Men/Bottoms/NewArrivals/NewArrivalsBottoms";
import CollectionMobileTop from "./Pages/Products/Men/Tops/Collections/CollectionMobileTop";
import CollectionsTop from "./Pages/Products/Men/Tops/Collections/CollectionsTop";
import CollectionBottoms from "./Pages/Products/Men/Bottoms/Collections/CollectionBottoms";
import BestSellerTop from "./Pages/Products/Men/Tops/Bestsellers/BestSellerTop";
import BestSellerMobileTop from "./Pages/Products/Men/Tops/Bestsellers/BestSellerMobileTop";
import BestSellerBottoms from "./Pages/Products/Men/Bottoms/Bestsellers/BestSellersBottoms";

/* Women */
import NewArrivalsWomanTop from "./Pages/Products/Women/Tops/NewArrivals/NewArrivalsWomanTop";
import NewArrivalsWomanBottoms from "./Pages/Products/Women/Bottoms/NewArrivals/NewArrivalsWomanBottoms";
import NewArrivalsMobileWomanTop from "./Pages/Products/Women/Tops/NewArrivals/NewArrivalsMobileWomanTop";
import BestSellerMobileWomanTop from "./Pages/Products/Women/Tops/Bestsellers/BestSellerMobileWomanTop";
import CollectionMobileWomantop from "./Pages/Products/Women/Tops/Collections/CollectionMobileWomanTop";
import CollectionWomanTop from "./Pages/Products/Women/Tops/Collections/CollectionWomanTop";
import CollectionWomanBottoms from "./Pages/Products/Women/Bottoms/Collections/CollectionWomanBottoms";
import BestSellerWomantop from "./Pages/Products/Women/Tops/Bestsellers/BestSellerWomanTop";
import BestSellerWomanBottoms from "./Pages/Products/Women/Bottoms/Bestsellers/BestSellerWomanBottoms";

/* NewArrivals - Men */

export const NewArrivalsMenTop = (
  <Route path='/new/men/tops'>
    <HeaderLarge /> <Navbar />
    <NewArrivalsTop />
  </Route>
);

export const NewArrivalsMenBottoms = (
  <Route path='/new/men/bottoms'>
    <HeaderLarge /> <Navbar />
    <NewArrivalsBottoms />
  </Route>
);

export const NewArrivalsMenMobile = (
  <Route path='/newarrivals/men'>
    <Responsive displayIn={["Mobile", "Tablet"]}>
      <Header />
      <NewArrivalsMenTopMobile />
    </Responsive>
  </Route>
);

// New Arrivals - Women

export const NewArrivalsWomenBottom = (
  <Route path='/new/women/bottoms'>
    <Responsive displayIn={["Laptop"]}>
      <HeaderLarge />
      <Navbar />
      <NewArrivalsWomanBottoms />
    </Responsive>
  </Route>
);

export const NewArrivalsWomenTop = (
  <Route path='/new/women/tops'>
    <Responsive displayIn={["Laptop"]}>
      <HeaderLarge />
      <Navbar />
      <NewArrivalsWomanTop />
    </Responsive>
  </Route>
);

export const NewArrivalsWomenMobile = (
  <Route path='/newarrivals/women'>
    <Responsive displayIn={["Mobile", "Tablet"]}>
      <Header />
      <NewArrivalsMobileWomanTop />
    </Responsive>
  </Route>
);

// Collection - Men

export const CollectionMenTop = (
  <Route path='/collections/men/tops'>
    <Responsive displayIn={["Laptop"]}>
      <HeaderLarge /> <Navbar />
      <CollectionsTop />
    </Responsive>
  </Route>
);

export const CollectionMenBottom = (
  <Route path='/collections/men/bottoms'>
    <Responsive displayIn={["Laptop"]}>
      <HeaderLarge />
      <Navbar />
      <CollectionBottoms />
    </Responsive>
  </Route>
);

export const CollectionsMenMobile = (
  <Route path='/collections/men'>
    <Responsive displayIn={["Mobile", "Tablet"]}>
      <Header />
      <CollectionMobileTop />
    </Responsive>
  </Route>
);

// Collection - Woman

export const CollectionsWomanTops = (
  <Route path='/collections/women/tops'>
    <Responsive displayIn={["Laptop"]}>
      <HeaderLarge /> <Navbar />
      <CollectionWomanTop />
    </Responsive>
  </Route>
);

export const CollectionsWomanBottoms = (
  <Route path='/collections/women/bottoms'>
    <Responsive displayIn={["Laptop"]}>
      <HeaderLarge /> <Navbar />
      <CollectionWomanBottoms />
    </Responsive>
  </Route>
);

export const CollectionWomanMobile = (
  <Route path='/collections/women'>
    <Responsive displayIn={["Mobile", "Tablet"]}>
      <Header />
      <CollectionMobileWomantop />
    </Responsive>
  </Route>
);

/* BestSellers - Men */

export const BestSellersMenTops = (
  <Route path='/bestsellers/men/tops'>
    <Responsive displayIn={["Laptop"]}>
      <HeaderLarge /> <Navbar />
      <BestSellerTop />
    </Responsive>
  </Route>
);

export const BestSellersMenBottoms = (
  <Route path='/bestsellers/men/bottoms'>
    <Responsive displayIn={["Laptop"]}>
      <HeaderLarge /> <Navbar />
      <BestSellerBottoms />
    </Responsive>
  </Route>
);

export const BestSellersMenMobile = (
  <Route path='/bestsellers/men'>
    <Responsive displayIn={["Mobile", "Tablet"]}>
      <Header />
      <BestSellerMobileTop />
    </Responsive>
  </Route>
);

// bestsellers - women
export const BestSellersWomenTops = (
  <Route path='/bestsellers/women/tops'>
    <Responsive displayIn={["Laptop"]}>
      <HeaderLarge /> <Navbar />
      <BestSellerWomantop />
    </Responsive>
  </Route>
);

export const BestSellersWomanBottoms = (
  <Route path='/bestsellers/women/bottoms'>
    <Responsive displayIn={["Laptop"]}>
      <HeaderLarge /> <Navbar />
      <BestSellerWomanBottoms />
    </Responsive>
  </Route>
);

export const BestSellersWomanMobile = (
  <Route path='/bestsellers/women'>
    <Responsive displayIn={["Mobile", "Tablet"]}>
      <Header />
      <BestSellerMobileWomanTop />
    </Responsive>
  </Route>
);

export const Home = (
  <Route path='/'>
    <Responsive displayIn={["Laptop"]}>
      <>
        {" "}
        <HeaderLarge /> <Navbar />{" "}
      </>
    </Responsive>

    <Responsive displayIn={["Mobile"]}>
      <>
        <Header />
      </>
    </Responsive>

    <Responsive displayIn={["Tablet"]}>
      <>
        <Header />
      </>
    </Responsive>
  </Route>
);
