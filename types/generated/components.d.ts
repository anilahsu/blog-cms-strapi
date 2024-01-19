import type { Schema, Attribute } from '@strapi/strapi';

export interface CaseStudyAppealPoint extends Schema.Component {
  collectionName: 'components_appeal_appeal_points';
  info: {
    displayName: 'AppealPoint';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    Description: Attribute.RichText;
  };
}

export interface CaseStudyInterview extends Schema.Component {
  collectionName: 'components_case_study_q_and_as';
  info: {
    displayName: 'interview';
    description: '';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.RichText;
  };
}

export interface CaseStudyInterviewee extends Schema.Component {
  collectionName: 'components_case_study_interviews';
  info: {
    displayName: 'interviewee';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    position: Attribute.String;
    picture: Attribute.Media;
    career: Attribute.Text;
    questions: Attribute.Component<'case-study.interview', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'case-study.appeal-point': CaseStudyAppealPoint;
      'case-study.interview': CaseStudyInterview;
      'case-study.interviewee': CaseStudyInterviewee;
    }
  }
}
