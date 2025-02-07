import axios from "axios";
import { useEffect, useState } from "react";

const ApiComponent = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get("https://server-kohl-nu.vercel.app/").then((res) => {
      setData(res.data);
    });
  }, []);
  if (!data) {
    <>Loading....</>;
  }
  return (
    <div>This is the response what you got from api:{JSON.stringify(data)}</div>
  );
};
export default ApiComponent;
