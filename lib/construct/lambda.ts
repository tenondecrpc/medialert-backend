import { Construct } from 'constructs';
import * as nodejsLambda from 'aws-cdk-lib/aws-lambda-nodejs';
import { IS_PROD } from '../../util/environment';
import { NODEJS_RUNTIME } from '../../util/runtime';

interface ILambda {
    readonly entry: string;
}

export class Lambda extends Construct {
    constructor(scope: Construct, id: string, props?: ILambda) {
        super(scope, id);

        new nodejsLambda.NodejsFunction(this, 'MyLambda', {
            entry: props?.entry,
            bundling: {
                externalModules: ['@aws-sdk/*'],
                nodeModules: ['dayjs'],
                environment: {
                    NODE_ENV: IS_PROD ? 'production' : 'development',
                }
            },
            runtime: NODEJS_RUNTIME,
        });
    }
}