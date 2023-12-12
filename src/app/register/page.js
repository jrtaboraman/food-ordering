"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userCreated, setUserCreated] = useState(false);
  const [creatingUser, setCreatingUser] = useState(false);
  const [error, setError] = useState(false);
  async function handleFormSubmit(e) {
    e.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-type": "application/json" },
    });
    if (response.ok) {
      setUserCreated(true);
    } else {
      setError(true);
    }

    setCreatingUser(false);
  }
  return (
    <section className="mt-8">
      <h1 className="mb-4 text-4xl text-center text-primary">Register</h1>
      {userCreated && (
        <div className="my-4 text-center">
          User created. You can now log in{"  "}
          <Link href={"/login"} className="underline">
            Login &raquo;
          </Link>
        </div>
      )}
      {error && (
        <div className="my-4 text-center">
          Error. <br /> Please try again.
        </div>
      )}
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={creatingUser}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={creatingUser}
        />
        <button type="submit" disabled={creatingUser}>
          Register
        </button>
        <div className="my-4 text-center text-gray-500">OR</div>
        <button
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
          Already have an account?{"  "}
          <Link href={"/login"} className="underline">
            Login here &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
};

export default RegisterPage;
