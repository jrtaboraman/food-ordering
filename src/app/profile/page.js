"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";

const ProfilePage = () => {
  const session = useSession();
  const [userName, setUserName] = useState("");
  const { status } = session;
  const [saved, setSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  console.log(session);

  useEffect(() => {
    if (status === "authenticated") {
      setUserName(session.data.user.name);
    }
  }, [session, status]);

  if (status === "loading") {
    return "Loading...";
  }
  if (status === "unauthenticated") {
    return redirect("/login");
  }
  const userImage = session.data.user.image;
  async function handleProfileInfoUpdate(e) {
    e.preventDefault();
    setIsSaving(true);
    const response = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: userName }),
    });
    setIsSaving(false);
    if (response) {
      setSaved(true);
    }
  }
  async function handleFileChange(e) {
    const files = e.target.files;
    if (files?.length === 1) {
      const data = new FormData();
      data.set("file", files[0]);
      await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
    }
  }

  return (
    <section className="mt-8">
      <h1 className="mb-4 text-4xl text-center text-primary">Profile</h1>

      <div className="max-w-md mx-auto">
        {saved && (
          <h2 className="p-4 text-center bg-green-100 border border-green-500 rounded-lg">
            Profile saved!
          </h2>
        )}
        {isSaving && (
          <h2 className="p-4 text-center bg-blue-100 border border-blue-500 rounded-lg">
            Saving...
          </h2>
        )}

        <div className="flex items-center gap-4">
          <div>
            <div className="relative p-2 rounded-lg">
              <Image
                src={userImage}
                width={96}
                height={96}
                alt={"profile picture"}
                className="w-full h-full mb-1 rounded-lg"
              ></Image>
            </div>
            <label>
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
              <span className="block p-2 text-center border border-gray-300 rounded-lg cursor-pointer">
                Edit
              </span>
            </label>
          </div>
          <form className="grow" onSubmit={handleProfileInfoUpdate}>
            <input
              type="text"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              placeholder="first and last name"
            />
            <input
              type="email"
              disabled={true}
              value={session.data.user.email}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
