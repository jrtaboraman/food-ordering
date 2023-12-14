"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";
import Image from "next/image";

const ProfilePage = () => {
  const session = useSession();
  const { status } = session;
  console.log(session);

  if (status === "loading") {
    return "Loading...";
  }
  if (status === "unauthenticated") {
    return redirect("/login");
  }
  const userImage = session.data.user.image;

  return (
    <section className="mt-8">
      <h1 className="mb-4 text-4xl text-center text-primary">Profile</h1>
      <form className="max-w-md mx-auto">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center p-2 bg-gray-100">
            <Image
              src={userImage}
              width={80}
              height={80}
              alt={"profile picture"}
              className="rounded-lg"
            ></Image>
            <button type="button">Change Profile Picture</button>
          </div>
          <div className="grow">
            <input type="text" placeholder="first and last name" />
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ProfilePage;
