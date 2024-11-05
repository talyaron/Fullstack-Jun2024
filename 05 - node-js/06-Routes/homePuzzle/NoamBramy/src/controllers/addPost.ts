
import { Post } from "../model/posts/posts";

export function addPost({ id, title, text, image }: Post): Post {
  return { id, title, text, image };
}