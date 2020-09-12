import React from "react";
import { useParams } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import Post from "./Post";

function BlogPost({ posts }: { posts?: Array<any> }) {
    let { slug } = useParams();
    let selectedBlogPost = posts?.filter((post) => {
        return post.slug === slug;
    });

    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={12} md={12} lg={8} xl={8}>
                    {selectedBlogPost ? (
                        selectedBlogPost?.map((post, i) => (
                            <Post key={i} post={post} />
                        ))
                    ) : (
                        <Typography variant="h2" align="center">
                            No hay nada aún
                        </Typography>
                    )}
                </Grid>
                <Grid item xs={12} md={12} lg={4} xl={4}>
                    <Typography variant="h3" align="center">
                        Artículos relacionados
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}

export default BlogPost;
