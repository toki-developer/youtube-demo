import { fireAuth } from "./config";

// login
export type FireLoginType = {
  email: string;
  password: string;
};
export const login = ({ email, password }: FireLoginType) => {
  fireAuth.signInWithEmailAndPassword(email, password);
};

// signup
export type FireSignupType = {
  email: string;
  password: string;
};
export const signup = ({ email, password }: FireSignupType) => {
  fireAuth.createUserWithEmailAndPassword(email, password);
};

//signout
export const signout = () => {
  fireAuth.signOut();
};

// forgetPass
export const forgetPass = (email: string) => {
  fireAuth.sendPasswordResetEmail(email);
};
