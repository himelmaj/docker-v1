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

const page = async () => {
  const users = await getUsers();
  return (
    <section className="">
      <ul className="grid grid-cols-4 gap-4">
        {users.map((user) => (
          <Card key={user.id}>
            <CardHeader>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>{user.username}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </ul>
    </section>
  );
};

export default page;
