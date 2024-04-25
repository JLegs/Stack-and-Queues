const readline = require('readline-sync');

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack underflow";
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    display() {
        console.log("Stack elements:", this.items);
    }
}

function main() {
    const stack = new Stack();

    while (true) {
        console.log("\nStack Operations:");
        console.log("1. Push");
        console.log("2. Pop");
        console.log("3. Peek");
        console.log("4. Size");
        console.log("5. Display");
        console.log("6. Exit");

        const choice = readline.question("Enter your choice: ");

        switch (choice) {
            case '1':
                const element = readline.question("Enter element to push: ");
                stack.push(element);
                break;
            case '2':
                const poppedElement = stack.pop();
                console.log("Popped element:", poppedElement);
                break;
            case '3':
                console.log("Top element:", stack.peek());
                break;
            case '4':
                console.log("Size of stack:", stack.size());
                break;
            case '5':
                stack.display();
                break;
            case '6':
                console.log("Exiting...");
                process.exit();
            default:
                console.log("Invalid choice! Please enter a valid option.");
        }
    }
}

main();