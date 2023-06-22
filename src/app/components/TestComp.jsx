import Link from "next/link";

export default function TestComp() {
  return (
    <div className="bg-white p-2 rounded">
      <Link href>GO</Link>
    </div>
  );
}

// also a 'client' comp
// this component could read the state from button change... does mean if they share state it will be rerendered everytime.. but for now..

// it takes that current state and
