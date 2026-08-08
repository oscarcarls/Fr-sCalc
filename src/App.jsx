import { useState } from "react";
import "./App.css";

function App() {
const [project, setProject] = useState("");
const [customer, setCustomer] = useState("");
const [date, setDate] = useState("");
const [length, setLength] = useState("");
const [width, setWidth] = useState("");
const [depth, setDepth] = useState("");
const [truckSize, setTruckSize] = useState("34");
const [distance, setDistance] = useState("");
const area = Number(length || 0) * Number(width || 0);
const volume = area * (Number(depth || 0) / 1000);
const tons = volume * 2.4;
const trucksNeeded = Math.ceil(tons / Number(truckSize || 18));
const transportWork = tons * Number(distance || 0);
return (
<div className="container">
<div className="card">
<h1>🚜 FräsCal</h1>
<p className="subtitle">
Calculate milling area, volume and tonnage
</p>

<label>Project Name</label>
<input
type="text"
value={project}
onChange={(e) => setProject(e.target.value)}
/>

<label>Customer</label>
<input
type="text"
value={customer}
onChange={(e) => setCustomer(e.target.value)}
/>

<label>Date</label>
<input
type="date"
value={date}
onChange={(e) => setDate(e.target.value)}
/>

<label>Length (m)</label>
<input
type="number"
value={length}
onChange={(e) => setLength(e.target.value)}
/>

<label>Width (m)</label>
<input
type="number"
value={width}
onChange={(e) => setWidth(e.target.value)}
/>

<label>Depth (mm)</label>
<input
type="number"
value={depth}
onChange={(e) => setDepth(e.target.value)}
/>
<label>Transport Distance (km)</label>
<input
type="number"
value={distance}
onChange={(e) => setDistance(e.target.value)}
/>
<button
className="save-btn"
onClick={() => alert("Project saved!")}
>
💾 Save Project
</button>

<div className="results">
<h2>Results</h2>
<p>Area: {area.toFixed(2)} m²</p>
<p>Volume: {volume.toFixed(2)} m³</p>
<p>Weight: {tons.toFixed(2)} tons</p>
<p>Trucks needed: {trucksNeeded}</p>
<p>Transport Work: {transportWork.toFixed(0)} ton-km</p>
</div>
</div>
</div>
);
}

export default App;
