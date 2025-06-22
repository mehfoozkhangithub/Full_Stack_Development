import './App.css';
import UserCard from './Components/Card';

function App() {
  return (
    <>
      {/* Case 1: All props provided */}
      <UserCard name="Real Comando" email="real@example.com" role="Admin" />

      {/* Case 2: Missing email */}
      <UserCard name="Riya Sharma" role="Editor" />

      {/* Case 3: No props at all (uses all defaults) */}
      <UserCard />
    </>
  );
}

export default App;
