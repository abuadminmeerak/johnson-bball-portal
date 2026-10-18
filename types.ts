
export interface FeedbackSubmission {
  rating: number;
  comments?: string;
  sessionName: string;
}

export interface AIRoutingResponse {
  message: string;
  callToAction: string;
}

export enum ViewState {
  RATING = 'RATING',
  FEEDBACK_ENTRY = 'FEEDBACK_ENTRY',
  SUCCESS_ROUTING = 'SUCCESS_ROUTING',
  PRIVATE_RESOLUTION = 'PRIVATE_RESOLUTION',
  LOADING = 'LOADING'
}
