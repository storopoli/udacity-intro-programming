import turtle
hexagon = turtle.Turtle()
hexagon.color("red")

sides = 6  # hexagon

for side in range(6):
    hexagon.forward(100)
    hexagon.right(360/sides)
turtle.done()  # leaves the screen open