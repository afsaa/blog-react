import React from "react";
import { Container, Typography, CardMedia } from "@material-ui/core";

function Post({ post }: { post?: any }) {
    return (
        <>
            <Container maxWidth="md">
                <Typography variant="h2" align="center">
                    {post?.title}
                </Typography>
                <CardMedia
                    component="img"
                    alt="Whatever"
                    height="300px"
                    image={post?.image_url}
                    title={post?.title}
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
