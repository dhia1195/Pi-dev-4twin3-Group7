pipeline {
    agent any
    
    environment {
        registryCredentials = "nexus"
        registry = "192.168.56.130:8081"
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
                    docker.withRegistry("http://${registry}", registryCredentials) {
                        sh('docker push $registry/nodemongoapp:5.0')
                    }
                }
            }
        }
    }
}
