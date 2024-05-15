"use server";
import prisma from "@/lib/db";

export const getUsers = async () => {
  try {
    const users = await prisma.users.findMany();
    return Promise.resolve(users);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getUser = async (id: number) => {
  try {
    const user = await prisma.users.findUnique({
      where: {
        id,
      },
    });
    return Promise.resolve(user);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createUser = async (data: any) => {
  try {
    const user = await prisma.users.create({
      data,
    });
    return Promise.resolve(user);
  } catch (error) {
    return Promise.reject(error);
  }
}
