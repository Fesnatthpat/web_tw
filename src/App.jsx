// App.js
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "/", element: <Hero /> },
      { path: "Page1", element: <Page1 /> },
      { path: "Page2", element: <Page2 /> },
    ]
  },
]);

function App() {
  // const audioRef = useRef(null);

  // useEffect(() => {
  //   // เมื่อ component ถูกโหลดให้เพลงเริ่มเล่นอัตโนมัติ
  //   if (audioRef.current) {
  //     audioRef.current.play();
  //   }
  // }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
