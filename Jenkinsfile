pipeline {

    agent { label 'worker1' }

    environment {
        AWS_ACCESS_KEY_ID = credentials('AWS_ACCESS_KEY_ID')
        AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')
        AWS_DEFAULT_REGION = credentials('AWS_DEFAULT_REGION')
        CLUSTER_NAME = credentials('CLUSTER_NAME')
        REGISTRY = credentials('REGISTRY')
        SERVICE_NAME = 'reactjs-new-website'
        VERSION = 'latest'
    }


    stages{

        stage("build") {
            steps{
                script {
                    sh '''
                        sudo npm install
                        sudo npm run build
                    '''
                    echo 'Build with Nodejs'
                }
            }   
        }

        stage("Image Build") {
            steps{
                script {
                    dockerImage = docker.build "${REGISTRY}/${SERVICE_NAME}:${VERSION}"
                }
            }   
        }
        stage("ECR") {
            steps{
                script {
                    sh "aws ecr get-login-password --region eu-west-2 | docker login --username AWS --password-stdin ${REGISTRY}"
                }
            }   
        }

        stage("pushing to ECR") {
            steps{
                script {
                    sh "docker push ${REGISTRY}/${SERVICE_NAME}:${VERSION}"
                }
            }   
        }
        stage("Deploy to EKS cluster") {
            steps{
                script {
                    sh '''
                        aws eks --region $AWS_DEFAULT_REGION update-kubeconfig --name $CLUSTER_NAME
                        kubectl replace --force -f staging.yaml --namespace=staging
                        '''
                }

            }
        }   
    }
}