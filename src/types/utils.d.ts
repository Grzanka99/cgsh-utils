import { Logger } from './logger.types';

declare module '@cgsh/utils/logger' {
  const logger: Logger;
}

declare module '@cgsh/utils/async-utils' {
  export const logger: Logger;
}
