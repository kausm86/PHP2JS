function runTests()
{
  const PHP2JS = require('PHP2JS');

  try
  {
    console.assert(Array.isArray(PHP2JS.range(1, 100)));
  }
  catch (err)
  {
    console.error(err.message);
  }
}

runTests();