import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { GiHand,GiHandBandage,GiVolleyballBall } from 'react-icons/gi';

import { BsGraphUp } from 'react-icons/bs';
import { FaMusic} from 'react-icons/fa';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
          Welcome TO <br />
          My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Hi <GiHand />, My name is Dharan Thaker. I am a Software Developer, and apart from building beautiful web apps I love music <FaMusic /> , volleyball <GiVolleyballBall/> and trading <BsGraphUp/> .
      </SectionText>

      <Button onClick= { () => window.location = 'https://drive.google.com/file/d/1bqACClMx9A7ilp4B3ijoOOHiJcHkb688/view?usp=sharing'}>
        My Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;