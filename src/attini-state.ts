import { Chain, IChainable, INextable, State } from 'aws-cdk-lib/aws-stepfunctions';
import { Construct } from 'constructs';

export abstract class AttiniState extends State implements IChainable, INextable {


  public readonly endStates: INextable[];
  abstract type: string;
  protected constructor(scope: Construct, id: string) {
    super(scope, id, {});
    this.endStates = [this];
  }

  public next(next: IChainable): Chain {
    super.makeNext(next.startState);
    return Chain.sequence(this, next);
  }

  protected abstract renderProps() : object;

  toStateJson(): object {
    return {
      Type: this.type,
      ... this.renderProps(),
      ... super.renderNextEnd(),
    };
  }


}
