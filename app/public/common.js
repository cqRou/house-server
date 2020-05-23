'use strict';

const SUCCESS = (data) => {
  return {
    ...data,
    code: 1000,
    result: 'success',
    // totalCount:count || 0,
  };
};

const ERROR = msg => ({
  msg,
  code: 101,
  result: 'error',
});

module.exports = { SUCCESS, ERROR };
