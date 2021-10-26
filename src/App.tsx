import { useState } from "react";
import { StyledCard } from "./components/Card/style";
import { StyledProjects } from "./components/Projects/style"
import "./App.css";
import { PrimaryButton } from "./components/Button/style";

const data = [
  { title: "One" },
  { title: "Two" },
  { title: "Three" },
  { title: "Four" },
  { title: "Five" },
];

function App() {
  return (
    <>
    <StyledProjects projects={data} />
    <PrimaryButton />
    </>
  );
}

export default App;
