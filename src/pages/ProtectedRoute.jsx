import { useEffect } from "react";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) {
        navigate("/");
      }
    },
    [isAuthenticated, navigate]
  );
  return isAuthenticated ? children : <Spinner />;
}
