import { useState } from "react";
import { globalStyles } from "./styles/GlobalStyles";
import LoginView from "./components/LoginView";
import SignupView from "./components/SignupView";

export default function App() {
  const [view, setView] = useState("login");

  return (
      <>
        <style>{globalStyles}</style>
        <div className="auth-shell">
          <div className="auth-card">
            <div className="auth-logo-area">
              <div className="auth-logo"><strong>A</strong>lma</div>
              <div className="auth-tagline">conexões que começam por dentro</div>
            </div>
            <div className="auth-body">
              {view === "login"
                  ? <LoginView onSwitch={() => setView("signup")} />
                  : <SignupView onSwitch={() => setView("login")} />
              }
            </div>
          </div>
        </div>
      </>
  );
}