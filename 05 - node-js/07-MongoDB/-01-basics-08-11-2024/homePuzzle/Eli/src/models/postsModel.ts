
  
  export interface Post {
    id: string;
    title: string;
    description: string;
    img: string;
    creatorId:string;
    creatorName:string;
    userMade?: boolean;
  }
  
  
  
  export const posts: Post[] = [];
  
  