import { StudentCard } from "./components/StudentCard";

function App() {
  return (
    <>
      <StudentCard name={"Eduardo"} age={18} country={"Brasil"} />
      <StudentCard name={"john"} age={28} country={"Britania "} />
      <StudentCard name={"Yuta"} age={38} country={"Japao"} />
    </>
  );
}

export default App;
