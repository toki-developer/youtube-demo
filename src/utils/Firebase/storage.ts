import { storage } from "./config";

export const uploader = (ref: string, file: File) => {
  storage.ref().child(ref).put(file);
};

export const downloader = (ref: string, file: File) => {
  storage.ref().child(ref).getDownloadURL();
};
