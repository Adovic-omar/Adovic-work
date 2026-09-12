# Define tasks list
tasks = []

def add_task(title, description, due_date):
    """Adds a new task matching the assignment dictionary structure."""
    task = {
        "title": title.strip(),
        "description": description.strip(),
        "due_date": due_date.strip(),
        "completed": False  # Initial state as requested in assignment details
    }
    tasks.append(task)
    print("Task added successfully!")
    return True

def mark_task_as_complete(index, tasks=tasks):
    """Marks a task as complete using its index position."""
    if 0 <= index < len(tasks):
        tasks[index]["completed"] = True
        print("Task marked as complete!")
        return True
    else:
        print("Error: Invalid task index.")
        return False

def view_pending_tasks(tasks=tasks):
    """Displays only tasks where completed is False."""
    pending_tasks = [t for t in tasks if not t["completed"]]
    
    if not pending_tasks:
        print("No working currently")
        return
        
    print("\n--- Pending Tasks ---")
    for idx, task in enumerate(tasks):
        if not task["completed"]:
            print(f"[{idx}] Title: {task['title']} | Due: {task['due_date']} | Desc: {task['description']}")

def calculate_progress(tasks=tasks):
    """Calculates the percentage of completed tasks."""
    if not tasks:
        return 0.0
        
    completed_count = sum(1 for t in tasks if t["completed"])
    progress = (completed_count / len(tasks)) * 100
    return progress