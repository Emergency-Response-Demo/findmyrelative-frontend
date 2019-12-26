# Find My Relative portal

React based PWA frontend for the Find My Relative demo application.

The backend service can be found [here](https://github.com/Emergency-Response-Demo/find-service).

## Running Locally

* Set the `REACT_APP_BACKEND_URL` variable in the `run_local.sh` script to the correct backend service url.

* Set the `REACT_APP_MAPBOX_TOKEN` variable to a real Mapbox access token.

* After starting the backend service, run the application in development mode using `run_local.sh`.

## Deploy on OpenShift

* You can deploy using Dockerfile on OpenShift Webconsole or run the following command.
  
  `oc new-app --name frontend --strategy docker https://github.com/Emergency-Response-Demo/find-service`

## Deploying using Tekton Pipeline

* Prerequisite

    OpenShift v4.x Cluster. You can install using `OpenShift Pipelines Operator` from the Operator Hub.
    
    You will also use the Tekton CLI (tkn). Download the Tekton CLI by following [instructions](https://github.com/tektoncd/cli#installing-tkn) available on the CLI GitHub repository.

* Installation Steps

    1. Fork this repository so that you can create a trigger for any GitHub Event which will trigger the pipeline and deploy the new code.
    
    2. Clone the repository to your local machine.
    
        `git clone https://github.com/<your-github-username>/findmyrelative-frontend`
    
    3. Traverse to the pipeline folder.
    
        `cd findmyrelative-frontend/pipeline/`
        
    4. Login to your OpenShift Cluster.
    
    5. Create a new project `find-my-relative`
    
        `oc new-project find-my-relative`
    
    6. Install the Pipeline Resources,Task and Pipeline.
    
        1. Pipeline - There are two task in pipeline. First is Buildah which is a Cluster task and the other is a custom task which we are going to install in next step.
        
            Install pipeline using below command - 
        
            ` oc apply -f 03-pipelines/ `
         
        2. Tasks - There are two task in the Pipeline - 
            
            - buildah - This task build a image using the Dockerfile and then push it to repository which will specify in pipeline resource.
            
            - oc-apply-deployment - This task fetch the image from the registry and deploy it on the OpenShift Cluster.
            
            Here, Buildah is used as a Cluster Task. So, it comes pre-installed with pipeline operator. To install oc-apply-deployment use below command -
            
            `oc apply -f 02-tasks/`
        
        3. Pipeline Resources - First is git resource where we give git url of repository and second is image resource where the image will be pushed.
        
            Here we are using OpenShift Internal Registry but you can also use any external registry like DockerHub, Quay. 
            
            Before Installing Resources, Replace your git url of findmyrelative-frontend in `01-findmyrelative-ui-git-resource.yaml`
            
            Now, you can install using below command - 
            
            `oc apply -f 01-pipelineresources/` 
        
        Now, we are ready to run the pipeline. You can run it by using below command or Go to OpenShift Web Console -> find-my-relative Project -> Pipeline Tab -> Pipeline -> Click on pipeline and Start.
        
        ` tkn pipeline start findmyrelative-ui-pipeline -r source-git-repo=findmyrelative-ui-git-repo -r image-resource-name=findmyrelative-ui-image -s pipeline`  
        
        Also, You can start pipeline using pipeline run.      
        
        ` oc apply -f 04-pipelineruns/`
              
    7. Next Step is to create a trigger so that on any code change in GitHub the pipeline will start and deploy the new code. 
         
        Install Event Listener, Trigger Template and Trigger binding.
        
        ` oc apply -f 05-pipeline-triggers/`
        
        New pod will be created for Event listener. Get the url for Event Listener which we will need for creating Webhook - ` oc get route`.
    
    8. Create a webhook  -
    
        Firstly, create a GitHub Personal access token. Follow this [instructions](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line#creating-a-token) to create a GitHub token.
        
        The token should have the access - `public_repo`  and `admin:repo_hook`.  
        
        To create a webhook - Go to GitHub Repository -> Settings -> Webhooks -> Add webhook -> Add the EventListener url, the token as secret and select the event.
        
        Also, you can create a webhook using Webhook task which you can find in `03_create-webhook-task.yaml`. Follow below steps to create using a task - 
        
          1. Add your GitHub Personal access token and Random String data in `secret` in `02_webhook-secret.yaml`.
       
          2. In `04_ui-webhook-run.yaml` add your GitHub Username for `GitHubOrg` and `GitHubUser`. Add the Event Listener's url for `ExternalDomain`.
        
        Now, install the task and the task run.
        
        ` oc apply -f 06-github-webhooks/`
        
        If you go to Github, you can see a webhook created for the repository.   
        
    9. Now, when you change code and push it to repository. You can see a new pipelinerun is started.              
        
