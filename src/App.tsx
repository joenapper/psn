import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Page from "./components/Page";
import config from "./config";
import Home from "./pages/Home";

function App() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setData(config);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <Loader />;

  return (
    <Page hasError={error}>
      <Home data={data} />
    </Page>
  );
}

export default App;
