import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostDetailPageProps {
  post: any
}

export default function PostDetailPage({ post }: PostDetailPageProps) {
  const router = useRouter();
  if(router.isFallback) {
    return <div style={{ fontSize: '2rem', textAlign: 'center'}}>...Loading</div>
  }
  if(!post) return null;
  return (
    <div>
      <h1>Post Detail Page</h1>
      <p>{post.title}</p>
      <p>{post.author}</p>
      <p>{post.description}</p>
    </div>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const respone = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const data = await respone.json()

  return {
    paths: data.data.map((x:any) => ({ params: { postId: x.id }})),
    fallback: true,
  }
}
export const getStaticProps: GetStaticProps<PostDetailPageProps> = async (context: GetStaticPropsContext) => {
  const postId = context.params?.postId
  if(!postId) return { notFound: true }
  const respone = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`)
  const data = await respone.json()
  console.log('\nGET STATIC PROPS', context.params?.postId)
  return {
    props: {
      post: data,
    },
    revalidate: 5,
  }
}