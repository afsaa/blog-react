import React from "react";
import { Box, Container, Typography, CardMedia } from "@material-ui/core";

function Post({ post }: { post?: any }) {
    return (
        <>
            <Box my={4}>
                <Container maxWidth="md">
                    <Typography variant="h2" align="center">
                        {post?.title}
                    </Typography>
                    <Typography
                        variant="h6"
                        color="textPrimary"
                        align="justify"
                        gutterBottom={true}
                    >
                        {post?.short_text}
                    </Typography>
                    <CardMedia
                        className="post__image"
                        component="img"
                        alt="Post Image"
                        height="500px"
                        image={post?.image_url}
                        title={post?.title}
                    />
                    <Typography
                        variant="body1"
                        align="justify"
                        paragraph={true}
                        gutterBottom={true}
                    >
                        {post?.long_text}
                    </Typography>
                </Container>
            </Box>
        </>
    );
}

export default Post;
