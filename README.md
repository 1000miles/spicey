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

- [ ] Logic
    - [ ] Create a function to move the player
        - [ ] Make player 1 move on keyPressed();
        - [ ] Set conditions for directions;
        - [ ] Set conditions for speed; (extra)
- [ ] Visualization
    - [ ] Use sprites with images that contain left, right, up, down

### Obstacles

**Collisions**

- [ ] Logic
    - [ ] Create a function to check collisions
    - [ ] Set conditions when and how often obstacle appears and when it disappears
    - [ ] Set the visual frame and frequency for obstacles

- [ ] Visualization
    - [ ] Let obstacle throw objects from top to bottom
    - [ ] Let obstacle appear on the ground
