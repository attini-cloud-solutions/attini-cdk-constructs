const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  authorOrganization: true,
  bugsEmail: 'support@attini.io',
  author: 'oscarostrand',
  description: 'Attini CDK Constructs',
  copyrightOwner: 'Attini Cloud Solutions International AB',

  authorAddress: 'contact@attini.io',
  homepage: 'https://attini.io',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'attini-cdk-lib',
  packageName: '@attini/cdk',
  repositoryUrl: 'https://github.com/attini-cloud-solutions/attini-cdk-constructs',
  releaseBranches: 'main',
  docgen: false,
  publishToPypi: {
    distName: 'attini-cdk-lib',
    module: 'attini_cdk',
    twinePasswordSecret: 'TWINE_PASSWORD',
    twineUsernameSecret: 'TWINE_USERNAME',
  },
  releaseToNpm: true,
  npmTokenSecret: 'NPM_TOKEN',
  publishToMaven: {
    mavenGroupId: 'io.attini.cdk',
    mavenArtifactId: 'attini-cdk-lib',
    javaPackage: 'attini.cdk',
    repositoryUrl: 'https://s01.oss.sonatype.org/service/local/staging/deploy/maven2/',
    mavenEndpoint: 'https://s01.oss.sonatype.org/',
    mavenStagingProfileId: 'MAVEN_STAGING_PROFILE_ID',
    mavenGpgPrivateKeyPassphrase: 'MAVEN_GPG_PRIVATE_KEY_PASSPHRASE',
    mavenGpgPrivateKeySecret: 'MAVEN_GPG_PRIVATE_KEY',
    mavenPassword: 'MAVEN_PASSWORD',
    mavenUsername: 'MAVEN_USERNAME',
  },
  publishToGo: {
    packageName: 'attini_cdk_lib',
    moduleName: 'github.com/attini-cloud-solutions/attini-cdk-go',
    githubRepo: 'github.com/attini-cloud-solutions/attini-cdk-go.git',
    githubTokenSecret: 'GO_GITHUB_TOKEN',
  },
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
