import "./App.css";
import Layout from "./layout/Layout";
import Header from "./layout/Header";
import { MyUserProvider } from "../client/context/UserContext";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import ErrorBoundary from "./base/ErrorBoundary";

function App() {
  return (
    <>
      <MyUserProvider>
        <Layout>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <ErrorBoundary>
                  <Home />
                </ErrorBoundary>
              }
            />
            {/*<Route path="/reviews" element={}/> */}
            {/*<Route path="/sales" element={}/> */}
          </Routes>
        </Layout>
      </MyUserProvider>
    </>
  );
}

export default App;
