# Task Management App

## Assets

- Logo of my App. Provided to Auth0 and placed on every page of my App just for look.

## Authorization and Context Provider

- The whole app is wrapped in Auth0Provider so the app is not available without authenticating. The app is also wrapped with a context provider so every page of the app can access the tasks at all times once authenticated and logged in. The login and register buttons are what calls useAuth and redirects the user to the appropriate page. The AuthGuard is meant to wrap individual components. Without proper authentication, it redirects the user to the login page.

## Components

- This is where each page in the app lives. HomePage is essentially the "login" page or landing page. Once authenticated and logged in, the user is shown their tasks through the Profile page. IF user is authenticated they are shown view tasks on the Navbar. Where they can add, remove, mark as complete, or edit a task. The id given to a new task is the current Date converted to a string, ensuring they are all unique.

## Task Logic

- This is where a reducer lives to handle each action the user picks. Meaning, Add task, remove task, and edit task all change state differently and have different payloads based on user selection. For example ADD_Task has various properties that ultimately add a new task and display it to the user. The payload for add and edit a task use the Task interface to include all the neccesary properties like id, title, description, etc.
