import { Client, Account, ID } from "react-native-appwrite";
const client = new Client()
  .setProject("677e7cfb0003c9c64aff")
  .setPlatform("auth.com");

const account = new Account(client);

type CreateUserAccount = {
  email: string;
  password: string;
  name: string;
};

type LoginUserAccount = {
  email: string;
  password: string;
};

export const CreateAccount = async ({
  email,
  password,
  name,
}: CreateUserAccount) => {
  try {
    const user = await account.create(ID.unique(), email, password, name);
    if (user) {
      return Login({ email, password });
    } else {
      return user;
    }
  } catch (error) {
    console.log(error);
  }
};

export const Login = async ({ email, password }: LoginUserAccount) => {
  try {
    const user = await account.createEmailPasswordSession(email, password);
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentUser = async () => {
  try {
    const user = await account.get();
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const Logout = async () => {
  try {
    return await account.deleteSession("current");
  } catch (error) {
    console.log(error);
  }
};
