
import './App.css';
import Dynamic from './Dynamic'
import Demo from './Demo';

function App() {
     const obj ={
    name : "Niranjan",
    rollno : 21,
    dept : "IT"
  }

  const arr =[1,2,3,4,5,6]

  const arrobj =[
    {name : "tamil" ,
      rollno : 110,
      dept : "it"
    },
    {
      name : "kishore",
      rollno : "85",
      dept : "cse"
    },
    {
      name : "babu",
      rollno : 12,
      dept : "aids"
    },
    {
      name : "dk",
      rollno : 16,
      dept :"aiml"
    }
  ]
  return (
      <div>
       <Demo test={obj} mode1={arr} mode2={arrobj} completed="false"/>
      </div>
    
  );



}

export default App
