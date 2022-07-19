export interface IFeedbackProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  disabled?: boolean;
  hasLabel?: boolean;
}

export type IMask = 'currency' | 'cellphone' | 'phone' | 'number';
