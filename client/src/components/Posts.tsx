import React from "react";
import PostCard from "../components/PostCard";

function Posts({ posts }: { posts?: Array<any> }) {
    return (
        <>
            <h1>Publicaciones</h1>
            {posts ? (
                posts?.map((post, index) => {
                    return <PostCard key={index} post={post} />;
                })
            ) : (
                <h1>No hay publicaciones</h1>
            )}
        </>
    );
}

export default Posts;
