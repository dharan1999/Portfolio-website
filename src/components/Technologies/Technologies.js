import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
     <SectionText>
      I've worked with a range a technologies in the web development world. From Front-end to Creating custom-made Machine Learning web Apps
      </SectionText> 
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>
            Front-End
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js and Bootstrap
          </ListParagraph>
        </ListContainer>
        
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>
            Back-End
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and Databases
          </ListParagraph>
        </ListContainer>
        
      </ListItem>

      <ListItem>
        <DiZend size="3rem"/>
        <ListContainer>
          <ListTitle>
            Distributed Systems
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            Databricks and Apache Spark
          </ListParagraph>
        </ListContainer>
        
      </ListItem>
    </List>
     <SectionDivider />
  </Section>
);

export default Technologies;
