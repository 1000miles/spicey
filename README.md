# Spicey - Fight for your life with chilli

## Story

1. We are in the year 2050. Due to greed of the powerfullest and climate change most cities and communities have been destroyed. Those who survived found refuge in the forest, rural areas and on islands. Food is very rare. 
2. This game is about searching, finding, exchanging, saving and sharing food.
3. The goal is to accumulate as much and various food as possible and prevent enemies from taking away the food.
4. Once food is found or won in a battle, the food inventory will increase and the player will be awarded with points.
5. Chances:
    - Hiding food from enemies or eating them before enemies catch them increases the points.
    - Hungry wolves who eat humans can be killed by feeding with chilli or other spicy stuff.
6. Risks:
    - Wolves appear randomly and attack players.
    - Food can get rotten easily.
    - Big sticks and stones prevent players from moving forward.
7. Game over
    - tba

## Breakdowns

## Goal of Day 1

1. Setup
    - boilerplate:
        - [x] index.html
        - [x] style.css
        - [x] p5 libaries: p5 play, p5 dom
    - folders
        - [x] assets/
        - [x] css/
        - [x] js/
    - files
        - [x] constants.js
        - [x] preload.js
        - [x] obstacle.js
        - [x] food.js
        - [x] player.js
        - [x] game.js
        - [x] main.js

2. Game concept
    - [x] Create a background story
    - [x] Define an environment
    - [x] Define the characters
    - [x] Define obstacles
    - [ ] Set conditions to win and lose

### Goal of Day 2

1. Background
    - [x] Set image background

2. Obstacles
    - [x] Learn how to move obstacles in a loop
    - [x] Learn how to drop obstacles

3. Player
    - [x] Make player1 visible

## Goal of Day 3

### Player

**Movement**

- [x] Logic
    - [x] Create a function to move the player
        - [x] Make player 1 move on keyPressed();
        - [x] Set conditions for directions;
        - [x] Ensure player does not move out of the screen
        - [ ] Set conditions for speed (extra)
        - [ ] Make player jump (extra)
- [x] Visualization
    - [x] Use ~~sprites with~~ images that contain left, right, up, down images

### Obstacles

- [x] Logic
    - [x] Create plane 1 that moves from left to right in a loop
        - [x] it should throw objects from the plane
        - [x] it should define the frequency of throwing food

- [x] Visualization
    - [x] Throw chilli (weapon) from the plane 1
    - [x] Throw random food from plane 2 (extra)

## Goal of Day 4

### Obstacles

**Plane**

- [x] Logic
    - [x] Create an array of food images and pull food from it randomly (extra)
    - [x] Create a function for the player to catch the food from the plane
    - [ ] Use DOM manipulation to display scoring
        - [x] Calculate points won when food has been caught

        - ~~[x] Calculate points lost when food has been caught~~ changed concept!
- [x] Visualization
    - [x] Show different food types falling
    - [x] Show player scoring

**Collisions**

- [x] Logic
    - [x] Create a function to check collisions
    - [x] Set conditions when and how often obstacle appears and when it disappears
    - [x] Set the visual frame and frequency for obstacles

- [ ] Visualization
    - [x] Let obstacle (wolf) appear on the ground
