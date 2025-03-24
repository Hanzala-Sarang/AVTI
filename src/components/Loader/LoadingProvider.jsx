"use client"; // Ensures this runs only on the client

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loader from "./Loader";

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true); // Ensures loading happens on first render
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true); // Start loading when the route changes
    const timeout = setTimeout(() => setLoading(false), 500); // Adjust timeout as needed

    return () => clearTimeout(timeout);
  }, [pathname]);

  return loading ? <Loader /> : children;
};

export default LoadingProvider;
