# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AttiniMerge <a name="AttiniMerge" id="attini-cdk-lib.AttiniMerge"></a>

#### Initializers <a name="Initializers" id="attini-cdk-lib.AttiniMerge.Initializer"></a>

```typescript
import { AttiniMerge } from 'attini-cdk-lib'

new AttiniMerge(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#attini-cdk-lib.AttiniMerge.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#attini-cdk-lib.AttiniMerge.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="attini-cdk-lib.AttiniMerge.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="attini-cdk-lib.AttiniMerge.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#attini-cdk-lib.AttiniMerge.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#attini-cdk-lib.AttiniMerge.addPrefix">addPrefix</a></code> | Add a prefix to the stateId of this state. |
| <code><a href="#attini-cdk-lib.AttiniMerge.bindToGraph">bindToGraph</a></code> | Register this state as part of the given graph. |
| <code><a href="#attini-cdk-lib.AttiniMerge.toStateJson">toStateJson</a></code> | Render the state as JSON. |
| <code><a href="#attini-cdk-lib.AttiniMerge.next">next</a></code> | Go to the indicated state after this state. |

---

##### `toString` <a name="toString" id="attini-cdk-lib.AttiniMerge.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addPrefix` <a name="addPrefix" id="attini-cdk-lib.AttiniMerge.addPrefix"></a>

```typescript
public addPrefix(x: string): void
```

Add a prefix to the stateId of this state.

###### `x`<sup>Required</sup> <a name="x" id="attini-cdk-lib.AttiniMerge.addPrefix.parameter.x"></a>

- *Type:* string

---

##### `bindToGraph` <a name="bindToGraph" id="attini-cdk-lib.AttiniMerge.bindToGraph"></a>

```typescript
public bindToGraph(graph: StateGraph): void
```

Register this state as part of the given graph.

Don't call this. It will be called automatically when you work
with states normally.

###### `graph`<sup>Required</sup> <a name="graph" id="attini-cdk-lib.AttiniMerge.bindToGraph.parameter.graph"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.StateGraph

---

##### `toStateJson` <a name="toStateJson" id="attini-cdk-lib.AttiniMerge.toStateJson"></a>

```typescript
public toStateJson(): object
```

Render the state as JSON.

##### `next` <a name="next" id="attini-cdk-lib.AttiniMerge.next"></a>

```typescript
public next(next: IChainable): Chain
```

Go to the indicated state after this state.

###### `next`<sup>Required</sup> <a name="next" id="attini-cdk-lib.AttiniMerge.next.parameter.next"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.IChainable

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#attini-cdk-lib.AttiniMerge.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#attini-cdk-lib.AttiniMerge.filterNextables">filterNextables</a></code> | Return only the states that allow chaining from an array of states. |
| <code><a href="#attini-cdk-lib.AttiniMerge.findReachableEndStates">findReachableEndStates</a></code> | Find the set of end states states reachable through transitions from the given start state. |
| <code><a href="#attini-cdk-lib.AttiniMerge.findReachableStates">findReachableStates</a></code> | Find the set of states reachable through transitions from the given start state. |
| <code><a href="#attini-cdk-lib.AttiniMerge.prefixStates">prefixStates</a></code> | Add a prefix to the stateId of all States found in a construct tree. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="attini-cdk-lib.AttiniMerge.isConstruct"></a>

```typescript
import { AttiniMerge } from 'attini-cdk-lib'

AttiniMerge.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="attini-cdk-lib.AttiniMerge.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `filterNextables` <a name="filterNextables" id="attini-cdk-lib.AttiniMerge.filterNextables"></a>

```typescript
import { AttiniMerge } from 'attini-cdk-lib'

AttiniMerge.filterNextables(states: State[])
```

Return only the states that allow chaining from an array of states.

###### `states`<sup>Required</sup> <a name="states" id="attini-cdk-lib.AttiniMerge.filterNextables.parameter.states"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.State[]

---

##### `findReachableEndStates` <a name="findReachableEndStates" id="attini-cdk-lib.AttiniMerge.findReachableEndStates"></a>

```typescript
import { AttiniMerge } from 'attini-cdk-lib'

AttiniMerge.findReachableEndStates(start: State, options?: FindStateOptions)
```

Find the set of end states states reachable through transitions from the given start state.

###### `start`<sup>Required</sup> <a name="start" id="attini-cdk-lib.AttiniMerge.findReachableEndStates.parameter.start"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.State

---

###### `options`<sup>Optional</sup> <a name="options" id="attini-cdk-lib.AttiniMerge.findReachableEndStates.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.FindStateOptions

---

##### `findReachableStates` <a name="findReachableStates" id="attini-cdk-lib.AttiniMerge.findReachableStates"></a>

```typescript
import { AttiniMerge } from 'attini-cdk-lib'

AttiniMerge.findReachableStates(start: State, options?: FindStateOptions)
```

Find the set of states reachable through transitions from the given start state.

This does not retrieve states from within sub-graphs, such as states within a Parallel state's branch.

###### `start`<sup>Required</sup> <a name="start" id="attini-cdk-lib.AttiniMerge.findReachableStates.parameter.start"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.State

---

###### `options`<sup>Optional</sup> <a name="options" id="attini-cdk-lib.AttiniMerge.findReachableStates.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.FindStateOptions

---

##### `prefixStates` <a name="prefixStates" id="attini-cdk-lib.AttiniMerge.prefixStates"></a>

```typescript
import { AttiniMerge } from 'attini-cdk-lib'

AttiniMerge.prefixStates(root: IConstruct, prefix: string)
```

Add a prefix to the stateId of all States found in a construct tree.

###### `root`<sup>Required</sup> <a name="root" id="attini-cdk-lib.AttiniMerge.prefixStates.parameter.root"></a>

- *Type:* constructs.IConstruct

---

###### `prefix`<sup>Required</sup> <a name="prefix" id="attini-cdk-lib.AttiniMerge.prefixStates.parameter.prefix"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#attini-cdk-lib.AttiniMerge.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#attini-cdk-lib.AttiniMerge.property.endStates">endStates</a></code> | <code>aws-cdk-lib.aws_stepfunctions.INextable[]</code> | Continuable states of this Chainable. |
| <code><a href="#attini-cdk-lib.AttiniMerge.property.id">id</a></code> | <code>string</code> | Descriptive identifier for this chainable. |
| <code><a href="#attini-cdk-lib.AttiniMerge.property.startState">startState</a></code> | <code>aws-cdk-lib.aws_stepfunctions.State</code> | First state of this Chainable. |
| <code><a href="#attini-cdk-lib.AttiniMerge.property.stateId">stateId</a></code> | <code>string</code> | Tokenized string that evaluates to the state's ID. |
| <code><a href="#attini-cdk-lib.AttiniMerge.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="attini-cdk-lib.AttiniMerge.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `endStates`<sup>Required</sup> <a name="endStates" id="attini-cdk-lib.AttiniMerge.property.endStates"></a>

```typescript
public readonly endStates: INextable[];
```

- *Type:* aws-cdk-lib.aws_stepfunctions.INextable[]

Continuable states of this Chainable.

---

##### `id`<sup>Required</sup> <a name="id" id="attini-cdk-lib.AttiniMerge.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Descriptive identifier for this chainable.

---

##### `startState`<sup>Required</sup> <a name="startState" id="attini-cdk-lib.AttiniMerge.property.startState"></a>

```typescript
public readonly startState: State;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.State

First state of this Chainable.

---

##### `stateId`<sup>Required</sup> <a name="stateId" id="attini-cdk-lib.AttiniMerge.property.stateId"></a>

```typescript
public readonly stateId: string;
```

- *Type:* string

Tokenized string that evaluates to the state's ID.

---

##### `type`<sup>Required</sup> <a name="type" id="attini-cdk-lib.AttiniMerge.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---


### AttiniRunner <a name="AttiniRunner" id="attini-cdk-lib.AttiniRunner"></a>

#### Initializers <a name="Initializers" id="attini-cdk-lib.AttiniRunner.Initializer"></a>

```typescript
import { AttiniRunner } from 'attini-cdk-lib'

new AttiniRunner(scope: Construct, id: string, props: AttiniRunnerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#attini-cdk-lib.AttiniRunner.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#attini-cdk-lib.AttiniRunner.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#attini-cdk-lib.AttiniRunner.Initializer.parameter.props">props</a></code> | <code><a href="#attini-cdk-lib.AttiniRunnerProps">AttiniRunnerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="attini-cdk-lib.AttiniRunner.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="attini-cdk-lib.AttiniRunner.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="attini-cdk-lib.AttiniRunner.Initializer.parameter.props"></a>

- *Type:* <a href="#attini-cdk-lib.AttiniRunnerProps">AttiniRunnerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#attini-cdk-lib.AttiniRunner.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="attini-cdk-lib.AttiniRunner.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#attini-cdk-lib.AttiniRunner.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="attini-cdk-lib.AttiniRunner.isConstruct"></a>

```typescript
import { AttiniRunner } from 'attini-cdk-lib'

AttiniRunner.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="attini-cdk-lib.AttiniRunner.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#attini-cdk-lib.AttiniRunner.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#attini-cdk-lib.AttiniRunner.property.runnerName">runnerName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="attini-cdk-lib.AttiniRunner.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `runnerName`<sup>Required</sup> <a name="runnerName" id="attini-cdk-lib.AttiniRunner.property.runnerName"></a>

```typescript
public readonly runnerName: string;
```

- *Type:* string

---


### AttiniRunnerJob <a name="AttiniRunnerJob" id="attini-cdk-lib.AttiniRunnerJob"></a>

#### Initializers <a name="Initializers" id="attini-cdk-lib.AttiniRunnerJob.Initializer"></a>

```typescript
import { AttiniRunnerJob } from 'attini-cdk-lib'

new AttiniRunnerJob(scope: Construct, id: string, props: AttiniRunnerJobProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#attini-cdk-lib.AttiniRunnerJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#attini-cdk-lib.AttiniRunnerJob.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#attini-cdk-lib.AttiniRunnerJob.Initializer.parameter.props">props</a></code> | <code><a href="#attini-cdk-lib.AttiniRunnerJobProps">AttiniRunnerJobProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="attini-cdk-lib.AttiniRunnerJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="attini-cdk-lib.AttiniRunnerJob.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="attini-cdk-lib.AttiniRunnerJob.Initializer.parameter.props"></a>

- *Type:* <a href="#attini-cdk-lib.AttiniRunnerJobProps">AttiniRunnerJobProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#attini-cdk-lib.AttiniRunnerJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#attini-cdk-lib.AttiniRunnerJob.addPrefix">addPrefix</a></code> | Add a prefix to the stateId of this state. |
| <code><a href="#attini-cdk-lib.AttiniRunnerJob.bindToGraph">bindToGraph</a></code> | Register this state as part of the given graph. |
| <code><a href="#attini-cdk-lib.AttiniRunnerJob.toStateJson">toStateJson</a></code> | Render the state as JSON. |
| <code><a href="#attini-cdk-lib.AttiniRunnerJob.next">next</a></code> | Go to the indicated state after this state. |

---

##### `toString` <a name="toString" id="attini-cdk-lib.AttiniRunnerJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addPrefix` <a name="addPrefix" id="attini-cdk-lib.AttiniRunnerJob.addPrefix"></a>

```typescript
public addPrefix(x: string): void
```

Add a prefix to the stateId of this state.

###### `x`<sup>Required</sup> <a name="x" id="attini-cdk-lib.AttiniRunnerJob.addPrefix.parameter.x"></a>

- *Type:* string

---

##### `bindToGraph` <a name="bindToGraph" id="attini-cdk-lib.AttiniRunnerJob.bindToGraph"></a>

```typescript
public bindToGraph(graph: StateGraph): void
```

Register this state as part of the given graph.

Don't call this. It will be called automatically when you work
with states normally.

###### `graph`<sup>Required</sup> <a name="graph" id="attini-cdk-lib.AttiniRunnerJob.bindToGraph.parameter.graph"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.StateGraph

---

##### `toStateJson` <a name="toStateJson" id="attini-cdk-lib.AttiniRunnerJob.toStateJson"></a>

```typescript
public toStateJson(): object
```

Render the state as JSON.

##### `next` <a name="next" id="attini-cdk-lib.AttiniRunnerJob.next"></a>

```typescript
public next(next: IChainable): Chain
```

Go to the indicated state after this state.

###### `next`<sup>Required</sup> <a name="next" id="attini-cdk-lib.AttiniRunnerJob.next.parameter.next"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.IChainable

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#attini-cdk-lib.AttiniRunnerJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#attini-cdk-lib.AttiniRunnerJob.filterNextables">filterNextables</a></code> | Return only the states that allow chaining from an array of states. |
| <code><a href="#attini-cdk-lib.AttiniRunnerJob.findReachableEndStates">findReachableEndStates</a></code> | Find the set of end states states reachable through transitions from the given start state. |
| <code><a href="#attini-cdk-lib.AttiniRunnerJob.findReachableStates">findReachableStates</a></code> | Find the set of states reachable through transitions from the given start state. |
| <code><a href="#attini-cdk-lib.AttiniRunnerJob.prefixStates">prefixStates</a></code> | Add a prefix to the stateId of all States found in a construct tree. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="attini-cdk-lib.AttiniRunnerJob.isConstruct"></a>

```typescript
import { AttiniRunnerJob } from 'attini-cdk-lib'

AttiniRunnerJob.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="attini-cdk-lib.AttiniRunnerJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `filterNextables` <a name="filterNextables" id="attini-cdk-lib.AttiniRunnerJob.filterNextables"></a>

```typescript
import { AttiniRunnerJob } from 'attini-cdk-lib'

AttiniRunnerJob.filterNextables(states: State[])
```

Return only the states that allow chaining from an array of states.

###### `states`<sup>Required</sup> <a name="states" id="attini-cdk-lib.AttiniRunnerJob.filterNextables.parameter.states"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.State[]

---

##### `findReachableEndStates` <a name="findReachableEndStates" id="attini-cdk-lib.AttiniRunnerJob.findReachableEndStates"></a>

```typescript
import { AttiniRunnerJob } from 'attini-cdk-lib'

AttiniRunnerJob.findReachableEndStates(start: State, options?: FindStateOptions)
```

Find the set of end states states reachable through transitions from the given start state.

###### `start`<sup>Required</sup> <a name="start" id="attini-cdk-lib.AttiniRunnerJob.findReachableEndStates.parameter.start"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.State

---

###### `options`<sup>Optional</sup> <a name="options" id="attini-cdk-lib.AttiniRunnerJob.findReachableEndStates.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.FindStateOptions

---

##### `findReachableStates` <a name="findReachableStates" id="attini-cdk-lib.AttiniRunnerJob.findReachableStates"></a>

```typescript
import { AttiniRunnerJob } from 'attini-cdk-lib'

AttiniRunnerJob.findReachableStates(start: State, options?: FindStateOptions)
```

Find the set of states reachable through transitions from the given start state.

This does not retrieve states from within sub-graphs, such as states within a Parallel state's branch.

###### `start`<sup>Required</sup> <a name="start" id="attini-cdk-lib.AttiniRunnerJob.findReachableStates.parameter.start"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.State

---

###### `options`<sup>Optional</sup> <a name="options" id="attini-cdk-lib.AttiniRunnerJob.findReachableStates.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.FindStateOptions

---

##### `prefixStates` <a name="prefixStates" id="attini-cdk-lib.AttiniRunnerJob.prefixStates"></a>

```typescript
import { AttiniRunnerJob } from 'attini-cdk-lib'

AttiniRunnerJob.prefixStates(root: IConstruct, prefix: string)
```

Add a prefix to the stateId of all States found in a construct tree.

###### `root`<sup>Required</sup> <a name="root" id="attini-cdk-lib.AttiniRunnerJob.prefixStates.parameter.root"></a>

- *Type:* constructs.IConstruct

---

###### `prefix`<sup>Required</sup> <a name="prefix" id="attini-cdk-lib.AttiniRunnerJob.prefixStates.parameter.prefix"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#attini-cdk-lib.AttiniRunnerJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#attini-cdk-lib.AttiniRunnerJob.property.endStates">endStates</a></code> | <code>aws-cdk-lib.aws_stepfunctions.INextable[]</code> | Continuable states of this Chainable. |
| <code><a href="#attini-cdk-lib.AttiniRunnerJob.property.id">id</a></code> | <code>string</code> | Descriptive identifier for this chainable. |
| <code><a href="#attini-cdk-lib.AttiniRunnerJob.property.startState">startState</a></code> | <code>aws-cdk-lib.aws_stepfunctions.State</code> | First state of this Chainable. |
| <code><a href="#attini-cdk-lib.AttiniRunnerJob.property.stateId">stateId</a></code> | <code>string</code> | Tokenized string that evaluates to the state's ID. |
| <code><a href="#attini-cdk-lib.AttiniRunnerJob.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="attini-cdk-lib.AttiniRunnerJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `endStates`<sup>Required</sup> <a name="endStates" id="attini-cdk-lib.AttiniRunnerJob.property.endStates"></a>

```typescript
public readonly endStates: INextable[];
```

- *Type:* aws-cdk-lib.aws_stepfunctions.INextable[]

Continuable states of this Chainable.

---

##### `id`<sup>Required</sup> <a name="id" id="attini-cdk-lib.AttiniRunnerJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Descriptive identifier for this chainable.

---

##### `startState`<sup>Required</sup> <a name="startState" id="attini-cdk-lib.AttiniRunnerJob.property.startState"></a>

```typescript
public readonly startState: State;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.State

First state of this Chainable.

---

##### `stateId`<sup>Required</sup> <a name="stateId" id="attini-cdk-lib.AttiniRunnerJob.property.stateId"></a>

```typescript
public readonly stateId: string;
```

- *Type:* string

Tokenized string that evaluates to the state's ID.

---

##### `type`<sup>Required</sup> <a name="type" id="attini-cdk-lib.AttiniRunnerJob.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---


### AttiniState <a name="AttiniState" id="attini-cdk-lib.AttiniState"></a>

- *Implements:* aws-cdk-lib.aws_stepfunctions.IChainable, aws-cdk-lib.aws_stepfunctions.INextable

#### Initializers <a name="Initializers" id="attini-cdk-lib.AttiniState.Initializer"></a>

```typescript
import { AttiniState } from 'attini-cdk-lib'

new AttiniState(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#attini-cdk-lib.AttiniState.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#attini-cdk-lib.AttiniState.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="attini-cdk-lib.AttiniState.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="attini-cdk-lib.AttiniState.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#attini-cdk-lib.AttiniState.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#attini-cdk-lib.AttiniState.addPrefix">addPrefix</a></code> | Add a prefix to the stateId of this state. |
| <code><a href="#attini-cdk-lib.AttiniState.bindToGraph">bindToGraph</a></code> | Register this state as part of the given graph. |
| <code><a href="#attini-cdk-lib.AttiniState.toStateJson">toStateJson</a></code> | Render the state as JSON. |
| <code><a href="#attini-cdk-lib.AttiniState.next">next</a></code> | Go to the indicated state after this state. |

---

##### `toString` <a name="toString" id="attini-cdk-lib.AttiniState.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addPrefix` <a name="addPrefix" id="attini-cdk-lib.AttiniState.addPrefix"></a>

```typescript
public addPrefix(x: string): void
```

Add a prefix to the stateId of this state.

###### `x`<sup>Required</sup> <a name="x" id="attini-cdk-lib.AttiniState.addPrefix.parameter.x"></a>

- *Type:* string

---

##### `bindToGraph` <a name="bindToGraph" id="attini-cdk-lib.AttiniState.bindToGraph"></a>

```typescript
public bindToGraph(graph: StateGraph): void
```

Register this state as part of the given graph.

Don't call this. It will be called automatically when you work
with states normally.

###### `graph`<sup>Required</sup> <a name="graph" id="attini-cdk-lib.AttiniState.bindToGraph.parameter.graph"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.StateGraph

---

##### `toStateJson` <a name="toStateJson" id="attini-cdk-lib.AttiniState.toStateJson"></a>

```typescript
public toStateJson(): object
```

Render the state as JSON.

##### `next` <a name="next" id="attini-cdk-lib.AttiniState.next"></a>

```typescript
public next(next: IChainable): Chain
```

Go to the indicated state after this state.

###### `next`<sup>Required</sup> <a name="next" id="attini-cdk-lib.AttiniState.next.parameter.next"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.IChainable

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#attini-cdk-lib.AttiniState.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#attini-cdk-lib.AttiniState.filterNextables">filterNextables</a></code> | Return only the states that allow chaining from an array of states. |
| <code><a href="#attini-cdk-lib.AttiniState.findReachableEndStates">findReachableEndStates</a></code> | Find the set of end states states reachable through transitions from the given start state. |
| <code><a href="#attini-cdk-lib.AttiniState.findReachableStates">findReachableStates</a></code> | Find the set of states reachable through transitions from the given start state. |
| <code><a href="#attini-cdk-lib.AttiniState.prefixStates">prefixStates</a></code> | Add a prefix to the stateId of all States found in a construct tree. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="attini-cdk-lib.AttiniState.isConstruct"></a>

```typescript
import { AttiniState } from 'attini-cdk-lib'

AttiniState.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="attini-cdk-lib.AttiniState.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `filterNextables` <a name="filterNextables" id="attini-cdk-lib.AttiniState.filterNextables"></a>

```typescript
import { AttiniState } from 'attini-cdk-lib'

AttiniState.filterNextables(states: State[])
```

Return only the states that allow chaining from an array of states.

###### `states`<sup>Required</sup> <a name="states" id="attini-cdk-lib.AttiniState.filterNextables.parameter.states"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.State[]

---

##### `findReachableEndStates` <a name="findReachableEndStates" id="attini-cdk-lib.AttiniState.findReachableEndStates"></a>

```typescript
import { AttiniState } from 'attini-cdk-lib'

AttiniState.findReachableEndStates(start: State, options?: FindStateOptions)
```

Find the set of end states states reachable through transitions from the given start state.

###### `start`<sup>Required</sup> <a name="start" id="attini-cdk-lib.AttiniState.findReachableEndStates.parameter.start"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.State

---

###### `options`<sup>Optional</sup> <a name="options" id="attini-cdk-lib.AttiniState.findReachableEndStates.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.FindStateOptions

---

##### `findReachableStates` <a name="findReachableStates" id="attini-cdk-lib.AttiniState.findReachableStates"></a>

```typescript
import { AttiniState } from 'attini-cdk-lib'

AttiniState.findReachableStates(start: State, options?: FindStateOptions)
```

Find the set of states reachable through transitions from the given start state.

This does not retrieve states from within sub-graphs, such as states within a Parallel state's branch.

###### `start`<sup>Required</sup> <a name="start" id="attini-cdk-lib.AttiniState.findReachableStates.parameter.start"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.State

---

###### `options`<sup>Optional</sup> <a name="options" id="attini-cdk-lib.AttiniState.findReachableStates.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.FindStateOptions

---

##### `prefixStates` <a name="prefixStates" id="attini-cdk-lib.AttiniState.prefixStates"></a>

```typescript
import { AttiniState } from 'attini-cdk-lib'

AttiniState.prefixStates(root: IConstruct, prefix: string)
```

Add a prefix to the stateId of all States found in a construct tree.

###### `root`<sup>Required</sup> <a name="root" id="attini-cdk-lib.AttiniState.prefixStates.parameter.root"></a>

- *Type:* constructs.IConstruct

---

###### `prefix`<sup>Required</sup> <a name="prefix" id="attini-cdk-lib.AttiniState.prefixStates.parameter.prefix"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#attini-cdk-lib.AttiniState.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#attini-cdk-lib.AttiniState.property.endStates">endStates</a></code> | <code>aws-cdk-lib.aws_stepfunctions.INextable[]</code> | Continuable states of this Chainable. |
| <code><a href="#attini-cdk-lib.AttiniState.property.id">id</a></code> | <code>string</code> | Descriptive identifier for this chainable. |
| <code><a href="#attini-cdk-lib.AttiniState.property.startState">startState</a></code> | <code>aws-cdk-lib.aws_stepfunctions.State</code> | First state of this Chainable. |
| <code><a href="#attini-cdk-lib.AttiniState.property.stateId">stateId</a></code> | <code>string</code> | Tokenized string that evaluates to the state's ID. |
| <code><a href="#attini-cdk-lib.AttiniState.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="attini-cdk-lib.AttiniState.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `endStates`<sup>Required</sup> <a name="endStates" id="attini-cdk-lib.AttiniState.property.endStates"></a>

```typescript
public readonly endStates: INextable[];
```

- *Type:* aws-cdk-lib.aws_stepfunctions.INextable[]

Continuable states of this Chainable.

---

##### `id`<sup>Required</sup> <a name="id" id="attini-cdk-lib.AttiniState.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Descriptive identifier for this chainable.

---

##### `startState`<sup>Required</sup> <a name="startState" id="attini-cdk-lib.AttiniState.property.startState"></a>

```typescript
public readonly startState: State;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.State

First state of this Chainable.

---

##### `stateId`<sup>Required</sup> <a name="stateId" id="attini-cdk-lib.AttiniState.property.stateId"></a>

```typescript
public readonly stateId: string;
```

- *Type:* string

Tokenized string that evaluates to the state's ID.

---

##### `type`<sup>Required</sup> <a name="type" id="attini-cdk-lib.AttiniState.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---


### DeploymentPlan <a name="DeploymentPlan" id="attini-cdk-lib.DeploymentPlan"></a>

#### Initializers <a name="Initializers" id="attini-cdk-lib.DeploymentPlan.Initializer"></a>

```typescript
import { DeploymentPlan } from 'attini-cdk-lib'

new DeploymentPlan(scope: Construct, id: string, props: DeploymentPlanProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#attini-cdk-lib.DeploymentPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#attini-cdk-lib.DeploymentPlan.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#attini-cdk-lib.DeploymentPlan.Initializer.parameter.props">props</a></code> | <code><a href="#attini-cdk-lib.DeploymentPlanProps">DeploymentPlanProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="attini-cdk-lib.DeploymentPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="attini-cdk-lib.DeploymentPlan.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="attini-cdk-lib.DeploymentPlan.Initializer.parameter.props"></a>

- *Type:* <a href="#attini-cdk-lib.DeploymentPlanProps">DeploymentPlanProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#attini-cdk-lib.DeploymentPlan.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="attini-cdk-lib.DeploymentPlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#attini-cdk-lib.DeploymentPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="attini-cdk-lib.DeploymentPlan.isConstruct"></a>

```typescript
import { DeploymentPlan } from 'attini-cdk-lib'

DeploymentPlan.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="attini-cdk-lib.DeploymentPlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#attini-cdk-lib.DeploymentPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="attini-cdk-lib.DeploymentPlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### AttiniRunnerJobProps <a name="AttiniRunnerJobProps" id="attini-cdk-lib.AttiniRunnerJobProps"></a>

#### Initializer <a name="Initializer" id="attini-cdk-lib.AttiniRunnerJobProps.Initializer"></a>

```typescript
import { AttiniRunnerJobProps } from 'attini-cdk-lib'

const attiniRunnerJobProps: AttiniRunnerJobProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#attini-cdk-lib.AttiniRunnerJobProps.property.commands">commands</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#attini-cdk-lib.AttiniRunnerJobProps.property.runner">runner</a></code> | <code>string</code> | *No description.* |

---

##### `commands`<sup>Required</sup> <a name="commands" id="attini-cdk-lib.AttiniRunnerJobProps.property.commands"></a>

```typescript
public readonly commands: string[];
```

- *Type:* string[]

---

##### `runner`<sup>Optional</sup> <a name="runner" id="attini-cdk-lib.AttiniRunnerJobProps.property.runner"></a>

```typescript
public readonly runner: string;
```

- *Type:* string

---

### AttiniRunnerProps <a name="AttiniRunnerProps" id="attini-cdk-lib.AttiniRunnerProps"></a>

#### Initializer <a name="Initializer" id="attini-cdk-lib.AttiniRunnerProps.Initializer"></a>

```typescript
import { AttiniRunnerProps } from 'attini-cdk-lib'

const attiniRunnerProps: AttiniRunnerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#attini-cdk-lib.AttiniRunnerProps.property.awsVpcConfiguration">awsVpcConfiguration</a></code> | <code><a href="#attini-cdk-lib.AwsVpcConfiguration">AwsVpcConfiguration</a></code> | *No description.* |
| <code><a href="#attini-cdk-lib.AttiniRunnerProps.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#attini-cdk-lib.AttiniRunnerProps.property.ecsCluster">ecsCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#attini-cdk-lib.AttiniRunnerProps.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#attini-cdk-lib.AttiniRunnerProps.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#attini-cdk-lib.AttiniRunnerProps.property.runnerConfiguration">runnerConfiguration</a></code> | <code><a href="#attini-cdk-lib.RunnerConfiguration">RunnerConfiguration</a></code> | *No description.* |
| <code><a href="#attini-cdk-lib.AttiniRunnerProps.property.startup">startup</a></code> | <code><a href="#attini-cdk-lib.Startup">Startup</a></code> | *No description.* |
| <code><a href="#attini-cdk-lib.AttiniRunnerProps.property.taskDefinitionArn">taskDefinitionArn</a></code> | <code>string</code> | *No description.* |

---

##### `awsVpcConfiguration`<sup>Optional</sup> <a name="awsVpcConfiguration" id="attini-cdk-lib.AttiniRunnerProps.property.awsVpcConfiguration"></a>

```typescript
public readonly awsVpcConfiguration: AwsVpcConfiguration;
```

- *Type:* <a href="#attini-cdk-lib.AwsVpcConfiguration">AwsVpcConfiguration</a>

---

##### `containerName`<sup>Optional</sup> <a name="containerName" id="attini-cdk-lib.AttiniRunnerProps.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `ecsCluster`<sup>Optional</sup> <a name="ecsCluster" id="attini-cdk-lib.AttiniRunnerProps.property.ecsCluster"></a>

```typescript
public readonly ecsCluster: string;
```

- *Type:* string

---

##### `image`<sup>Optional</sup> <a name="image" id="attini-cdk-lib.AttiniRunnerProps.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="attini-cdk-lib.AttiniRunnerProps.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `runnerConfiguration`<sup>Optional</sup> <a name="runnerConfiguration" id="attini-cdk-lib.AttiniRunnerProps.property.runnerConfiguration"></a>

```typescript
public readonly runnerConfiguration: RunnerConfiguration;
```

- *Type:* <a href="#attini-cdk-lib.RunnerConfiguration">RunnerConfiguration</a>

---

##### `startup`<sup>Optional</sup> <a name="startup" id="attini-cdk-lib.AttiniRunnerProps.property.startup"></a>

```typescript
public readonly startup: Startup;
```

- *Type:* <a href="#attini-cdk-lib.Startup">Startup</a>

---

##### `taskDefinitionArn`<sup>Optional</sup> <a name="taskDefinitionArn" id="attini-cdk-lib.AttiniRunnerProps.property.taskDefinitionArn"></a>

```typescript
public readonly taskDefinitionArn: string;
```

- *Type:* string

---

### AwsVpcConfiguration <a name="AwsVpcConfiguration" id="attini-cdk-lib.AwsVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="attini-cdk-lib.AwsVpcConfiguration.Initializer"></a>

```typescript
import { AwsVpcConfiguration } from 'attini-cdk-lib'

const awsVpcConfiguration: AwsVpcConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#attini-cdk-lib.AwsVpcConfiguration.property.assignPublicIp">assignPublicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#attini-cdk-lib.AwsVpcConfiguration.property.securityGroups">securityGroups</a></code> | <code>object</code> | *No description.* |
| <code><a href="#attini-cdk-lib.AwsVpcConfiguration.property.subnets">subnets</a></code> | <code>object</code> | *No description.* |

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="attini-cdk-lib.AwsVpcConfiguration.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="attini-cdk-lib.AwsVpcConfiguration.property.securityGroups"></a>

```typescript
public readonly securityGroups: object;
```

- *Type:* object

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="attini-cdk-lib.AwsVpcConfiguration.property.subnets"></a>

```typescript
public readonly subnets: object;
```

- *Type:* object

---

### DeploymentPlanProps <a name="DeploymentPlanProps" id="attini-cdk-lib.DeploymentPlanProps"></a>

#### Initializer <a name="Initializer" id="attini-cdk-lib.DeploymentPlanProps.Initializer"></a>

```typescript
import { DeploymentPlanProps } from 'attini-cdk-lib'

const deploymentPlanProps: DeploymentPlanProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#attini-cdk-lib.DeploymentPlanProps.property.definition">definition</a></code> | <code>aws-cdk-lib.aws_stepfunctions.Chain</code> | *No description.* |
| <code><a href="#attini-cdk-lib.DeploymentPlanProps.property.states">states</a></code> | <code>aws-cdk-lib.aws_stepfunctions.State[]</code> | *No description.* |

---

##### `definition`<sup>Optional</sup> <a name="definition" id="attini-cdk-lib.DeploymentPlanProps.property.definition"></a>

```typescript
public readonly definition: Chain;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.Chain

---

##### `states`<sup>Optional</sup> <a name="states" id="attini-cdk-lib.DeploymentPlanProps.property.states"></a>

```typescript
public readonly states: State[];
```

- *Type:* aws-cdk-lib.aws_stepfunctions.State[]

---

### RunnerConfiguration <a name="RunnerConfiguration" id="attini-cdk-lib.RunnerConfiguration"></a>

#### Initializer <a name="Initializer" id="attini-cdk-lib.RunnerConfiguration.Initializer"></a>

```typescript
import { RunnerConfiguration } from 'attini-cdk-lib'

const runnerConfiguration: RunnerConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#attini-cdk-lib.RunnerConfiguration.property.idleTimeToLive">idleTimeToLive</a></code> | <code>number</code> | *No description.* |
| <code><a href="#attini-cdk-lib.RunnerConfiguration.property.jobTimeout">jobTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#attini-cdk-lib.RunnerConfiguration.property.logLevel">logLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#attini-cdk-lib.RunnerConfiguration.property.maxConcurrentJobs">maxConcurrentJobs</a></code> | <code>number</code> | *No description.* |

---

##### `idleTimeToLive`<sup>Optional</sup> <a name="idleTimeToLive" id="attini-cdk-lib.RunnerConfiguration.property.idleTimeToLive"></a>

```typescript
public readonly idleTimeToLive: number;
```

- *Type:* number

---

##### `jobTimeout`<sup>Optional</sup> <a name="jobTimeout" id="attini-cdk-lib.RunnerConfiguration.property.jobTimeout"></a>

```typescript
public readonly jobTimeout: number;
```

- *Type:* number

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="attini-cdk-lib.RunnerConfiguration.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

---

##### `maxConcurrentJobs`<sup>Optional</sup> <a name="maxConcurrentJobs" id="attini-cdk-lib.RunnerConfiguration.property.maxConcurrentJobs"></a>

```typescript
public readonly maxConcurrentJobs: number;
```

- *Type:* number

---

### Startup <a name="Startup" id="attini-cdk-lib.Startup"></a>

#### Initializer <a name="Initializer" id="attini-cdk-lib.Startup.Initializer"></a>

```typescript
import { Startup } from 'attini-cdk-lib'

const startup: Startup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#attini-cdk-lib.Startup.property.commands">commands</a></code> | <code>object</code> | *No description.* |
| <code><a href="#attini-cdk-lib.Startup.property.commandsTimeout">commandsTimeout</a></code> | <code>number</code> | *No description.* |

---

##### `commands`<sup>Optional</sup> <a name="commands" id="attini-cdk-lib.Startup.property.commands"></a>

```typescript
public readonly commands: object;
```

- *Type:* object

---

##### `commandsTimeout`<sup>Optional</sup> <a name="commandsTimeout" id="attini-cdk-lib.Startup.property.commandsTimeout"></a>

```typescript
public readonly commandsTimeout: number;
```

- *Type:* number

---



