console.log("JS OK!");

const toDoListArray = [];

console.log(toDoListArray);

const app = new Vue(
    {
        el: "#app",
        data:{
            toDoListArray,
            toDoItem: undefined,
        },
        methods:{
            addToDoItem(item){
                toDoListArray.push(item);
                console.log(toDoListArray);
                this.toDoItem = '';
            },
        }

    }
)