"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);
  async function handleFormSubmit(e) {
    e.preventDefault();
    setLoginInProgress(true);
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });
    setLoginInProgress(false);
  }
  return (
    <section className="mt-8">
      <h1 className="mb-4 text-4xl text-center text-primary">Login</h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          disabled={loginInProgress}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          disabled={loginInProgress}
        />
        <button type="submit" disabled={loginInProgress}>
          Login
        </button>
        <div className="my-4 text-center text-gray-500">OR</div>
        <button
          type="button"
          className="flex justify-center gap-4"
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          <Image
            src={"/google.png"}
            alt={"Google Logo"}
            height={24}
            width={24}
          />
          Login with Google
        </button>
        <div className="pt-4 my-4 text-center text-gray-500 border-t">
          No account yet?{"  "}
          <Link href={"/register"} className="underline">
            Register here &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
