console.log("JS OK!");


const toDoList = [
    {
        nome: 'prova1',
        status: false,
    },
    {
        nome: 'prova2',
        status: false,
    },
    {
        nome: 'prova3',
        status: false,
    }
];

console.log(toDoList);

const app = new Vue(
    {
        el: "#app", 
        data:{
            toDoList,
            toDoItem: undefined,

        },
        methods:{
            addToDoItem(item){
                let newToDo = (
                    {
                        nome: item,
                        status: false
                    }
                    );
                this.toDoList.push(newToDo);
                this.toDoItem = '';
                console.log(this.toDoList);

            }, 
            removeToDoItem(item){     
                let newToDo = this.toDoList.filter(i => i !== item);
                this.toDoList = newToDo;
                console.log(newToDo);
            },
        }           
    }
)