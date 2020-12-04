// Create a new tsk by adding to the arrays
// A new tsk will be created as incom
function newtsk(title, des) {
  const tsk = {
  "title": title,
  "description": des,
  "complete": false,
  "logState": function() {
    console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
  "markCom": function() {
    this.complete = true;
    }
  }
  return tsk;
}

const task1 = newtsk("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newtsk("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been comd
task1.markCom();
task1.logState(); // Clean Cat Litter has been comd

console.log(tasks)
