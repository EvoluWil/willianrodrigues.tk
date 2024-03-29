import Image from "next/image";
import { GetStaticProps } from "next";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ButtonGroup,
  Button,
  Backdrop,
  CircularProgress,
} from "@mui/material/";
import { shimmerUrlEffect } from "../utils/shimmer-url-effect.util";
import { StackIcon } from "../components/ui/stack-icons/stack-icons.component";
import { Title } from "../components/ui/title/title.component";
import { translate } from "../utils/translate.util";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { Project } from "../data/models/project.model";

const ProjectPage = () => {
  const { push } = useRouter();
  const [backdrop, setBackdrop] = useState(false);

  const handleNavigation = (path: string) => {
    setBackdrop(true);
    push(path);
  };

  return (
    <>
      <Head>
        <title>{translate("project.titleHead")} | Willian Rodrigues</title>
      </Head>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box component="section" id="portfolio" sx={{ pb: 8, pt: 10 }}>
        <Container>
          <Title
            sx={{ mb: 2 }}
            title={translate("project.title")}
            subtitle={translate("project.subtitle")}
          />
          <Grid container spacing={2} mb={4}>
            <Grid item ml={{ md: 0, xs: "auto" }}>
              <Button
                color="primary"
                href="https://github.com/EvoluWil?tab=repositories"
                size="large"
                variant="contained"
                target="_blank"
              >
                {translate("project.button1")}
              </Button>
            </Grid>
            <Grid item mr={{ md: 0, xs: "auto" }}>
              <Button
                color="primary"
                onClick={() => handleNavigation("/contact")}
                size="large"
                variant="outlined"
              >
                {translate("project.button2")}
              </Button>
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            {translate("project.projects").map((project: Project) => (
              <Grid key={project.id} item lg={12} sm={6} xs={12}>
                <Card
                  elevation={4}
                  sx={{
                    display: "flex",
                    height: "100%",
                    flexDirection: {
                      xs: "column",
                      lg: "row",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      flex: {
                        lg: "1 1 600px",
                      },
                    }}
                  >
                    <Box p={2}>
                      <Image
                        alt={project.name}
                        blurDataURL={shimmerUrlEffect(600, 370)}
                        height={370}
                        layout="responsive"
                        placeholder="blur"
                        src={project.src}
                        width={600}
                        style={{ borderRadius: 6 }}
                      />
                    </Box>

                    <Box
                      sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.7);",
                        opacity: 0,
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                    >
                      <ButtonGroup variant="contained">
                        <Button
                          aria-label="Link to project GitHub repository"
                          component="a"
                          href={project.repoUrl}
                          rel="noopener"
                          startIcon={<i className="fa fa-github" />}
                          target="_blank"
                        >
                          {translate("project.repository")}
                        </Button>
                        {!!project.projectUrl && (
                          <Button
                            aria-label="Link to project live preview"
                            component="a"
                            href={project.projectUrl}
                            rel="noopener"
                            startIcon={
                              <i
                                className={
                                  project.isApp
                                    ? "fa fa-android"
                                    : "fa fa-globe"
                                }
                              />
                            }
                            target="_blank"
                          >
                            {project.isApp
                              ? "Download"
                              : translate("project.page")}
                          </Button>
                        )}
                      </ButtonGroup>
                    </Box>
                  </Box>

                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                      width: {
                        lg: "80%",
                      },
                    }}
                  >
                    <div>
                      <Typography color="primary" variant="h5" component="span">
                        {project.name}
                      </Typography>

                      {!!project.projectUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Typography
                            color="primary"
                            variant="h5"
                            component="span"
                            mx={1}
                            sx={{ cursor: "pointer" }}
                          >
                            <i className="fa fa-github" />
                          </Typography>
                        </a>
                      )}

                      {!!project.projectUrl && (
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Typography
                            color="primary"
                            variant="h5"
                            component="span"
                            sx={{ cursor: "pointer" }}
                          >
                            <i
                              className={
                                project.isApp ? "fa fa-android" : "fa fa-globe"
                              }
                            />
                          </Typography>
                        </a>
                      )}
                      {!!project.credentials && (
                        <Typography
                          color="primary"
                          variant="caption"
                          component="p"
                        >
                          {project.credentials}
                        </Typography>
                      )}

                      <Typography
                        color="textSecondary"
                        component="p"
                        variant="subtitle1"
                      >
                        {project.description}
                      </Typography>

                      <List
                        dense
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          "& > *": {
                            flex: {
                              xs: "0 0 100%",
                              lg: "0 0 50%",
                            },
                          },
                        }}
                      >
                        {project.tasks.map((task) => (
                          <ListItem key={task}>
                            <ListItemIcon sx={{ minWidth: 34 }}>
                              <Typography color="primary">
                                <i className="fa fa-check" />
                              </Typography>
                            </ListItemIcon>
                            <ListItemText primary={task} />
                          </ListItem>
                        ))}
                      </List>
                    </div>

                    <Box
                      display="flex"
                      mx="auto"
                      gap={1}
                      sx={{ flexWrap: "wrap" }}
                    >
                      {project.stacks.map((stack) => (
                        <Typography
                          variant="h4"
                          component="span"
                          key={stack}
                          color="primary"
                        >
                          <StackIcon stack={stack} />
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ProjectPage;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24 * 7, // 7 dias
  };
};
