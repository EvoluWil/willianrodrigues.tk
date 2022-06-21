import {
  Box,
  Container,
  Grid,
  List,
  ListItemButton,
  Typography
} from '@mui/material';
import Head from 'next/head';
import { useState } from 'react';
import { Title } from '../components/ui/title/title.component';
import { WorkCard } from '../components/ui/work-card/work-card.component';
import { WorksIcons } from '../components/ui/works-icons/works-icons.component';
import { Work } from '../data/constants/works.constants';
import { ListItem } from '../styles/work.styles';
import { translate } from '../utils/translate.util';

const WorkPage = () => {
  const [selectedWork, setSelectedWork] = useState(translate('work.works')[0]);
  return (
    <>
      <Head>
        <title>{translate('work.titleHead')} | Willian Rodrigues</title>
      </Head>
      <Box
        my={4}
        sx={{
          bgcolor: theme => theme.palette.background.default
        }}
      >
        <Container>
          <Grid container spacing={2} mb={4}>
            <Grid
              item
              xs={12}
              md={6}
              component="section"
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <div>
                <Title
                  title={translate('work.title')}
                  subtitle={
                    <Typography variant="h6" component="span">
                      {translate('work.subtitle')}
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
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap'
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
              bgcolor: theme => theme.palette.grey[900]
            }}
          >
            <Grid item xs={12} md={6} component="section" my="auto">
              <List>
                {translate('work.works').map((work: Work) => (
                  <ListItem
                    key={work.id}
                    selected={work.id === selectedWork.id}
                    onClick={() => setSelectedWork(work)}
                  >
                    <ListItemButton>
                      <Typography color="primary" mx="auto">
                        {work.name}
                      </Typography>
                    </ListItemButton>
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
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
            >
              <WorkCard work={selectedWork} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default WorkPage;
