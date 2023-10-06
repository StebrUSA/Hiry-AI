import { useEffect, useState } from "react";
import { getLoggedinUser } from "../../helpers/api_helper";

const useProfile = () => {
  const userProfileSession = getLoggedinUser();
  var token = sessionStorage.getItem("authToken");
  // userProfileSession &&
  // userProfileSession["token"];
  const [loading, setLoading] = useState(userProfileSession ? false : true);
  const [userProfile, setUserProfile] = useState(
    userProfileSession ? userProfileSession : null
  );

  useEffect(() => {
    const userProfileSession = getLoggedinUser();
    // var token = userProfileSession && userProfileSession["token"];
    var token = sessionStorage.getItem("authToken");
    setUserProfile(userProfileSession ? userProfileSession : null);
    setLoading(token ? false : true);
  }, []);

  return { userProfile, loading, token };
};

export { useProfile };
