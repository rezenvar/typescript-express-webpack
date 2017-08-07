const testContext = require.context('./../src', true, /\.spec\.ts/);
testContext.keys().map(testContext);

