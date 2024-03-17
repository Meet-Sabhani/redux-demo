import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useCheckLogin = () => {
  const navigate = useNavigate();
  const { currentUserData } = useSelector((s) => s.currentUser);

  useEffect(() => {
    if (currentUserData == null || currentUserData === "") {
      navigate("/");
    }
  }, [currentUserData, navigate]);
};

export default useCheckLogin;
