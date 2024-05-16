import React, { useState, useEffect } from "react";
import { bubbleSort, insertionSort, selectionSort } from "./algorithms";
import "./style.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import img from "./../assets/satvik.jpeg";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [algorithm, setAlgorithm] = useState("");
  const [current, setCurrent] = useState(null);
  const [compare, setCompare] = useState(null);
  const [sorted, setSorted] = useState([]);
  const [speed, setSpeed] = useState(50);
  const [numElements, setNumElements] = useState(25);
  const [details, setDetails] = useState({
    elements: 50,
    speed: "Normal",
    space: "O(n^2)",
    swaps: 0,
  });

  useEffect(() => {
    resetArray();
  }, []);

  useEffect(() => {
    const updateDetails = () => {
      setDetails((prevDetails) => ({
        ...prevDetails,
        elements: array.length,
      }));
    };
    updateDetails();
  }, [array]);

  const generateRandomArray = (size) => {
    const arr = [];
    for (let i = 0; i < size; i++) {
      arr.push(Math.floor(Math.random() * 400) + 10);
    }
    return arr; // Add return statement here
  };

  const resetArray = () => {
    const arr = generateRandomArray(numElements); // Pass numElements to generateRandomArray
    setArray(arr);
    setCurrent(null);
    setCompare(null);
    setSorted([]);
    setDetails({ ...details, elements: numElements }); // Update elements count in details
  };

  const sort = async () => {
    let sortFunc;
    switch (algorithm) {
      case "Bubble Sort":
        sortFunc = bubbleSort;
        break;
      case "Insertion Sort":
        sortFunc = insertionSort;
        break;
      case "Selection Sort":
        sortFunc = selectionSort;
        break;
      default:
        break;
    }

    if (sortFunc) {
      const result = await sortFunc(
        array,
        setArray,
        setCurrent,
        setCompare,
        setSorted,
        setDetails
      );
      setArray(result);
    }
  };

  const handleChangeSpeed = (e) => {
    setSpeed(parseInt(e.target.value));
    setDetails({ ...details, speed: e.target.value });
  };

  return (
    <div className="sorting-visualizer">
      <div className="navbar">
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 style={{ color: "#0f8548", fontSize: "28px" }}>Sorta</h2> {"  "} -
          Algorithm Visualizer
        </h2>

        <div className="profile">
          <div className="social-icons">
            <a target="_blank" href="https://github.com/satviksrivastava7">
              <FaGithub />
            </a>
            <a target="_blank" href="https://linkedin.com/in/satviksrivastava7">
              <FaLinkedin />
            </a>
            <a target="_blank" href="https://instagram.com/satviksrivastava7">
              <FaInstagram />
            </a>
          </div>
          <div className="profile-image">
            <img src={img} className="image" alt="Satvik Srivastava" />
          </div>
        </div>
      </div>
      <div className="array">
        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                height: `${value}px`,
                backgroundColor: sorted.includes(idx)
                  ? "#21D375"
                  : idx === current
                  ? "#61dafb"
                  : idx === compare
                  ? "#FF6961"
                  : "#282828",
                transition: `10ms`,
              }}
            ></div>
          ))}
        </div>
        <div className="controls">
          <button className="btn" onClick={resetArray}>
            Generate New Array
          </button>
          <select
            className="selector"
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
          >
            <option value="" disabled selected>
              Select Sorting Algorithm
            </option>
            <option>Bubble Sort</option>
            <option>Insertion Sort</option>
            <option>Selection Sort</option>
          </select>
          <div className="sizeSelect">
            <span>Array Size:</span>
            <input
              type="number"
              min="5"
              max="100"
              value={numElements}
              onChange={(e) => setNumElements(parseInt(e.target.value))}
              className="number"
            />
          </div>
          <button className="btn-sort" onClick={sort}>
            Start Sorting!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortingVisualizer;
