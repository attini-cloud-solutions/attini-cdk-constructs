const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  authorOrganization: true,
  // authorUrl: 'https://attini.io/',

  bugsEmail: 'support@attini.io',
  author: 'oscarostrand',
  description: 'Attini CDK Constructs',
  copyrightOwner: 'Attini Cloud Solutions International AB',

  authorAddress: 'contact@attini.io',

  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'attini-cdk-lib',
  packageName: '@attini/attini-cdk-lib',
  repositoryUrl: 'git@github.com:attini-cloud-solutions/attini-cdk-constructs.git',
  releaseBranches: 'main',
  docgen: false,
  // publishToPypi: {
  //   distName: 'attini-cdk-lib',
  //   module: 'attini_cdk',
  // },
  releaseToNpm: true,
  npmTokenSecret: 'NPM_TOKEN',
  // publishToMaven: {
  //   mavenGroupId: 'attini.cdk',
  //   mavenArtifactId: 'attini-cdk-lib',
  //   javaPackage: 'attini.cdk',
  // },
  // publishToGo: {
  //   packageName: 'attini_cdk_lib',
  //   moduleName: 'github.com/attini-cloud-solutions/attini-cdk-go',
  //   githubRepo: 'github.com/attini-cloud-solutions/attini-cdk-go.git',

  //   githubTokenSecret: 'GO_GITHUB_TOKEN',

  //   //'github.com/attini-cloud-solutions/attini-cdk-go/attinicdk',
  //   // gitUserEmail: 'carl.ostrand@gmail.com',
  //   // gitUserName: 'carlostrand',
  //   // githubUseSsh: false,
  // },

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
