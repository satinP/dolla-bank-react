import React from 'react';
import { HeroContainer, HeroBackground, VideoBackground } from './styles';
import Video from '../../videos/videos.mp4';

function HeroSection() {
  return (
    <HeroContainer>
      <HeroBackground>
        <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBackground>
    </HeroContainer>
  );
}

export default HeroSection;
