import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchLoginStatus = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: "Abu Raihan",
            password: "password123",
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch login status");
        }

        const data = await response.json();
        setUserInfo(data);
      } catch (error) {
        console.error("Error fetching login status:", error);
      }
    };

    fetchLoginStatus();
  }, []);

  console.log(userInfo?.status);

  return (
    <div className="container">
      <div className="card">
        <h4>User Name : {userInfo?.username}</h4>
        <h4>User Status : {userInfo?.status ? "True" : "False"}</h4>
      </div>
    </div>
  );
}

export default App;
