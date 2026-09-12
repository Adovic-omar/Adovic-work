# Import functions from task_manager package modules
from task_manager.validation import validate_task_title, validate_task_description, validate_due_date
from task_manager.task_utils import add_task, mark_task_as_complete, view_pending_tasks, calculate_progress

def main():
    while True:
        print("\nTask Management System")
        print("1. Add Task")
        print("2. Mark Task as Complete")
        print("3. View Pending Tasks")
        print("4. View Progress")
        print("5. Exit")
        choice = input("Enter your choice (1-5): ").strip()

        if choice == "1":
            title = input("Enter task title: ")
            description = input("Enter task description: ")
            due_date = input("Enter due date (YYYY-MM-DD): ")
            
            # Validate input data before passing it to task creation logic
            if not validate_task_title(title):
                print("Validation Error: Task title cannot be empty.")
            elif not validate_task_description(description):
                print("Validation Error: Task description cannot be empty.")
            elif not validate_due_date(due_date):
                print("Validation Error: Due date must match YYYY-MM-DD format.")
            else:
                add_task(title, description, due_date)
            
        elif choice == "2":
            try:
                view_pending_tasks()
                idx = int(input("Enter the index number ([#]) of the task to complete: "))
                mark_task_as_complete(idx)
            except ValueError:
                print("Please enter a valid numeric integer index.")
                
        elif choice == "3":
            view_pending_tasks()
            
        elif choice == "4":
            progress = calculate_progress()
            print(f"Current completion progress: {progress:.2f}%")
            
        elif choice == "5":
            print("Exiting the program...")
            break
        else:
            print("Invalid choice. Please choose an option from 1-5.")

if __name__ == "__main__":
    main()