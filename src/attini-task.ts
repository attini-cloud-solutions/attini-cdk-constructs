import { AttiniState } from './attini-state';

export abstract class AttiniTask extends AttiniState {

  /**
   *
   * Get the json path to this steps output. Convenience
   * method that will return a string with the following format
   * $.output.<id>.<path>.
   *
   * @param {string} [path] - The path to the value from the outputs root.
   *
   */
  public getOutputPath(path?: string) {
    if (path) {
      return '$.output.'+this.id+'.'+path;
    }
    return '$.output.'+this.id;
  }
}
