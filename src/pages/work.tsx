import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useState } from "react";
import { Title } from "../components/ui/title/title.component";
import { WorkCard } from "../components/ui/work-card/work-card.component";
import { WorksIcons } from "../components/ui/works-icons/works-icons.component";
import { Work } from "../data/models/work.model";
import { translate } from "../utils/translate.util";

const WorkPage = () => {
  const [selectedWork, setSelectedWork] = useState(translate("work.works")[0]);
  return (
    <>
      <Head>
        <title>{translate("work.titleHead")} | Willian Rodrigues</title>
      </Head>
      <Box my={4}>
        <Container>
          <Grid container spacing={2} mb={4}>
            <Grid
              item
              xs={12}
              md={6}
              component="section"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div>
                <Title
                  title={translate("work.title")}
                  subtitle={
                    <Typography variant="h6" component="span">
                      {translate("work.subtitle")}
                    </Typography>
                  }
                />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              component="section"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <WorksIcons />
            </Grid>
          </Grid>
          <Grid
            container
            borderRadius={4}
            p={4}
            sx={{
              bgcolor: (theme) => theme.palette.background.paper,
            }}
          >
            <Grid item xs={12} md={6} component="section">
              <List
                sx={{
                  display: "flex",
                  height: "100%",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                {translate("work.works").map((work: Work) => (
                  <ListItem
                    key={work.id}
                    selected={work.id === selectedWork.id}
                    disablePadding
                  >
                    <Button
                      variant="outlined"
                      fullWidth
                      size="large"
                      onClick={() => setSelectedWork(work)}
                    >
                      {work.name}
                    </Button>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              component="section"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <WorkCard
                work={selectedWork}
                responsibilitiesLabel={translate("work.responsibilities")}
                technologiesLabel={translate("work.technologies")}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default WorkPage;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24 * 7, // 7 dias
  };
};
