import  knex from '../connection';
export abstract class RestRepository{
    constructor(objectName:string){
        this.objectName=objectName;
    }
    private objectName:string;
    get(id?:number){
        if(id){
            knex(this.objectName)
            .select('*');
        }else{
            knex(this.objectName)
            .select('*')
            .where({id:id});
        }
    }
    post(movie:any){
        return knex(this.objectName)
        .insert(movie)
        .returning('*');
    }
    put(movie:any){
        return knex(this.objectName)
        .update(movie)
        .returning('*');
    }
    delete(id:number){
        // return knex()
        // .delete({id:id})
        // .returning('*');
    }
}