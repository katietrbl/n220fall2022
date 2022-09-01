function
setup()
{
    createCavnas(500,500);
}

function
draw()
{
    fill(166,158,156);
    arc(250,250,300,300,radians(0),radians(360));

    triangle(58, 25, 72, 34, 80, 10);
  triangle(42, 25, 28, 34, 20, 10);

  // head
  ellipse(50, 50, 60, 60);

  // right whiskers
  line(70, 50, 90, 50);
  line(70, 45, 90, 37);
  line(70, 55, 90, 63);
  // left whiskers
  line(30, 50, 10, 50);
  line(30, 45, 10, 37);
  line(30, 55, 10, 63);
}