import { useState } from "react";
import Input from "./components/general/Input.jsx";
import SelectInput from "./components/general/SelectInput.jsx";
import Button from "./components/general/Button.jsx";
import SearchBar from "./components/general/SearchBar.jsx";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [selectVal, setSelectVal] = useState("Default");
  const [search, setSearch] = useState("");

  return (
    <div className="App" style={{ padding: "20px", background: "#0d0d1a", minHeight: "100vh", display: "flex", flexDirection: "column", gap: "20px" }}>
      <Input label="Username:" type="text" value={inputVal} setValue={setInputVal} />
      <SelectInput label="Sort:" options={["Default", "Latest", "Oldest", "Highest Rated", "Lowest Rated"]} value={selectVal} setValue={setSelectVal} />
      <Button onClick={() => alert("clicked!")} />
      <SearchBar title={search} setTitle={setSearch} icon={faMagnifyingGlass}/>
    </div>
  );
}

export default App;
