import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as kms from 'aws-cdk-lib/aws-kms';
import { Bucket } from '../construct/bucket';
import { ConfigEnv } from '../../config/config-env';
import { IS_PROD } from '../../util/environment';

const env = new ConfigEnv().config;

export class MainStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const bucketUserPhotos = new Bucket(this, `UserPhotos`, {
      enforceSSL: IS_PROD,
      versioned: IS_PROD,
      removalPolicy: IS_PROD ? cdk.RemovalPolicy.RETAIN : cdk.RemovalPolicy.DESTROY,
    });
    const bucketMedicaments = new Bucket(this, `MedicamentPhotos`, { 
      key: new kms.Key(this, `MedicamentKey`),
      enforceSSL: IS_PROD,
      versioned: IS_PROD,
      removalPolicy: IS_PROD ? cdk.RemovalPolicy.RETAIN : cdk.RemovalPolicy.DESTROY,
    });
  }
}
