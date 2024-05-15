"use server";
import { getUsers } from "@/actions/users";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { HoverEffect } from "@/components/ui/card-hover-effect";

const page = async () => {
  const users = await getUsers();
  return (
    <section className="">
      <HoverEffect items={users} />
    </section>
  );
};

export default page;
