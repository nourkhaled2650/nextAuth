import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-b  from-slate-400 via-sky-700 to-slate-800">
      {children}
    </div>
  );
};

export default AuthLayout;
