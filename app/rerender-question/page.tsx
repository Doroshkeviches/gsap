'use client'
import Parent from "@/app/rerender-question/components/Parent";
import Child from "@/app/rerender-question/components/Child";

export default function App() {
  return (
    <Parent Child={<Child/>}/>
  );
}

