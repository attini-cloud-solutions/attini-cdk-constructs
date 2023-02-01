const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'oscarostrand',
  authorAddress: 'oscar.ostrand@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'attini-cdk-constructs',
  repositoryUrl: 'git@github.com:attini-cloud-solutions/attini-cdk-constructs.git',
  releaseToNpm: false,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
