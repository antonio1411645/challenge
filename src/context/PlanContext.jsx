import { createContext, useContext, useState } from "react";

const PlanContext = createContext();

export const usePlan = () => useContext(PlanContext);

export const PlanProvider = ({ children }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userData, setUserData] = useState({}); // 👈 Aquí guardamos datos del usuario

  return (
    <PlanContext.Provider
      value={{
        selectedPlan,
        setSelectedPlan,
        selectedOption,
        setSelectedOption,
        userData,
        setUserData,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};
