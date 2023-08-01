import React from "react";

const AuthContext = React.createContext({
  isSubmitted: false,
  onLogout: () => {},
});
export default AuthContext;
