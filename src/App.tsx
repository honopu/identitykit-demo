import { useCallback } from "react";
import { useIdentityKit, useAgent } from "@nfid/identitykit/react";
import { NFIDW, Plug, InternetIdentity } from "@nfid/identitykit";

function App() {
  const { connect, user, disconnect } = useIdentityKit();

  const handleConnect = useCallback(async () => {
    await connect(NFIDW.id);
  }, [connect]);

  return (
    <div className="App">
      <p>User Principal: </p>
      <p>{user?.principal.toString() ?? "--"}</p>

      <button onClick={handleConnect}>connect to nfid</button>
    </div>
  );
}

export default App;
