import React from 'react';
import Carousel from './Carousel'; // You can create a Carousel component separately
import ParagraphContainer from './ParagraphContainer'; // Create this component separately
import AboutUs from './AboutUs'; // Create this component separately
import Costs from './Costs'; // Create this component separately
import Coaching from './Coaching'; // Create this component separately
import WeeklyMeetup from './WeeklyMeetup'; // Create this component separately
import SignUp from './SignUp'; // Create this component separately

function Main() {
  return (
    <main>
      <Carousel />
      <ParagraphContainer />
      <AboutUs />
      <Costs />
      <Coaching />
      <WeeklyMeetup />
      <SignUp />
    </main>
  );
}

export default Main;
