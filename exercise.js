export function exercise(title, testcases = {}) {
  console.log(`Exercise: ${title}\n\n`);
  let testsuite = 0;
  let totalPasses = 0;
  let totalTests = 0;

  for (let testcase in testcases) {
    let passes = 0;
    let tests = 0;
    console.log(`%c \t${++testsuite}, ${testcase}`, 'color: #00f;');

    for (let test in testcases[testcase]) {
      totalTests++;
      let result = false;
      const testResults = testcases[testcase][test];
      if (testResults.expected == testResults.actual) {
        result = true;
        passes++;
        totalPasses++;
      }
      console.log(
        `%c \t\t${testsuite}.${++tests})\t ${test.padEnd(25)}\t ${
          result ? 'PASS' : 'FAIL'
        }`,
        `color: ${result ? 'green' : 'red'}`
      );
    }
    console.log(`%c \tPasses: ${passes} of ${tests}\n`, 'color: #00f;');
  }

  console.log(
    `Total: %c${totalPasses} passes from ${totalTests} tests\n`,
    `color: ${totalPasses == totalTests ? 'green' : 'red'}`
  );
}
