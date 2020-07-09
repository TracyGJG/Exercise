# Exercise
Utility for exercising an algorythm.

This utility is provided as a function of a JavaScript module to help test an algorythm.

The function takes two parameters:
* title: The name of this suite of tests or the name of the test subject.
* testcases: An object containing a suite of test cases, structured as follows:

```
{
  'Test Case Name': {
    'Test Description': {
      expected: 'anticipated result',
      actual: 'result from exercising the subject'
    },
    
    :
  },
  
  :
}
```

## Caution
This utility only employs two of the three A's of testing. Convensionally test cases are organised in the following order:
* Arrange: Pre-test configuration of the test environment.
* Action: Execution of the test.
* Assert: Evaluation of the Actual result of the test against the expectation.
This utility defines the expectation, prepares the actual function and then executes the function (Action) to obtain the actual result. It then confirms the result equates to the expectation (Assert.)

### Additional
I personally favour a 4A approach to preparing test cases, especially for unit tests: Arrange, Affirm, Action and Assert.
The additional Affirm step guards against erroneous resuts caused by false assumptions being made regarding the Arrangement of the test environment prior to (Action-ing) the test.
