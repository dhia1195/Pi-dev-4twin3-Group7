pipeline {
    agent any

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
    }
}
