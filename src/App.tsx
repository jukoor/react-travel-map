import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Profile } from "./pages/Profile";
import { Home } from "./pages/Home";
import { PageLayout } from "./layout/PageLayout";
import { useEffect } from "react";
import "./styles/global/App.scss";
import { Country } from "./pages/Country";
import { fetchAllCountriesData } from "./services/apiCall";
import { useAppDispatch } from "./hooks/hooks";
import { Settings } from "./pages/Settings";
import { Logout } from "./pages/Logout";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllCountriesData());
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="profile/:userId" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="country/:countryCode" element={<Country />} />
            <Route path="logout" element={<Logout />} />
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
