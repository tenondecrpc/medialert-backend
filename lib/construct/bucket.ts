import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { IBucket } from '../interface/IBucket';

export class Bucket extends Construct {
    constructor(scope: Construct, id: string, props?: IBucket) {
        super(scope, id);

        const bucket = new s3.Bucket(this, 'Bucket', {
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
            encryption: props?.key ? s3.BucketEncryption.KMS : s3.BucketEncryption.S3_MANAGED,
            encryptionKey: props?.key
        });
    }
}