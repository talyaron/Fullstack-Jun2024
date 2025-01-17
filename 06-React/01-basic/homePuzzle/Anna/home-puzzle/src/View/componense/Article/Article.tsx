import Title from "../Title/Title"
import PostInfo from "../PostInfo/PostInfo"
import ProfileImg from "../ProfileImg/ProfileImg"
import { ArticleProps } from "../../../App"
import { FC } from "react"
interface Props{
  article:ArticleProps
}


const Article:FC<Props> = ({article}) => {
  return (
    <div className='container'>
    <div className='header'>
      <ProfileImg  img={article.proImg}></ProfileImg>
      <Title  title={article.title} subTitle={article.subTitle} postTime={article.postTime}></Title>
    </div>
    <div className='body'>
      <PostInfo  text={article.post}
      img= {article.postImg} ></PostInfo>
    </div>
    </div> 
  )
}

export default Article