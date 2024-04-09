const {graphql, buildSchema} = require('graphql');

var schema= buildSchema(`
    type Query {
        hello: String
        notHello: String
        me: Human
    }

    type Human{
        name: String
        age: Int
    }
    `);
    
    var me={
        name: 'Shrey',
        age: 21
    }


    var rootValue= {
    hello(){
        return 'Hello World';
    },

    notHello(){
        return 'Not Hello World';
    },

    me(){
        return me;
    
    }
}



graphql({
    schema,
    source: "{ hello, notHello, me{name}}",
    rootValue
}).then((response)=>{
    console.log(response);
})
