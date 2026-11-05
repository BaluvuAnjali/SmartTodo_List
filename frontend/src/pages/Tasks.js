import React,{useState} from "react";
const categories=["Programming","DSA","Web Development","Database","Aptitude","Interview Preparation","College Work","Personal"];
export default function Tasks({tasks=[],createTask,updateTask,deleteTask,loading}) {
 const [title,setTitle]=useState(""),[category,setCategory]=useState("Programming"),[priority,setPriority]=useState("Medium"),[dueDate,setDueDate]=useState(""),[filter,setFilter]=useState("All");
 const visible=tasks.filter(t=>filter==="All"||(filter==="Completed"?t.completed:!t.completed));
 function submit(e){e.preventDefault();if(!title.trim())return;createTask({title:title.trim(),category,priority,dueDate:dueDate||null});setTitle("");setDueDate("");}
 return <div className="page-wrap">
  <div className="page-title-row"><div><div className="eyebrow">STAY ORGANIZED</div><h1>My Tasks</h1><p>Create and track your daily placement preparation tasks.</p></div></div>
  <section className="panel"><div className="panel-heading"><div><h3>Add a new task</h3><p>Enter the task details below.</p></div></div>
  <form onSubmit={submit} style={{display:"grid",gap:12,gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))"}}>
   <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Enter task title" required maxLength={120} style={field}/>
   <select value={category} onChange={e=>setCategory(e.target.value)} style={field}>{categories.map(x=><option key={x}>{x}</option>)}</select>
   <select value={priority} onChange={e=>setPriority(e.target.value)} style={field}>{["High","Medium","Low"].map(x=><option key={x}>{x}</option>)}</select>
   <input type="date" value={dueDate} onChange={e=>setDueDate(e.target.value)} style={field}/>
   <button className="primary-button" type="submit">+ Add Task</button>
  </form></section>
  <section className="panel"><div className="panel-heading"><div><h3>Your tasks ({tasks.length})</h3><p>Update your progress as you complete each task.</p></div><select value={filter} onChange={e=>setFilter(e.target.value)} style={field}><option>All</option><option>Pending</option><option>Completed</option></select></div>
  {loading?<p>Loading tasks...</p>:visible.length?visible.map(t=><div className="recent-item" key={t._id} style={{gap:12,alignItems:"center"}}><input type="checkbox" checked={!!t.completed} onChange={e=>updateTask(t._id,{completed:e.target.checked})}/><div style={{flex:1,minWidth:0}}><b style={{textDecoration:t.completed?"line-through":"none"}}>{t.title}</b><small>{t.category} · {t.priority} priority {t.dueDate?"· Due "+new Date(t.dueDate).toLocaleDateString():""} · Streak: {t.currentStreak||0} days</small></div><button className="secondary-button" onClick={()=>{const next=window.prompt("Edit task title:",t.title);if(next!==null&&next.trim())updateTask(t._id,{title:next.trim()})}}>Edit</button><button className="secondary-button" onClick={()=>deleteTask(t._id)}>Delete</button></div>):<div className="empty-state">No tasks in this view. Add a task above.</div>}
  </section>
 </div>;
}
const field={padding:12,borderRadius:9,border:"1px solid #334155",background:"#0f172a",color:"inherit",minWidth:0};
