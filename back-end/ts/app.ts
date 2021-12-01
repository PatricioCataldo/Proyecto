import {Artistas} from './Artistas';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const configuracion = {
  hostname: '127.0.0.1',
  port: 3001
}

const {Client} = require('pg');

const client = new Client({
  user:'postgres',
  host:'localhost',
  database:'Artistas',
  password:'20211095-92kk',
  port: 5432,
});

client.connect();

var jsonParser = bodyParser.json();

app.use(cors());

app.get('./Artistas',(req:any,res:any)=>{
  let ListaArtistas=new Array<Artistas>();
  client.query(`SELECT * FROM "Artistas"`,(err:any, respuesta:any) =>{
    if(err){
      console.error(err);
      return;
    }
    for (let row of respuesta.rows){
      ListaArtistas.push(row);
    }
    console.log(ListaArtistas);
    res.send(JSON.stringify({"item":ListaArtistas}))
  })
})