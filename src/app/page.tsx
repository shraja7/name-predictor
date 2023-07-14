"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { text } from "stream/consumers";
export default function Home() {
  const [inputVal, setInputVal] = useState("");

  const { push } = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`);
  };

  return (
    <div>
      <div>
        <h1>Enter Your Name</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="text-black"
        />
        <button type="submit">Predict</button>
      </form>
    </div>
  );
}
