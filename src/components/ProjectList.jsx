import { Container, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { useCollection } from '../hooks/useCollection';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
  const { documents: projects, error, isPending } = useCollection('projects');
  if (isPending) return <p>Waiting</p>;

  return (
    <Container maxWidth={'container.xl'}>
      {error && <p>{error}</p>}
      <Grid
        templateColumns='repeat(3, 1fr)'
        gap={6}>
        {!isPending &&
          projects?.map((project) => (
            <GridItem
              key={project.id}
              w='100%'>
              <ProjectCard project={project} />
            </GridItem>
          ))}
      </Grid>
    </Container>
  );
};

export default ProjectList;
