import { Container, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { useCollection } from '../hooks/useCollection';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
  const { documents: projects, error, isPending } = useCollection('projects');
  console.log(projects);
  if (isPending) return <p>Waiting</p>;

  return (
    <Container maxWidth={'container.4xl'}>
      {error && <p>{error}</p>}
      <Grid
        templateColumns='repeat(3, 1fr)'
        gap={6}>
        {projects?.map((project) => (
          <GridItem key={project.id}>
            <ProjectCard />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectList;
