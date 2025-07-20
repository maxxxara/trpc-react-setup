import { trpc } from "./trpc";
import "./App.css";

function App() {
  // The `greeting` procedure is fully typed!
  const { data, isLoading, error } = trpc.greeting.useQuery({
    name: "Developer",
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <h1>tRPC + React Monorepo</h1>
      <div className="card">
        <p>{data}</p>
      </div>
    </>
  );
}

export default App;
