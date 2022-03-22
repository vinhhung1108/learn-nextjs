import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import * as React from 'react';

export interface PostListPageProps {
  posts: any[]
}

export default function PostListPage({ posts }: PostListPageProps) {
  return (
    <div>
      <h1>Post List Page</h1>
      <ul>
        {posts.map( (post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        )  
        )}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (context: GetStaticPropsContext) => {
  
  const respone = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const data = await respone.json()
  //console.log(data)
  return {
    props: {
      posts: data.data.map((x: any) => ({id: x.id, title: x.title})),
    }
  }
}