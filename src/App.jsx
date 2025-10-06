import { useState } from "react";
import Register from "./pages/Register/Register";
import Plans from "./pages/Plans/Plans";

function App() {
  const [step, setStep] = useState("register");

  return (
    <>
      {step === "register" && <Register onContinue={() => setStep("plans")} />}
      {step === "plans" && <Plans />}
    </>
  );
}

export default App;