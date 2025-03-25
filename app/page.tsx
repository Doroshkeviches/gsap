import Link from "next/link";
import TextDemo from "./components/text-animations/TextDemo/TextDemo";
import TextScrollDemo from "./components/text-animations/TextScrollDemo/TextScrollDemo";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <Link href={'/text-animations'}>text-animations</Link>
      <Link href={'/flip-animations'}>flip-animations</Link>
      <Link href={'/opacity-animations'}>opacity-animations</Link>
      <Link href={'/kodix-examples'}>kodix-examples</Link>
      <Link href={'/draggable'}>draggable</Link>

      

    </div>
  );
}
