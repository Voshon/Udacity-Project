function handleSubmit(event) {
  event.preventDefault();
  const text = document.getElementById("test-statement").value;
  if (!text) return;
  console.log(text);
  fetch("/apiKey", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("polarity").innerHTML = data.polarity;
      document.getElementById("subjectivity").innerHTML =data.subjectivity;
      document.getElementById("polarity_confidence").innerHTML =data.polarity_confidence;
      document.getElementById("subjectivity_confidence").innerHTML =data.subjectivity_confidence;
    });
}

export { handleSubmit };
