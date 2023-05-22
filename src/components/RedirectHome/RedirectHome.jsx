import { useEffect } from "react";

const RedirectHome = () => {
  useEffect(() => {
    window.location.href = "/";
  });

  return <h1>Redirecting...</h1>;
};

export default RedirectHome;
