import axios from 'axios';


const url:string = 'https://jsonplaceholder.typicode.com/todos/1';

/**
 * type inference
 */
const date = new Date();

interface Todo {


      id:number;
      title:string;
      completed:boolean;
      logResult(id:number, title:string, completed:boolean):void

}

axios.get(url).then((response) => {

      const todo = response.data as Todo;

      const id = todo.id;
      const title = todo.title;
      const finished = todo.completed;

      logResult(id, title, finished);


}).catch((error) => {

    console.log(error);

});





const logResult = (id:number,title:string,completed:boolean):void => {

      console.log(`
      
        la todo : ${id}
        est : ${title}
        and : ${completed}
      
      `);
}