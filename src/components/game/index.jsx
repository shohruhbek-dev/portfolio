import React, { useState, useEffect, useRef } from "react";
import cn from "./style.module.scss";

const GRID_SIZE = 20;
const SQUARE_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const INITIAL_FOOD = { x: 5, y: 5 };

const SnakeGame = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const gameLoop = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    gameLoop.current = setInterval(moveSnake, 200);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      clearInterval(gameLoop.current);
    };
  }, [snake]);

  const handleKeyPress = (event) => {
    switch (event.key) {
      case "ArrowUp":
        if (direction.y === 0) setDirection({ x: 0, y: -1 });
        break;
      case "ArrowDown":
        if (direction.y === 0) setDirection({ x: 0, y: 1 });
        break;
      case "ArrowLeft":
        if (direction.x === 0) setDirection({ x: -1, y: 0 });
        break;
      case "ArrowRight":
        if (direction.x === 0) setDirection({ x: 1, y: 0 });
        break;
      default:
        break;
    }
  };

  const moveSnake = () => {
    if (gameOver) return;
    const newSnake = [...snake];
    const head = { ...newSnake[0] };
    head.x += direction.x;
    head.y += direction.y;
    
    if (head.x < 0 || head.y < 0 || head.x >= GRID_SIZE || head.y >= GRID_SIZE ||
        newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
      setGameOver(true);
      clearInterval(gameLoop.current);
      return;
    }

    newSnake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
      setFood({
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE)
      });
      setScore(score + 1);
    } else {
      newSnake.pop();
    }
    setSnake(newSnake);
  };

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(INITIAL_FOOD);
    setScore(0);
    setGameOver(false);
    gameLoop.current = setInterval(moveSnake, 200);
  };

  return (
    <div className={cn.snakeGameContainer}>
      <h3>Snake Game</h3>
      <p>Score: {score}</p>
      <div className={cn.grid}>
        {Array.from({ length: GRID_SIZE }).map((_, row) => (
          <div key={row} className={cn.row}>
            {Array.from({ length: GRID_SIZE }).map((_, col) => {
              let isSnake = snake.some(segment => segment.x === col && segment.y === row);
              let isFood = food.x === col && food.y === row;
              return (
                <div key={col} className={cn.cell} style={{
                  backgroundColor: isSnake ? "lime" : isFood ? "red" : "black",
                }}></div>
              );
            })}
          </div>
        ))}
      </div>
      {gameOver && <button onClick={resetGame}>Restart Game</button>}
    </div>
  );
};

export default SnakeGame;