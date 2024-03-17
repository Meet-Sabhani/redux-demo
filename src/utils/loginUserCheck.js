import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useLoginUserCheck = () => {
  const navigate = useNavigate();
  const { currentUserData } = useSelector((s) => s.currentUser);

  useEffect(() => {
    if (currentUserData !== null && currentUserData !== "") {
      navigate("/home");
    }
  }, [currentUserData, navigate]);
};

export default useLoginUserCheck;
