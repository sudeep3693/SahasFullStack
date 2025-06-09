import express, { response } from 'express';

const app = express();

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
    console.log(`listen to port ${PORT}`)
});

app.get("/",(request,response)=>{

    response.send("hey, how are you doing");
})
