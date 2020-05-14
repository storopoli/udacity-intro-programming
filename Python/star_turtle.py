import turtle
hexagon = turtle.Turtle()
hexagon.color("red")

for i in range(8):
    hexagon.forward(100)
    hexagon.right(135)
turtle.done()  # leaves the screen open