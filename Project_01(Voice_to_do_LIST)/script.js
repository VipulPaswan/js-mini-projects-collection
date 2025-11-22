const tasklist = [];
const listElement = document.getElementById("tasklist");
const statusText = document.getElementById("status");

// Setup speech Recongnition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = 'en-US';

recognition.onresult = (event)=>{
          const transcript = event.results[0][0].transcript.toLowerCase();
          statusText.innerText = `Heard : "${transcript}"`;
          
          if(transcript.startsWith("naya task")){
                    const taskText = transcript.replace("naya task","").trim();
                    if(taskText)
                              addTask(taskText);
          }
          else if(transcript.startsWith("delete task")){
                    const num = parseInt(transcript.split(" ")[2])-1;
                    if(!isNaN(num))
                              deleteTask(num);
          }

          else if(transcript.startsWith("mark task")){
                    const num = parseInt(transcript.split(" ")[2])-1;
                    if(!isNaN(num))
                              markTaskDone(num);
          }
}

function addTask(task){
          tasklist.push({text:task,done:false});
          renderTasks();

}

function deleteTask(num){
          if(tasklist[num]){
                    tasklist.splice(num,1);
                    renderTasks();
          }

}

function markTaskDone(num){
          if(tasklist[num]){
                    tasklist[num].done = true;
                    renderTasks();
          }

}

function renderTasks(){
          listElement.innerHTML="";
          tasklist.forEach((task,idx)=>{
                    const li = document.createElement("li");
                    li.innerText = `${idx+1}. ${task.text} ${task.done ? "✅" : ""}`;
                    listElement.appendChild(li);
          });
}

function startVoice(){
          statusText.innerText = "Listening...";
          recognition.start();
}

document.getElementById("startbtn").addEventListener("click",startVoice);
