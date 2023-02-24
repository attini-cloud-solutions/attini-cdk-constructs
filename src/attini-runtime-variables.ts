export namespace AttiniRuntimeVariables {
  /**
   *  Environment variable that contains the current environment name.
   */
  export const ENVIRONMENT: string = 'ATTINI_ENVIRONMENT_NAME';

  /**
   *  Environment variable that contains the current distribution name.
   */
  export const DISTRIBUTION_NAME: string = 'ATTINI_DISTRIBUTION_NAME';

  /**
   *  Environment variable that contains the current distribution id
   */
  export const DISTRIBUTION_ID: string ='ATTINI_DISTRIBUTION_ID';

  /**
   *  Environment variable that contains the current step name.
   */
  export const STEP_NAME: string = 'ATTINI_STEP_NAME';
  /**
   *  Environment variable that contains the path to the steps input file. Contains the steps input.
   */
  export const INPUT_FILE_PATH: string = 'ATTINI_INPUT';
  /**
   * Environment variable that contains the path to the steps output file. Anything written to this file will be passed as the steps output.
   */
  export const OUTPUT_FILE_PATH: string = 'ATTINI_OUTPUT';

}
