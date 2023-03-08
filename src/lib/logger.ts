import { Logger, LoggerFactory, LogType } from '../types/logger.types';

const mapToAscii = (t: LogType) => {
  switch (t) {
    case LogType.info:
      return '\x1B[32m';
    case LogType.warning:
      return '\x1B[33m';
    case LogType.error:
      return '\x1B[31m';
    default:
      return '\x1B[32m';
  }
};

export const getLoggedText = (type: LogType, msg: string): string => {
  const includeTime = process && process.env.LOGGER_INCLUDE_TIME === 'true';
  const time = includeTime
    ? `\x1b[2m[${new Date().toISOString()}]\x1b[0m `
    : '';

  const text = `${time}\x1b[1m${mapToAscii(type)}${type}:\x1B[0m ${msg}`;

  return text;
};

const loggerFactory: LoggerFactory =
  (type) =>
  (msg): true => {
    if (process && process.env.NODE_ENV === 'production') return true;

    console.log(getLoggedText(type, msg));

    return true;
  };

export const logger: Logger = {
  info: loggerFactory(LogType.info),
  error: loggerFactory(LogType.error),
  warning: loggerFactory(LogType.warning),
};
