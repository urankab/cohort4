class Student:
    def __init__(self, name, grades):
        self.name = name
        self.grades = grades

    def average_grade(self):
        return sum(self.grades)/ len(self.grades)


student = Student('bob', (90, 80, 91, 98))
student2 = Student('cat', (100, 80, 71, 90))

print(student.average_grade())
print(student2.average_grade())
