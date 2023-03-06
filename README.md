# Attini CDK

The Attini CDK library contains AWS CDK constructs for creating Attini deployment plans using the CDK.

Attini allowed users to write deployment logic and package it together with the resources being deployed.
The deployments are performed from within the AWS account and uses only serverless resources.

Together with the CDK the deployment logic can be we written in different programming languages.

For more information about Attini. Please visit [the website](https://attini.io/). There 
are several guides on how to get started with different tasks.

Also check out the [cdk examples repository](https://github.com/attini-cloud-solutions/attini-cdk-examples), containing
some minimalistic example implementations.

## How to install

##### npm (Javascript/Typescript)

Run the following command:

```Bash
npm i @attini/cdk
```

##### Maven (Java)

Add the following to your pom.xml file:

```XML
<dependency>
    <groupId>io.attini.cdk</groupId>
    <artifactId>attini-cdk-lib</artifactId>
    <version>1.2.1</version>
</dependency>
```

##### PyPI(Python)

Run the following command:

```Bash
pip install attini-cdk-lib
```

## How to use

To use Attini you need both the Attini CLI installed on your local machine and the Attini framework installed in
your AWS account. See the [get started guide](https://attini.io/guides/get-started/) for installation instructions.

Start from the root of the folder/project containing the resources that should be deployed. First create a new folder
that will contain the CDK project that will become the deployment plan. In the folder, create a new cdk project 
in the language you prefer.

```Bash
mkdir deloyment-plan-proj
cd deloyment-plan-proj
cdk init --language typescript
```

Install the attini constructs in the new app.

```Bash
npm i @attini/cdk
```

Update the deployment-plan-proj stack to extend "DeploymentPlanStack" instead of "Stack". This
will add the transformation necessary for Attini to function. This is also the stack where you create your deployment plan (find some examples [here](https://github.com/attini-cloud-solutions/attini-cdk-examples)).
All Attini types are supported, for more information on the different types, please read the [guides](https://attini.io/guides) or [documentation](https://docs.attini.io/api-reference/deployment-plan-types.html).

In order to create an Attini distribution (the package that will be deployed) you need to create an
attini-config.yaml file containing some basic data, such as the distribution name and our package instructions.

For this example, it could look like this:

```YAML
distributionName: typescript-cdk-demo
initDeployConfig:
  template: deployment-plan.yaml
  stackName: ${environment}-${distributionName}-deployment-plan

package:
  prePackage:
    commands:
      - cd deployment-plan-proj
      - npm install
      - cdk synth > ../deployment-plan.yaml
```

The package commands will synthesise the template. For more information about packing, see the [package a distribution guide](https://attini.io/guides/package-distribution/).

The distribution can then be packaged and the deployed. From the root of the project, execute:

```Bash
attini deploy run .
```

For more information about deploying a distribution. See the [deploy a distribution guide](https://attini.io/guides/deploy-distribution/).

## Resources

* [Attini home page](https://attini.io/)
* [Guides on getting started](https://attini.io/guides/)
* [Documentation](https://docs.attini.io)
* [Cdk examples repository](https://github.com/attini-cloud-solutions/attini-cdk-examples)
* [Attini examples repository](https://github.com/attini-cloud-solutions/attini-example-projects)








