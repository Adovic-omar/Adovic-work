## try {} catch(e){} throw
## try except exception as (e)
## try , except<>
## raise
## Syntax , Name , TypeError , ValueError
## ZeroDivision
## Index-Error<list> , KeyError
### Exception as e:

try:
    #raise ValueError("Invalid age")
    result=10/0
    print("line 13")
except ZeroDivisionError:
    print("Zero division")
except Exception as e:
    print(e)
finally:
    print("completed error handling")

## raise()


class pos(Exception):
    pass

raise pos("Not Enough Items")
   