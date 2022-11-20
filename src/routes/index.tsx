import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AfterSales from "../pages/AfterSales";
import ContactAddress from "../pages/ContactAddress";
import ContactLenses from "../pages/ContactLenses";
import Eyeglasses from "../pages/Eyeglasses";
import Preferences from "../pages/Preferences";
import Store from "../pages/Main";
import Sunglasses from "../pages/Sunglasses";
import Welcome from "../pages/Welcome";
import Main from "../pages/Main";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/welcome" />} />

            <Route path="/welcome" element={<Welcome />} />

            <Route path="/main" element={<Main />} />

            <Route path="/sunglasses" element={<Sunglasses />} />

            <Route path="/eyeglasses" element={<Eyeglasses />} />

            <Route path="/contact-lenses" element={<ContactLenses />} />

            <Route path="/preferences" element={<Preferences />} />

            <Route path="/contact-address" element={<ContactAddress />} />

            <Route path="/completed-purchase" element={<AfterSales />} />
        </Routes>
    );
}

export default Router;
