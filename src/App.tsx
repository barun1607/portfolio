import Layout from "./components/Layout";
import Spinner from './components/Miscellaneous/Spinner';
import React, { useState, useEffect } from "react";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    setIsLoading(false);
    // }, 1000)
  }, [])

  return (
    <React.Fragment>
      {isLoading ? <Spinner /> : <Layout />}
    </React.Fragment>
  );
}

export default App;
