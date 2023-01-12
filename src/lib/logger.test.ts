import test from 'ava';

import { LogType } from '../types/logger.types';

import { getLoggedText } from './logger';

test('info', (t) => {
  const resultTest = getLoggedText(LogType.info, 'test');
  t.is(resultTest, `\x1b[1m\x1B[32mINFO:\x1B[0m test`);
});

test('warn', (t) => {
  const resultTest = getLoggedText(LogType.warning, 'warn');
  t.is(resultTest, `\x1b[1m\x1b[33mWARN:\x1b[0m warn`);
});

test('error', (t) => {
  const resultTest = getLoggedText(LogType.error, 'error');
  t.is(resultTest, `\x1b[1m\x1B[31mERRO:\x1B[0m error`);
});
