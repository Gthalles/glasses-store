import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AfterSales from "../pages/AfterSales";
import Contact from "../pages/Contact";
import ContactLenses from "../pages/ContactLenses";
import Eyeglasses from "../pages/Eyeglasses";
import Preferences from "../pages/Preferences";
import Sunglasses from "../pages/Sunglasses";
import Welcome from "../pages/Welcome";
import Main from "../pages/Main";
import Address from "../pages/Address";
import Payment from "../pages/Payment";

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

            <Route path="/contact" element={<Contact />} />

            <Route path="/address" element={<Address />} />

            <Route path="/payment" element={<Payment />} />

            <Route path="/completed-purchase" element={<AfterSales />} />
        </Routes>
    );
}

export default Router;
