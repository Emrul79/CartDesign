import React from "react";
import Sidebar from "../components/Sidebar";
import Allproducts from "./Allproducts";

export default function MainPage() {
  return (
    <main className="container mx-auto px-4 md:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Allproducts />

        <Sidebar />
      </div>
    </main>
  );
}
