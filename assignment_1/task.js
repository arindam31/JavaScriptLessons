'use strict';


class ToDoList {
    constructor() {
        this.to_do = []
    }

    toJSON() {
        return this.to_do; // Log as an array for clarity
    }

    addToList(title) {
        this.to_do.push(title)
    }

    removeItem(title) {
        if (this.to_do.includes(title)) {
            const indx = this.to_do.indexOf(title)
            if (indx !== -1) { // This is to check if the task still exists.
                this.to_do.splice(indx, 1)
            } // Remove one item from that index position.
        }
    }

    removeByNumber(num) {
        if (num > 0 && num <= this.to_do.length) {
            this.to_do.splice(num, 1)
        } else {
            console.log("Invalid task number")
        }
    }

    clearList() {
        this.to_do = [];
    }
}

let myListObj = new ToDoList()
myListObj.addToList("First item");
myListObj.addToList("2nd item");

console.log(myListObj);