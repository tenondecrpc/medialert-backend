import * as kms from 'aws-cdk-lib/aws-kms';

export interface IBucket {
    readonly key: kms.Key;
}