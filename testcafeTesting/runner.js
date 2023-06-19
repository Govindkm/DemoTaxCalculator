(async () => {
    const createTestCafe = require('testcafe');
    const testcafe = await createTestCafe('localhost', 1337, 1338);
  
    try {
      const runner = testcafe.createRunner();
  
      const failed = await runner
        .src(["tests/"])
        .browsers(["chrome"])
        .run();
  
      console.log('Tests failed: ' + failed);
    } finally {
      await testcafe.close();
    }
  })();