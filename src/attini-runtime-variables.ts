/**
 * Environment variables that are available when deploying
 * a CDK app with Attini.
 *
 */
export abstract class AttiniRuntimeVariables {
  /**
   *  Environment variable that contains the current environment name.
   */
  public static readonly ENVIRONMENT: string = 'ATTINI_ENVIRONMENT_NAME';

  /**
   *  Environment variable that contains the current distribution name.
   */
  public static readonly DISTRIBUTION_NAME: string = 'ATTINI_DISTRIBUTION_NAME';

  /**
   *  Environment variable that contains the current distribution id
   */
  public static readonly DISTRIBUTION_ID: string = 'ATTINI_DISTRIBUTION_ID';

  /**
   *  Environment variable that contains the current step name.
   */
  public static readonly STEP_NAME: string = 'ATTINI_STEP_NAME';
  /**
   *  Environment variable that contains the path to the steps input file. Contains the steps input.
   */
  public static readonly INPUT_FILE_PATH: string = 'ATTINI_INPUT';
  /**
   * Environment variable that contains the path to the steps output file. Anything written to this file will be passed as the steps output.
   */
  public static readonly OUTPUT_FILE_PATH: string = 'ATTINI_OUTPUT';
}
