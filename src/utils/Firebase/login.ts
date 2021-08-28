import { fireAuth } from "./config";

export type FireLoginType = {
  email: string;
  password: string;
};

export const login = ({ email, password }: FireLoginType) => {
  fireAuth.signInWithEmailAndPassword(email, password);
};
