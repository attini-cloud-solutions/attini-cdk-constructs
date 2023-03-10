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
  majorVersion: 1,
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
  postBuildSteps: [
    {
      name: 'Build docs',
      env: {
        AWS_ACCESS_KEY_ID: '${{ secrets.AWS_ACCESS_KEY_ID }}',
        AWS_SECRET_ACCESS_KEY: '${{ secrets.AWS_SECRET_ACCESS_KEY }}',
        AWS_DEFAULT_REGION: '${{ secrets.AWS_DEFAULT_REGION }}',
      },
      run: `
            npx typedoc src/index.ts --out cdk-docs
            cd cdk-docs
            zip -r docs-ts.zip .
            aws s3 cp docs-ts.zip s3://attini-docs-blobs/docs-ts.zip
            cd ..
            rm -r cdk-docs
           `,
    },
  ],
  gitignore: [
    '.DS_Store',
    '.idea',
  ],
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: ['typedoc'],
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
