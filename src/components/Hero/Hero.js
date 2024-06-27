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
         Hi <GiHand />, 
           I'M <br />
          DHARAN THAKER 
      </SectionTitle>
      <SectionText>
      I am a Fullstack Developer, and apart from building beautiful web apps I love music <FaMusic /> , volleyball <GiVolleyballBall/> and trading <BsGraphUp/> .
      </SectionText>

      <Button onClick= { () => window.location = 'https://drive.google.com/file/d/1DL9Nq93UaDue3G5dPUIx2Go8G5VXXU-I/view?usp=sharing'}>
        My Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
