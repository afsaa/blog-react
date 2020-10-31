import React from "react";
import { Box, Container, Typography, CardMedia } from "@material-ui/core";
import moment from "moment";
import "moment/locale/es-mx";

function Post({ post }: { post?: any }) {
    moment.locale("es-mx");
    let creationDateSp = moment(post?.created_at).fromNow();
    let updatedDateSp = moment(post?.updated_at).fromNow();

    return (
        <>
            <Box my={4}>
                <Container maxWidth="md">
                    <Typography variant="h2" align="center" gutterBottom={true}>
                        {post?.title}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom={true}>
                        Creado: {creationDateSp} | Actualizado: {updatedDateSp}
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
