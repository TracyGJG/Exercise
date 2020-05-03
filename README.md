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
