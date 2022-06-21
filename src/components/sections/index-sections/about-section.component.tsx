import { Container, Typography, Grid, Box } from '@mui/material/';
import { SkillsIcons } from '../../ui/skills-icons/skill-icons.component';
import { Typewriter } from '../../ui/typewriter/typewriter.component';
import { Title } from '../../ui/title/title.component';
import { SoftSkills } from '../../ui/soft-skills/soft-skills.component';
import { translate } from '../../../utils/translate.util';

export const About = () => {
  return (
    <>
      <Box
        sx={{
          py: 4,
          bgcolor: theme => theme.palette.grey[900]
        }}
      >
        <Container>
          <Grid
            container
            spacing={2}
            sx={{
              minHeight: {
                xs: '100%',
                md: '95vh'
              },
              py: 4,
              bgcolor: theme => theme.palette.grey[900]
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              component="section"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <Title
                  title={translate('home.aboutData.hardSkills.title')}
                  subtitle={
                    <Typography variant="h6" component="span">
                      {translate('home.aboutData.hardSkills.description')}
                    </Typography>
                  }
                />
                <Box sx={{ display: { md: 'flex', xs: 'none' } }}>
                  <Typewriter
                    words={
                      translate(
                        'home.aboutData.hardSkills.Typewriter'
                      ) as unknown as string[]
                    }
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
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
            >
              <SkillsIcons />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          bgcolor: theme => theme.palette.background.default
        }}
      >
        <Container>
          <Grid
            container
            spacing={2}
            display="flex"
            justifyContent="center"
            flexDirection={{
              xs: 'column-reverse',
              md: 'row'
            }}
            sx={{
              minHeight: {
                xs: '60vh',
                md: '95vh'
              },
              py: 4
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              component="section"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
            >
              <SoftSkills
                skills={
                  translate(
                    'home.aboutData.softSkills.skills'
                  ) as unknown as string[]
                }
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              component="section"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Title
                title={translate('home.aboutData.softSkills.title')}
                subtitle={
                  <>
                    <Typography variant="h6" component="span">
                      {translate('home.aboutData.softSkills.description1')}
                    </Typography>
                    <br />
                    <Typography variant="h6" component="span">
                      {translate('home.aboutData.softSkills.description2')}
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
