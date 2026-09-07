class Shape:
    def __init__(self, name):
        self.name = name

    def area(self):
        pass

    def perimeter(self):
        pass


class Rectangle(Shape):
    def __init__(self, length, width):
        super().__init__("Rectangle")
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width

    def perimeter(self):
        return 2 * (self.length + self.width)


class Square(Shape):
    def __init__(self, side):
        super().__init__("Square")
        self.side = side

    def area(self):
        return self.side * self.side

    def perimeter(self):
        return 4 * self.side


class Triangle(Shape):
    def __init__(self, base, height):
        super().__init__("Triangle")
        self.base = base
        self.height = height

    def area(self):
        return 0.5 * self.base * self.height

    def perimeter(self):
        hypotenuse = (self.base ** 2 + self.height ** 2) ** 0.5
        return self.base + self.height + hypotenuse


rectangle = Rectangle(20, 12)
square = Square(10)
triangle = Triangle(3, 4)

print("Rectangle")
print("Area:", rectangle.area())
print("Perimeter:", rectangle.perimeter())

print("\nSquare")
print("Area:", square.area())
print("Perimeter:", square.perimeter())

print("\nTriangle")
print("Area:", triangle.area())
print("Perimeter:", triangle.perimeter())