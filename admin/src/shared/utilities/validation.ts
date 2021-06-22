import strings from '@shared/constants/strings';

export const required = (
  message: string = strings.REQUIRED_ERROR,
): { required: true; message:string } => ({ required: true, message });

export const withPattern = (
  pattern: RegExp, message: string = strings.PATTERN_ERROR,
): { pattern: RegExp; message:string } => ({ pattern, message });
