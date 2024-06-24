import { HeadObjectCommand, S3Client } from '@aws-sdk/client-s3';

const s3Client = new S3Client();
export const handler = async (event: Record<string, string>): Promise<any> => {
    const command = new HeadObjectCommand({
        Bucket: event.bucket,
        Key: event.key,
    });
    const objectInfo = await s3Client.send(command);

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go CDK! Your function executed successfully!',
            objectInfo
        }),
    };
}