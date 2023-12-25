import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import HeadingHeader from "./HeadingHeader";
import FormItems from "./FormItems";
import PackageList from "./PackageList";
import Stats from "./Stats";
import Languages from "./Languages";
import Experience from "./Experience";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import FooterInfo from "./FooterInfo";

export default function App() {
  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleClearList() {
    setItems([]);
  }
  const cameraSettings = {
    fov: 10,
    near: 0.1,
    far: 200,
    position: [-8, 4, 16],
  };
  return (
    <div className="container">
      <header className="mt-5">
        <HeadingHeader />
        <Canvas
          style={{ width: "100px", height: "100px" }}
          camera={cameraSettings}
        >
          <Experience />
        </Canvas>
      </header>
      <FormItems onAddItems={handleAddItems} />
      <PackageList
        items={items}
        onToggleItem={handleToggleItems}
        onDeleteItem={handleDeleteItems}
        onClearList={handleClearList}
      />
      <div className="d-flex align-items-center gap-2 stats">
        <Stats items={items} />
        <Languages />
      </div>
      <FooterInfo />
    </div>
  );
}
