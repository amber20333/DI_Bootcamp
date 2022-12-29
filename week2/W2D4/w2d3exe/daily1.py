import math
import turtle

class Circle:

    def __init__(self, radius: int):
        self.radius = radius
        self.diameter = self.radius * 2

    @classmethod
    def from_diameter(cls, diameter: int):
        return Circle(diameter // 2)

    @staticmethod
    def make_sentence(sentence):
        print("CIRCLE said: ", sentence)

    @property
    def circle_area(self):
        return math.pi * (self.radius ** 2)

    def draw(self):
        t = turtle.Turtle()
        t.circle(self.radius)

    def __add__(self, other_c):
        return Circle(radius=self.radius + other_c.radius)

    def __lt__(self, other_c):
        return self.circle_area < other_c.circle_area

    def __gt__(self, other_c):
        return self.circle_area > other_c.circle_area

    def __eq__(self, other_c):
        return self.circle_area == other_c.circle_area

    # user friendly
    def __str__(self) -> str:
        return str(self.radius)

    # readable, but also applicable
    def __repr__(self):
        return str(self.radius)

c1 = Circle(2)
c2 = Circle.from_diameter(10)

c3 = c1 + c2 
c4 = Circle(radius=c3.radius)
c5 = Circle(int(repr(c1)))

circles = [c4, c2, c3, c1, c5]
print(circles)

circles.sort()
print(circles)