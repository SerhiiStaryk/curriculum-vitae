import { CircularProgress } from '@mui/material';

import db from '../db.json';
import { Additional } from './components/Additional';
import { Education } from './components/Education';
import { NotableProjects } from './components/NotableProjects';
import { PageTitle } from './components/PageTitle';
import { Socials } from './components/Socials';
import { TechnicalSkills } from './components/TechnicalSkills';
import { PageWrapper } from './components/ui/PageWrapper';
import { WorkExperience } from './components/WorkExperience';
import { useDataResource } from './hooks/useDataResource';

function App() {
  const getData = async () => db.cv;

  const data = useDataResource({ getData });

  return data ? (
    <PageWrapper>
      <PageTitle {...data.mainInfo} />
      <TechnicalSkills {...data.technicalSkills} />
      <WorkExperience {...data.workExperience} />
      <NotableProjects {...data.notableProjects} />
      <Education {...data.education} />
      <Additional {...data.additional} />
      <Socials
        {...data.socials}
        list={data.socials.list
          .filter(
            (item): item is { title: string; url: string } =>
              typeof item.url === 'string',
          )
          .map((item) => ({
            title: item.title,
            url: item.url,
          }))}
      />
    </PageWrapper>
  ) : (
    <CircularProgress />
  );
}

export default App;
