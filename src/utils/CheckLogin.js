import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useCheckLogin = () => {
  const navigate = useNavigate();
  const { currentUserData } = useSelector((s) => s.currentUser);
  console.log("currentUserData: ", currentUserData);

  useEffect(() => {
    if (currentUserData === "" || null) {
      navigate("/");
    }
  }, [currentUserData, navigate]);
};

export default useCheckLogin;
