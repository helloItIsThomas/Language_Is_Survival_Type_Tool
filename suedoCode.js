/*

Ok
I want to make a letter that looks like this.

 ______
|  ____|
| |  
| |____
|______|

that is defined by its anchor points with lines drawn between points.

I have a function that makes particles (circles) and adds them to a gravity engine.

I have a function that makes a large box (rectangle) that acts as a ground to the particles.

I have defined a single constraint.
I am checking if there is a previous particle. If there is, I am adding a copy of the constraint between these two particles.
If there is no previous particle, then I am setting it to static, aka it isn't being affected by the engine.
This means that each connection is exactly the same betweeen each particle.

I need for each connection to have the same stiffness, but different lengths.
The lengths will be determined by the original distance from each particle before adding any forces to them.

Right now the position of each particle is being set through a for loop.
Instead, I need to change the particle position to each x&y spot in the pointVect array.
DONE          I also need to change the amount of particles to the length of the pointVect array.



*/
