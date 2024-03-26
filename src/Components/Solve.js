import React, { useState } from "react";
import "./Style.css";

const Solve = () => {
	const blocks = [
		"const random = require('random')",
		`while (attempts < maxAttempts) {
            const guess = parseInt(prompt("\\nEnter your guess: "));
            attempts++;
            
            if (guess < secretNumber) {
                console.log("Too low! Try again.");
            } else if (guess > secretNumber) {
                console.log("Too high! Try again.");
            } else {
                console.log(\`Congratulations! You've guessed the number (\${secretNumber}) in \${attempts} attempts!\`);
                break;
            }
        }
    `,
		`function guessTheNumber() {
        console.log("Welcome to Guess the Number!");
        console.log("I've selected a random number between 1 and 100. Can you guess it?");
        
        const secretNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;
        const maxAttempts = 10;
    `,
		"guessTheNumber();",
		`
        if (attempts === maxAttempts) {
            console.log(\`\\nSorry, you've run out of attempts. The secret number was \${secretNumber}.\`);
        }
    `,
	];

	const [arrangedBlocks, setArrangedBlocks] = useState(
		Array(blocks.length).fill("")
	);

	const handleDragStart = (e, index) => {
		e.dataTransfer.setData("index", index);
	};

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const handleDrop = (e, newIndex) => {
		e.preventDefault();
		const oldIndex = e.dataTransfer.getData("index");
		const newBlocks = [...arrangedBlocks];
		const draggedBlock = blocks[oldIndex];
		for (let i = 0; i < newBlocks.length; i++) {
			if (newBlocks[i] === draggedBlock) {
				newBlocks[i] = "";
			}
		}
		newBlocks[newIndex] = draggedBlock;
		setArrangedBlocks(newBlocks);

		const blockContainer = e.target;
		const textarea = blockContainer.querySelector("textarea");
		if (textarea) {
			adjustTextareaHeight(textarea);
		}
	};

	const adjustTextareaHeight = (textarea) => {
		textarea.style.height = "auto"; 
		textarea.style.height = `${textarea.scrollHeight}px`; 
	};


	const handleDelete = (index) => {
		const newBlocks = [...arrangedBlocks];
		newBlocks[index] = "";
		setArrangedBlocks(newBlocks);
	};

	const handleSubmit = () => {
		console.log(arrangedBlocks.join("\n\n"));
	};

	const handleReset = () => {
		setArrangedBlocks(Array(blocks.length).fill(""));
	};

	const handleInputChange = (index, e) => {
		const newValue = e.target.value;
		const newBlocks = [...arrangedBlocks];
		newBlocks[index] = newValue;
		setArrangedBlocks(newBlocks);

		const textarea = e.target;
		textarea.style.height = "auto";
		textarea.style.height = `${textarea.scrollHeight}px`;

		console.log("Textarea content:", newValue);
		console.log("Textarea scrollHeight:", textarea.scrollHeight);
	};

	return (
		<>
			<div className="section-title">Parson Problem Generator</div>
			<div className="code-blocks-container">
				<div className="blocks-panel">
					<h3>Parson Code Blocks</h3>
					<ul>
						{blocks.map((block, index) => (
							<li
								key={index}
								draggable="true"
								onDragStart={(e) => handleDragStart(e, index)}>
								<pre>{block}</pre>
							</li>
						))}
					</ul>
				</div>
				<div className="empty-boxes-panel">
					<h3>Correct Code</h3>
					<ul>
						{arrangedBlocks.map((block, index) => (
							<li
								key={index}
								onDragOver={handleDragOver}
								onDrop={(e) => handleDrop(e, index)}>
								<textarea
									style={{ height: "auto" }}
									value={block}
									onChange={(e) => handleInputChange(index, e)}></textarea>

								<button onClick={() => handleDelete(index)}>🚫</button>
							</li>
						))}
					</ul>
					<div className="button-panel">
						<button onClick={handleSubmit}>Submit</button>
						<button onClick={handleReset}>Reset</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Solve;
