import Hello from "./components/hello";


export default function Home() {
  console.log('What am I? server or client')

  return (
    <div>
      <h1 className="text-4xl font-bold text-white">Hello World</h1>
      <Hello/>
    </div>
  );
}