// Attini resources
package attini_cdk_lib

import (
	_init_ "attini_cdk/attini_cdk_lib/jsii"

	"attini_cdk/attini_cdk_lib/internal"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/aws/constructs-go/constructs/v10"
)

type DeploymentPlan interface {
	constructs.Construct
	// The tree node.
	Node() constructs.Node
	// Returns a string representation of this construct.
	ToString() *string
}

// The jsii proxy struct for DeploymentPlan
type jsiiProxy_DeploymentPlan struct {
	internal.Type__constructsConstruct
}

func (j *jsiiProxy_DeploymentPlan) Node() constructs.Node {
	var returns constructs.Node
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}


func NewDeploymentPlan(scope constructs.Construct, id *string, props *DeploymentPlanProps) DeploymentPlan {
	_init_.Initialize()

	if err := validateNewDeploymentPlanParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_DeploymentPlan{}

	_jsii_.Create(
		"attini-cdk-lib.DeploymentPlan",
		[]interface{}{scope, id, props},
		&j,
	)

	return &j
}

func NewDeploymentPlan_Override(d DeploymentPlan, scope constructs.Construct, id *string, props *DeploymentPlanProps) {
	_init_.Initialize()

	_jsii_.Create(
		"attini-cdk-lib.DeploymentPlan",
		[]interface{}{scope, id, props},
		d,
	)
}

// Checks if `x` is a construct.
//
// Returns: true if `x` is an object created from a class which extends `Construct`.
// Deprecated: use `x instanceof Construct` instead.
func DeploymentPlan_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateDeploymentPlan_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"attini-cdk-lib.DeploymentPlan",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DeploymentPlan) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		d,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

