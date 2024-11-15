import { model, Schema } from "mongoose";

export interface Post {
  id: string;
  title: string;
  text: string;
  imageURL: string;
  username: string;
};

export const posts: Post[] = [
  {
    id: "1",
    title: "Sample Post 1",
    text: "This is a sample post for User1.",
    imageURL: "https://via.placeholder.com/150",
    username: "User1",
  },
  {
    id: "2",
    title: "Sample Post 2",
    text: "This is another sample post for User2.",
    imageURL: "https://via.placeholder.com/150",
    username: "User2",
  },
];

export const PostSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  imageURL: { type: String, required: false },
  username: { type: String, required: true },
});

export const PostModel = model("Post", PostSchema);
