pipeline {
    agent any
    
    environment {
        registryCredentials = credentials('nexus') // Assuming 'nexus' is the ID of your Jenkins credentials for Docker registry
        registry = "192.168.33.10:8083"
        token = registryCredentials.token
    }

    stages {
        stage('Install dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        
        stage('Start application') {
            steps {
                script {
                    sh 'npm install mongoose'
                }
            }
        }
        
        stage('Docker compose') {
            steps {
                script {
                    sh 'docker-compose build'
                }
            }
        }
        
        stage('SonarQube Analysis') {
            steps {
                script {
                    def scannerHome = tool 'scanner'
                    withSonarQubeEnv {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }
        
        stage('Deploy to Nexus') {
            steps {
                script {
                    docker.withRegistry("http://${registry}", tokenCredentialId: 'nexus') {
                        sh 'docker push $registry/nodemongoapp:5.0'
                    }
                }
            }
        }
    }
}
