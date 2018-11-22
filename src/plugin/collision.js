/* eslint-disable*/
window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60)
    }
  )
})()

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

// full screen dimensions
let cw = window.innerWidth
let ch = window.innerHeight

// set canvas dimensions
canvas.width = cw
canvas.height = ch

let particles = []
let partNum = 5 // will be limited depending on window width
let speed = 5

drawParticles()

function NewParticle (mx, my, r) {
  this.x = mx
  this.y = my
  this.vx = (Math.random() * speed) / 2 - speed / 10
  this.vy = (Math.random() * speed) / 2 - speed / 10
  this.r = r
  this.color = '#' + Math.floor(Math.random() * 16777215).toString(16)
}

function drawParticles () {
  let allRad = 0

  for (let i = 0; i < partNum; i++) {
    let r = 50
    let x = allRad + r
    let y = i * 4 + 10
    allRad += r * 2

    // Limit number of particles if they don't fit horizontally
    if (allRad < cw) {
      particles.push(new NewParticle(x, y, r))
    }
  }

  let t = particles.length

  while (t--) {
    let p = particles[t]
    ctx.beginPath()
    ctx.fillStyle = p.color
    ctx.arc(p.x, p.y, p.r, Math.PI * 2, false)
    ctx.shadowColor = p.color
    ctx.shadowBlur = 20
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.fill()
  }
}

function animate (i) {
  let p = particles[i]

  // Move
  p.x += p.vx
  p.y += p.vy

  // Make balls bounce off the walls
  if (p.y <= 0 + p.r && p.vy < 0) {
    p.vy *= -1
  }
  if (p.y >= ch - p.r && p.vy > 0) {
    p.vy *= -1
  }
  if (p.x <= 0 + p.r && p.vx < 0) {
    p.vx *= -1
  }
  if (p.x >= cw - p.r && p.vx > 0) {
    p.vx *= -1
  }

  // Draw a new frame
  ctx.beginPath()
  ctx.fillStyle = p.color
  ctx.arc(p.x, p.y, p.r, Math.PI * 2, false)
  ctx.shadowColor = p.color
  ctx.shadowBlur = 20
  ctx.shadowOffsetX = 0
  ctx.shadowOffsetY = 0
  ctx.fill()
}

function detectCollisions (i) {
  for (let t = 0; t < particles.length; t++) {
    if (i != t) {
      // Make sure it's not comparing the same ball
      let a = particles[i]
      let b = particles[t]

      // First check if balls are close enough to collide
      if (
        a.x + a.r + b.r > b.x &&
        a.x < b.x + a.r + b.r &&
        a.y + a.r + b.r > b.y &&
        a.y < b.y + a.r + b.r
      ) {
        let distance = Math.sqrt(
          (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y)
        )

        // Check if balls overlap
        if (distance < a.r + b.r) {
          calculateNewVelocities(a, b)
          return true
        }
      }
    }
  }
}

function calculateNewVelocities (a, b) {
  let mass1 = a.r
  let mass2 = b.r
  let velX1 = a.vx
  let velX2 = b.vx
  let velY1 = a.vy
  let velY2 = b.vy

  let newVelX1 = (velX1 * (mass1 - mass2) + 2 * mass2 * velX2) / (mass1 + mass2)
  let newVelX2 = (velX2 * (mass2 - mass1) + 2 * mass1 * velX1) / (mass1 + mass2)
  let newVelY1 = (velY1 * (mass1 - mass2) + 2 * mass2 * velY2) / (mass1 + mass2)
  let newVelY2 = (velY2 * (mass2 - mass1) + 2 * mass1 * velY1) / (mass1 + mass2)

  a.vx = newVelX1
  b.vx = newVelX2
  a.vy = newVelY1
  b.vy = newVelY2

  a.x = a.x + newVelX1
  a.y = a.y + newVelY1
  b.x = b.x + newVelX2
  b.y = b.y + newVelY2
}
let requestID;
function update () {
  requestID = requestAnimationFrame(update)
  ctx.clearRect(0, 0, canvas.width, canvas.height) // Clear canvas before drawing a new frame

  let i = particles.length

  while (i--) {
    animate(i)
    detectCollisions(i)
  }
}

requestID = requestAnimationFrame(update)
