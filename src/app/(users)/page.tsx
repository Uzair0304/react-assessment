import { Metadata } from "next";
import React from "react";
import UsersListing from "./_components/UsersListing";

export const metdata: Metadata = {
  title: "Random Users",
};

const page = async () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-3 text-center">Random Users</h1>
      <UsersListing />
    </div>
  );
};

export default page;
