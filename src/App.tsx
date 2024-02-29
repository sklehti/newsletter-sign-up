import React, { useEffect, useState } from "react";
import "./styles.css";
import Main from "./components/Main";
import SubcriptionSuccess from "./components/SubcriptionSuccess";

function App() {
  const [subscription, setSubscription] = useState(true);

  return (
    <div>
      {subscription ? (
        <Main setSubscription={setSubscription} />
      ) : (
        <SubcriptionSuccess setSubscription={setSubscription} />
      )}
    </div>
  );
}

export default App;
