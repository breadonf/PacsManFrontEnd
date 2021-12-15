## PacsMan - Productivity Booster
Website deployed on url: https://taskmanager-one.vercel.app/
github repository url: https://github.com/breadonf/PacsManFrontEnd

A React based productivity boost web application.

UI design: Material UI
https://mui.com/

Routing: Next js
https://nextjs.org/

Calendar View: React-big-calendar
https://github.com/jquense/react-big-calendar

## Getting Started

To install the necessary dependencies:

npm install

Run the development server:

npm run dev

## Local testing:

For API routes:
backend should also be installed and change the apiUrl inside the frontend files in order to run the website locally.

## testing account:
username: test
password: example

## Directory
file-system based routing:
The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes]

```PacsManFrontEnd
PacsManFrontEnd                         
├─ components                           
│  ├─ homeComponents                    
│  │  └─ hello.js                       
│  ├─ layout                            
│  │  ├─ Layout.js                      
│  │  └─ MainNavBar.js                  
│  ├─ login                             
│  │  └─ LoginForm.js                   
│  ├─ tasks                             
│  │  ├─ taskCalendar.js                
│  │  ├─ taskDetail.js                  
│  │  ├─ taskEditForm.js                
│  │  ├─ taskForm.js                    
│  │  ├─ taskItems.js                   
│  │  ├─ taskList.js                    
│  │  └─ taskTable.js                   
│  └─ ui                                
│     └─ charts.js                      
├─ cypress                              
│  ├─ fixtures                          
│  │  └─ example.json                   
│  ├─ integration                       
│  │  ├─ 1-getting-started              
│  │  │  └─ todo.spec.js                
│  │  ├─ 2-advanced-examples            
│  │  │  ├─ actions.spec.js             
│  │  │  ├─ aliasing.spec.js            
│  │  │  ├─ assertions.spec.js          
│  │  │  ├─ connectors.spec.js          
│  │  │  ├─ cookies.spec.js             
│  │  │  ├─ cypress_api.spec.js         
│  │  │  ├─ files.spec.js               
│  │  │  ├─ local_storage.spec.js       
│  │  │  ├─ location.spec.js            
│  │  │  ├─ misc.spec.js                
│  │  │  ├─ navigation.spec.js          
│  │  │  ├─ network_requests.spec.js    
│  │  │  ├─ querying.spec.js            
│  │  │  ├─ spies_stubs_clocks.spec.js  
│  │  │  ├─ traversal.spec.js           
│  │  │  ├─ utilities.spec.js           
│  │  │  ├─ viewport.spec.js            
│  │  │  ├─ waiting.spec.js             
│  │  │  └─ window.spec.js              
│  │  └─ sample.js                      
│  ├─ plugins                           
│  │  └─ index.js                       
│  └─ support                           
│     ├─ commands.js                    
│     └─ index.js                       
├─ lib                                  
│  └─ auth.js                           
├─ pages                                
│  ├─ calendar                          
│  │  └─ index.js                       
│  ├─ form                              
│  │  └─ index.js                       
│  ├─ login                             
│  │  └─ index.js                       
│  ├─ table                             
│  │  └─ index.js                       
│  ├─ task                              
│  │  └─ [taskId]                       
│  │     └─ index.js                    
│  ├─ taskEditForm                      
│  │  └─ [taskId]                       
│  │     └─ index.js                    
│  ├─ index.js                          
│  └─ _app.js                           
├─ public                               
│  ├─ favicon.ico                       
│  └─ vercel.svg                        
├─ store                                
│  └─ app-context.js                    
├─ styles                               
│  └─ globals.css                       
├─ cypress.json                         
├─ next.config.js                       
├─ package-lock.json                    
├─ package.json                         
└─ README.md                            

```
---