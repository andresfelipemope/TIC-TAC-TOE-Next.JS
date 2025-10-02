"use client";

import { useState } from "react";

export default function Home(){
  const [count, setCount] = useState(0);

  return(
    <main className="flex flex-col items-center justify-center h-screen bg-black-200">
      <h1 className="text-2xl font-bold mb-4">Mi primer contador en Next.js🐖</h1>
      <p className="text-xl mb-4">Contador: {count}</p>
      <button onClick={() => setCount(count + 1)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-900">
        Incrementar
      </button>
    </main>
  );
}