import Conditional from "@/components/Conditional";
import React from "react";

export default function Home() {
  return (
    <main>
      <Conditional notOn="desktop">
        <h1>Estamos no mobile</h1>
      </Conditional>
    </main>
  );
}
