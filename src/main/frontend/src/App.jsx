import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [msg, setMsg] = useState([]);
  fetch('http://localhost:8080/api/hello')
  .then(response => response.text())
  .then(data => {
    // API 요청이 성공적으로 완료된 경우 처리할 로직
    console.log(data); // 받아온 데이터 출력 예시
    setMsg(data);
  })
  .catch(error => {
    // API 요청이 실패한 경우 처리할 로직
    console.error('API 요청 실패:', error);
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1>{msg}</h1>
      </header>
    </div>
  );
}

export default App
