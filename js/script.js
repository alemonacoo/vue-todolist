console.log("JS OK!");

const toDoList = {
    listArray: ['prova', 'ciccio'],
    statusArray:[false, true]
};

console.log(toDoList);

const app = new Vue(
    {
        el: "#app",
        data:{
            toDoList,
            toDoItem: undefined
        },
        methods:{
            addToDoItem(item){
                this.toDoList.listArray.push(item);
                this.toDoItem = '';
                this.toDoList.statusArray.push(false);
                console.log(this.toDoList.listArray, this.toDoList.statusArray);

            },
            isComplete(index){
                if(this.toDoList.statusArray[index] === true){
                    this.toDoList.statusArray[index] = false;
                } else{
                    this.toDoList.statusArray[index] = true;
                }
                console.log(this.toDoList.statusArray[index]);
            }

        }

    }
)