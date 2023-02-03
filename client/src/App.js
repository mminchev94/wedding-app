import { useEffect } from "react";

import axios from "axios";
function App() {
  useEffect(() => {
    fetchGuests();
  }, []);

  const fetchGuests = async () => {
    const res = await axios.get("http://localhost:3000/guests");
    console.log(res);
  };

  return <div className="App">wedding app</div>;
}

export default App;
