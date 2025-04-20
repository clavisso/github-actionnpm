async function calculate() {
    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;
    const res = await fetch(`/api/add?a=${a}&b=${b}`);
    const data = await res.json();
    document.getElementById('result').innerText = `Result: ${data.result}`;
  }
  