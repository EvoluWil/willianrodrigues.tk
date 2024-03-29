import { Container, Typography, Grid, Box } from "@mui/material/";
import { Typewriter } from "../../ui/typewriter/typewriter.component";
import { Title } from "../../ui/title/title.component";
import { SoftSkills } from "../../ui/soft-skills/soft-skills.component";
import { translate } from "../../../utils/translate.util";
import { CloudIcons } from "../../ui/cloud-icons/cloud-icons.dynamic";

export const About = () => {
  return (
    <>
      <Box
        sx={{
          py: 4,
          bgcolor: (theme) => theme.palette.background.paper,
        }}
      >
        <Container>
          <Grid
            container
            spacing={2}
            sx={{
              minHeight: {
                xs: "100%",
                md: "95vh",
              },
              py: 4,
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              component="section"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Title
                  title={translate("home.aboutData.hardSkills.title")}
                  subtitle={
                    <Typography variant="body2" component="span">
                      {translate("home.aboutData.hardSkills.description")}
                    </Typography>
                  }
                />
                <Box sx={{ display: { md: "flex", xs: "none" } }}>
                  <Typewriter
                    words={translate("home.aboutData.hardSkills.Typewriter")}
                  />
                </Box>
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
              <CloudIcons />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container>
          <Grid
            container
            spacing={2}
            display="flex"
            justifyContent="center"
            flexDirection={{
              xs: "column-reverse",
              md: "row",
            }}
            sx={{
              minHeight: {
                xs: "60vh",
                md: "95vh",
              },
              py: 4,
            }}
          >
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
              <SoftSkills
                skills={translate("home.aboutData.softSkills.skills")}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              component="section"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Title
                title={translate("home.aboutData.softSkills.title")}
                subtitle={
                  <>
                    <Typography variant="body2" component="span">
                      {translate("home.aboutData.softSkills.description1")}
                    </Typography>
                    <br />
                    <Typography variant="body2" component="span">
                      {translate("home.aboutData.softSkills.description2")}
                    </Typography>
                  </>
                }
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
