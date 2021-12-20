import React, {useState} from 'react';
import Counter from './Components/Counter'
import PostItem from './Components/PostItem'
import './styles/App.css'

function App() {
  const [value, setValue]=useState('Текст в инпуте')  //useState[1] это функция setLikes

  return (
    <div className="App">
      <PostItem post={{id: 1, title: 'JavaScript', description: "JavaScript - Это язык программирования высокого уровня"}}/>
      
    </div>
  );
}

export default App;
