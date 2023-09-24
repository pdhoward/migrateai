export const awsDeploymentSteps = [
{
    component: "PGM",
    type: "BAT",
    name: "COACTUPC.cbl",
    children: [
      {
        component: "AWSDEPLOYMENT",
        name: "9300-GETACCTDATA-BYACCT",
        type: "OPENAI",        
        language: "english",
        dateCreated: "",
        dateDeleted: "",
        instructions: [

            {
                role: "AI",
                text: "Compile the Java Code into a JAR file. First, create a Java file with the code you have and then compile it into a JAR file. You can use javac for compiling and jar for packaging.",
                type: 'text'
            },
            {
                role: "AI",
                text: `
            javac AccountDataRetrieval.java
            jar cvf AccountDataRetrieval.jar AccountDataRetrieval.class
                `,
                type: 'bash'
              },
              {
                role: "AI",
                text: "Create a JSON file for the trust policy, which allows Lambda to assume the role.",
                type: 'text'
            },
              {
                role: "AI",
                text: `
            {
              "Version": "2012-10-17",
              "Statement": [
                {
                  "Effect": "Allow",
                  "Principal": {
                    "Service": "lambda.amazonaws.com"
                  },
                  "Action": "sts:AssumeRole"
                }
              ]
            }
                `,
                type: 'json'
              },
              {
                role: "AI",
                text: "Create the IAM role with the AWS CLI, using the trust policy.",
                type: 'text'
              },
              {
                role: "AI",
                text: `
            aws iam create-role --role-name lambda-execution-role --assume-role-policy-document file://trust-policy.json
                `,
                type: 'bash'
              },
              {
                role: "AI",
                text: "Create a CloudFormation YAML file for deploying the Lambda function. This YAML file describes the AWS resources that you need.",
                type: 'text'
              },
              {
                role: "AI",
                text: `
            Resources:
              MyLambdaFunction:
                Type: AWS::Lambda::Function
                Properties:
                  Handler: AccountDataRetrieval::handleRequest
                  Role: arn:aws:iam::account-id:role/execution_role
                  FunctionName: AccountDataRetrievalFunction
                  Code:
                    S3Bucket: my-s3-bucket
                    S3Key: AccountDataRetrieval.jar
                  Runtime: java11
                  MemorySize: 512
                  Timeout: 15
                `,
                type: 'yaml'
              },
              {
                role: "AI",
                text: "Deploy the CloudFormation stack with the AWS CLI.",
                type: 'text'
              },
              {
                role: "AI",
                text: `
            aws cloudformation create-stack --stack-name my-lambda-stack --template-body file://lambda-deployment.yaml
                `,
                type: 'bash'
              },
              {
                role: "AI",
                text: "After the stack is created, you can test the Lambda function using the AWS CLI.",
                type: 'text'
              }, 
              {    
                role: "AI",          
                text: `
            aws lambda invoke --function-name AccountDataRetrievalFunction --payload '{"key":"value"}' output.txt
                `,
                type: 'bash'
              }
            ]        
        }
      ]
   }
]



    
  