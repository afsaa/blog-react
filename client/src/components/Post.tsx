import React from "react";
import { Container, Typography } from "@material-ui/core";

function Post({ post }: { post?: any }) {
    return (
        <>
            <Container>
                <Typography variant="h2" align="center">
                    {post?.title}
                </Typography>
                <img
                    src={post.image_url}
                    alt="Imagen publicación"
                    width="100%"
                    height="300px"
                    style={{ imageRendering: "-webkit-optimize-contrast" }}
                />
                <Typography variant="subtitle1" color="textSecondary">
                    {post?.short_text}
                </Typography>
                <Typography variant="body2">{post?.long_text}</Typography>
            </Container>
        </>
    );
}

export default Post;
