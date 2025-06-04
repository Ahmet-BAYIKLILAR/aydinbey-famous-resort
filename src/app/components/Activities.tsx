'use client';
import React from 'react';
import TurkishActivities from './activities/TurkishActivities';
import EnglishActivities from './activities/EnglishActivities';
import GermanActivities from './activities/GermanActivities';
import RussianActivities from './activities/RussianActivities';

interface ActivitiesProps {
  language: string;
}

const Activities: React.FC<ActivitiesProps> = ({ language }) => {
  switch (language) {
    case 'en':
      return <EnglishActivities />;
    case 'de':
      return <GermanActivities />;
    case 'ru':
      return <RussianActivities />;
    case 'tr':
    default:
      return <TurkishActivities />;
  }
};

export default Activities;