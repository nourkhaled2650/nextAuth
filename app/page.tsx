import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" font-Robotooo text-center flex h-full  flex-col items-center justify-center bg-gradient-to-b  from-slate-400 via-sky-700 to-slate-800">
      <div className="space-y-6">
        <h1 className="text-6xl text-white  drop-shadow-md">Auth</h1>
        <p className="text-white text-lg">a single authentication service</p>
        <div>
          <LoginButton>
            <Button> Sign in</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
