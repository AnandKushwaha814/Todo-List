# Todo-List
## This Todo List is created using React JS and Tailwind Css.
![Screenshot 2024-08-30 134017](https://github.com/user-attachments/assets/49a17297-d117-4155-8ce7-6f276d6a2fb6)
1.State Management:

* `tasks`: An array storing the list of tasks.
* `newTask`: A string representing the current task being input.
* `isEditing`: A boolean flag indicating if a task is being edited.
* `currentTaskIndex`: Tracks the index of the task being edited.
* `message`: A string for displaying notifications when tasks are added, edited, or deleted.
2. Functionality:

* Adding a Task: Users can input a task and add it to the list. If in editing mode, the task is updated instead.
* Editing a Task: Clicking the "Edit" button next to a task allows the user to modify it, updating the list on submission.
* Deleting a Task: Tasks can be removed from the list with the "Delete" button.
* Notifications: Users receive feedback via a temporary message when a task is added, edited, or deleted. These messages are automatically cleared after 3 seconds.
3. UI:
  
* The component uses Tailwind CSS for styling.
* It provides input fields, buttons for adding/updating tasks, and displays the list of tasks with options to edit or delete them.
* The notification messages appear above the task list when an action occurs.
