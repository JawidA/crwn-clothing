import Home from "./routes/home/home-component";
import Navigation from "./routes/navigation/navigation-component";
import SignIn from "./routes/sign-in/sign-in-component";

import { Routes, Route, Outlet } from "react-router-dom";

const Shop = () => {
  return <h1>This is the shop page.</h1>;
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
