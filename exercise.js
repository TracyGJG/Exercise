export default function exercise(title, testcases = {}) {
  var testsuite = 0;
  var totalPasses = 0;
  var totalTests = 0;
  console.log(`Exercise: ${title}\n\n`);

  for (let testcase in testcases) {
    let passes = 0;
    let tests = 0;
    console.log(`%c \t${++testsuite}, ${testcase}`, 'color: #00f;');

    for (let test in testcases[testcase]) {
      let result = false;
      let testResults = testcases[testcase][test];
      totalTests++;
      if (testResults.expected == testResults.actual) {
        result = true;
        passes++;
        totalPasses++;
      }
      console.log(
        `%c \t\t${testsuite}.${++tests})\t ${test['padEnd'](25)}\t ${
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
