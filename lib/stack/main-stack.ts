import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as kms from 'aws-cdk-lib/aws-kms';
import { Bucket } from '../construct/bucket';

export class MainStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucketUserPhotos = new Bucket(this, 'BucketUserPhotos');
    const bucketMedicaments = new Bucket(this, 'BucketMedicaments', { 
      key: new kms.Key(this, 'MyKey')
    });
  }
}
