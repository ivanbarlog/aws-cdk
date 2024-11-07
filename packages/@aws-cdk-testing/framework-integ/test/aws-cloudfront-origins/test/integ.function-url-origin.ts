import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as cdk from 'aws-cdk-lib';
import { IntegTest } from '@aws-cdk/integ-tests-alpha';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';

const app = new cdk.App();

const stack = new cdk.Stack(app, 'integ-cloudfront-function-url-origin');

const fn = new lambda.Function(stack, 'MyFunction', {
  code: lambda.Code.fromInline('exports.handler = async () => {};'),
  handler: 'index.handler',
  runtime: lambda.Runtime.NODEJS_20_X,
});

const fnUrl = fn.addFunctionUrl({
  authType: lambda.FunctionUrlAuthType.NONE,
});

const oac = new cloudfront.CfnOriginAccessControl(
  stack,
  'HandlerOriginAccessControl',
  {
    originAccessControlConfig: {
      name: 'sample',
      originAccessControlOriginType: 'lambda',
      signingBehavior: 'always',
      signingProtocol: 'sigv4',
    },
  },
);

new cloudfront.Distribution(stack, 'Distribution', {
  defaultBehavior: {
    origin: new origins.FunctionUrlOrigin(fnUrl, {
      originAccessControlId: oac.attrId,
    }),
  },
});

new IntegTest(app, 'rest-api-origin', {
  testCases: [stack],
});
