/** @returns {Promise<import('jest').Config>} */
module.exports = async () => {
  return {
    timers: 'fake',
    verbose: true,
  };
};



