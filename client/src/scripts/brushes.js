import p5 from 'p5';
import './paint'
function pen() {
	// set the brush style
	p5.strokeWeight(p5.brushSize)
  
	// draw a line from current mouse point to previous mouse point
  p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY)

}

function marker() {
	// set the brush style
  p5.noStroke()
  
	// draw a circle at the current mouse point
  p5.circle(p5.mouseX, p5.mouseY, p5.brushSize * 20)
}

function beads() {
  // set the brush style
  p5.noStroke()

  // find the distance between the current and previous mouse points
  const distance = p5.dist(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY)

  // find the midpoint between the current and previous mouse points
  const midX = (p5.mouseX + p5.pmouseX) / 2
  const midY = (p5.mouseY + p5.pmouseY) / 2

  // draw a circle at the midpoint, with distance as its diameter
  p5.circle(midX, midY, distance)
}

function wiggle() {
  // set the brush style
  p5.strokeWeight(p5.brushSize)
  p5.noFill()

  // find the distance between the current and previous mouse points
  const distance = p5.dist(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY)

  // find the midpoint between the current and previous mouse points
  const midX = (p5.mouseX + p5.pmouseX) / 2
  const midY = (p5.mouseY + p5.pmouseY) / 2

  // find the angle of the direction the mouse is moving in
  const angle = Math.atan2(p5.mouseY - p5.pmouseY, p5.mouseX - p5.pmouseX)

  // find which way to flip the arc
  const flip = (p5.frameCount % 2) * Math.PI

  // draw the arc as a half circle 
  p5.arc(midX, midY, distance, distance, angle + flip, angle + Math.PI + flip)
}

function toothpick() {
  // set the brush style
  p5.noStroke()

  // move the origin (0,0) to the current mouse point
  p5.translate(p5.mouseX, p5.mouseY)

  // find the angle of the direction the mouse is moving in
  // then rotate the canvas by that angle
  const angle = Math.atan2(p5.mouseY - p5.pmouseY, p5.mouseX - p5.pmouseX)
  p5.rotate(angle)

  // set minumum width and height of the toothpick-shaped ellipse
	const minSize = 4
	
	// find the distance between current mouse point and previous mouse point
	const distance = p5.dist(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY)
	
	// draw the toothpick-shaped ellipse
  p5.ellipse(0, 0, distance * 2 * p5.brushSize + minSize , minSize)
}

function fountainPen() {
  // set the brush style
  p5.strokeWeight(p5.brushSize)
	const width = 5

  // set the number of times we lerp the line in the for loop
  const lerps = 16

	// repeat the slanted line with lerping
  for (let i = 0; i <= lerps - 1; i++) {

		// find the lerped x and y coordinates between the mouse points
    const x = p5.lerp(p5.mouseX, p5.pmouseX, i / lerps)
    const y = p5.lerp(p5.mouseY, p5.pmouseY, i / lerps)

		// draw a slanted line
    p5.line(x - width, y - width, x + width, y + width)
  }
}

function splatter() {
  // set the brush style
  p5.strokeWeight(p5.brushSize * 2)

  // set the number of times we lerp the point in the for loop
  const lerps = 8

	// repeat the point with lerping
  for (let i = 0; i < lerps; i++) {

		// find lerped x and y coordinates of the point
    const x = p5.lerp(p5.mouseX, p5.pmouseX, i / lerps + lerps)
    const y = p5.lerp(p5.mouseY, p5.pmouseY, i / lerps + lerps)

		// draw a point
    p5.point(x, y)
  }
}

function hatching() {
  // set the brush style
  p5.strokeWeight(p5.brushSize)

  // calculate the speed of the mouse
  let speed = Math.abs(p5.mouseX - p5.pmouseX) + Math.abs(p5.mouseY - p5.pmouseY)

  // make a vector by inverting X and Y values
  const vector = p5.createVector(p5.mouseY - p5.pmouseY, p5.mouseX - p5.pmouseX)
  
  // set the vector magnitude (the line length) based on the mouse speed
  vector.setMag(speed / 2)
  
  // set the number of times we lerp the line
  const lerps = 3

  // repeat the line with lerping
  for (let i = 0; i < lerps; i++) {

		// find the lerped X and Y coordinates
    const x = p5.lerp(p5.mouseX, p5.pmouseX, i / lerps)
    const y = p5.lerp(p5.mouseY, p5.pmouseY, i / lerps)

		// draw a line
    p5.line(x - vector.x, y - vector.y, x + vector.x, y + vector.y)
  }
}

function sprayPaint() {
	// set the brush style
  p5.strokeWeight(p5.brushSize * 0.1)

	// find the speed of the mouse movement
  const speed = Math.abs(p5.mouseX - p5.pmouseX) + Math.abs(p5.mouseY - p5.pmouseY)

	// set minimum radius and spray density of spraypaint brush
	const minRadius = 10
	const sprayDensity = 80
  
  // find radius of the spray paint brush and radius squared
  const r = speed + minRadius
  const rSquared = r * r

	// set the number of times we lerp the points in the for loop
	const lerps = 10

  // repeat the random points with lerping
  for (let i = 0; i < lerps; i++) {
    
    // find the lerped X and Y coordinates
    const lerpX = p5.lerp(p5.mouseX, p5.pmouseX, i / lerps)
    const lerpY = p5.lerp(p5.mouseY, p5.pmouseY, i / lerps)
    
    // draw a bunch of random points within a circle
    for (let j = 0; j < sprayDensity; j++) {

      // pick a random position within the circle
      const randX = p5.random(-r, r)
      const randY = p5.random(-1, 1) * Math.sqrt(rSquared - randX * randX)

      // draw the random point
      p5.point(lerpX + randX, lerpY + randY)
    }
  }
}