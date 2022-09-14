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
            isChecked(bool){
                if(bool == false){
                    return "cross";
                }
                else return '';
            },
            changeStatus(item){
                item.status = !item.status;
                console.log(toDoList);
            }
        }

           
    }
)