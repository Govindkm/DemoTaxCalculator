const report = require("multiple-cucumber-html-reporter");
const path = require("path");
const projectName = path.basename(__dirname);
const projectVersion = process.env.npm_package_version;
const reportGenerationTime = new Date().toISOString();

(async () => {
  const createTestCafe = require("testcafe");
  const testcafe = await createTestCafe("localhost", 1337, 1338);

  try {
    const runner = testcafe.createRunner();

    const failed = await runner
      .src(["tests/"])
      .browsers(["chrome"])
      .reporter([{
        name: "cucumber-json"
      }])
      .run();
      console.log("Tests failed: " + failed);

      report.generate({
        reportName: "TestCafé Report",
        jsonDir: "cucumber-json-reports",
        reportPath: "cucumber-json-reports/html",
        openReportInBrowser: true,
        disableLog: false,
        displayDuration: true,
        displayReportTime: true,
        durationInMS: true,
        customData: {
          title: "Run info",
          data: [
            { label: "Project", value: `${'Calculate My Tax'}` },
            { label: "Release", value: `${projectVersion}` },
            { label: "Report Generation Time", value: `${reportGenerationTime}` },
          ],
        },
      });

  } finally {
    await testcafe.close();
  }
})();
