from datetime import datetime

def validate_task_title(title):
    """Returns True if title is not empty, False otherwise."""
    return len(title.strip()) > 0

def validate_task_description(description):
    """Returns True if description is not empty, False otherwise."""
    return len(description.strip()) > 0

def validate_due_date(due_date):
    """Validates if due_date is in YYYY-MM-DD format."""
    try:
        datetime.strptime(due_date.strip(), "%Y-%m-%d")
        return True
    except ValueError:
        return False