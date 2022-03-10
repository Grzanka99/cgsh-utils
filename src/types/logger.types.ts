export enum LogType {
  info = 'INFO',
  warning = 'WARN',
  error = 'ERRO',
}

export type LoggerInfo = (...msg: readonly string[]) => true;
export type LoggerError = (...msg: readonly string[]) => true;
export type LoggerWarning = (...msg: readonly string[]) => true;

export type Logger = {
  readonly info: LoggerInfo;
  readonly error: LoggerError;
  readonly warning: LoggerWarning;
};

export type LoggerFactoryResult = LoggerInfo | LoggerError | LoggerWarning;

export type LoggerFactory = (type: LogType) => LoggerFactoryResult;
