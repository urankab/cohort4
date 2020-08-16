# Example 1

# def named(name, age):
#     print(name, age)

# def named(**kwargs):
#     print(kwargs)

# details = {'name': 'Bob', 'age': 23}

# named(**details)

# Example 2
# **kwargs normally used to take unlimited amount of args

def named(**kwargs):
    print(kwargs)

def print_nicely(**kwargs):
    named(**kwargs)
    for arg, value in kwargs.items():
        print(f'{arg}: {value}')

print_nicely(name='bob', age=12)
