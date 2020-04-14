'use strict';

const SUCCESS = data => {
  return {
    data,
    code: 1000,
    result: 'success',
  };
};

const ERROR = msg => ({
  msg,
  code: 101,
  result: 'error',
});

module.exports = { SUCCESS, ERROR };
