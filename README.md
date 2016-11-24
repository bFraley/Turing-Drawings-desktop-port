Turing-Drawings
===============

Randomly generated Turing machines draw images and animations on a 2D canvas.
A simple JavaScript+HTML5 demo. This project is distributed under a modified
BSD license.

You can try Turing Drawings at the following URL:
[http://maximecb.github.com/Turing-Drawings/](http://maximecb.github.com/Turing-Drawings/)

### Desktop Port
This is a desktop port of the Turing Drawings project by Maxime Chevalier-Boisvert
https://github.com/maximecb/Turing-Drawings.

It has been ported using Electron. New and interesting features will be added,
utilizing the file system and native API capabilities that Electron provides.

To launch Turing Drawings on your OS:

`git clone https://github.com/bFraley/Turing-Drawings-desktop-port`

Be sure to have `npm` installed and `cd Turing-Drawings-desktop-port`

`npm install`

`npm start`


Original project README content below:

Below is a sample of the kinds of patterns Turing Drawings can generate:
* [Fractal](http://maximecb.github.com/Turing-Drawings/#5,4,4,2,1,1,3,2,4,3,1,2,2,3,1,2,1,3,2,0,2,2,3,2,3,0,2,3,2,4,2,2,0,2,0,1,1,0,2,3,0,1,2,1,2,3,3,3,2,0,1,1,3,2,2,0,2,2,3,3,2,0)
* [Scan](http://maximecb.github.com/Turing-Drawings/#4,3,0,1,2,3,1,0,1,1,0,2,2,1,3,2,2,0,1,3,0,2,0,1,2,2,2,2,0,0,1,3,3,1,3,2,2,0)
* [Matrix](http://maximecb.github.com/Turing-Drawings/#6,4,1,2,0,1,3,1,4,3,3,1,3,0,5,2,1,4,2,0,2,1,1,4,1,0,1,3,0,5,1,3,1,1,3,0,1,1,2,3,3,5,1,1,3,1,0,3,1,2,1,1,1,1,3,3,3,2,2,2,3,3,2,1,3,5,3,0,2,3,2,4,1,1)
* [Movement](http://maximecb.github.com/Turing-Drawings/#3,3,1,1,3,0,1,1,2,1,2,2,2,2,1,2,2,1,1,3,1,1,0,2,1,1,1,2,0)
* [Computation](http://maximecb.github.com/Turing-Drawings/#2,5,1,1,2,1,3,0,1,4,2,1,2,1,1,4,2,0,2,0,0,2,2,0,3,1,1,2,3,0,3,2)
* [Complex](http://maximecb.github.com/Turing-Drawings/#3,3,2,1,2,1,2,1,0,2,1,2,1,3,1,1,1,1,2,0,1,1,3,2,2,0,0,1,1)
* [Quads](http://maximecb.github.com/Turing-Drawings/#4,3,2,2,2,1,1,0,3,1,2,2,2,1,1,1,0,3,2,3,1,1,0,0,1,1,2,2,2,1,1,2,1,2,1,2,1,3)
* [Fins](http://maximecb.github.com/Turing-Drawings/#4,3,0,2,3,3,1,3,2,1,0,3,1,0,3,2,3,2,1,2,0,1,3,1,1,2,1,1,0,0,1,3,2,2,0,0,2,1)
* [Blades](http://maximecb.github.com/Turing-Drawings/#4,3,3,1,0,1,2,2,1,2,3,1,1,3,3,1,0,3,1,3,3,1,3,2,2,3,0,1,0,3,2,0,3,2,2,2,1,0)
* [Chaos](http://maximecb.github.com/Turing-Drawings/#4,3,3,1,0,2,2,3,1,2,0,1,1,3,0,1,3,2,1,3,2,2,3,2,1,2,2,2,3,2,2,0,1,1,2,2,2,0)
* [Rapids](http://maximecb.github.com/Turing-Drawings/#3,6,2,2,3,2,4,0,0,1,0,2,1,2,1,1,0,1,2,3,2,3,0,2,1,0,2,5,3,2,5,2,2,4,1,1,5,0,2,4,3,0,4,0,0,1,1,2,1,3,2,1,0,2,2,0)
* [Filler](http://maximecb.github.com/Turing-Drawings/#3,4,2,2,0,1,2,0,2,1,0,1,1,1,2,3,0,0,1,1,0,2,3,0,3,0,1,2,2,1,1,2,2,2,1,0,3,0)
* [Seizures](http://maximecb.github.com/Turing-Drawings/#4,3,3,1,2,3,1,0,3,1,3,1,2,3,2,2,0,1,2,1,3,2,3,0,2,0,3,1,2,2,2,2,3,1,1,1,2,3)
* [Spill](http://maximecb.github.io/Turing-Drawings/#4,3,1,2,2,3,1,0,3,1,3,1,1,2,2,1,1,3,1,0,2,1,0,2,2,0,0,1,3,3,2,3,3,2,2,3,1,3)
* [Pangaea](http://maximecb.github.io/Turing-Drawings/#6,3,0,1,3,1,1,2,1,2,1,2,2,0,3,1,3,4,1,2,2,1,0,3,1,2,1,2,3,4,1,0,5,1,1,2,1,3,2,2,0,2,1,0,4,2,2,4,2,1,0,2,0,1,1,0)
* [Shooting Stars](http://maximecb.github.io/Turing-Drawings/#6,4,4,2,2,4,3,3,2,2,3,1,2,2,0,2,0,3,1,3,4,1,2,2,1,0,3,3,1,2,2,0,3,1,0,4,1,3,4,1,1,0,1,3,0,1,0,5,2,2,5,1,0,2,1,0,4,3,3,3,1,1,1,2,3,5,3,1,4,1,2,4,1,1)
* [Holes](http://maximecb.github.io/Turing-Drawings/#3,3,2,2,1,0,1,2,0,2,3,2,2,0,0,1,1,0,2,1,1,1,3,1,2,0,2,2,3)
