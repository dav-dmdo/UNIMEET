import { useState, useEffect } from "react";
import { db } from "./data/firebase/index.js";
import "./App.css";

import { collection, doc, addDoc, getDocs } from "firebase/firestore";

function App() {
  return <h1>Hello world</h1>;
}

export default App;
