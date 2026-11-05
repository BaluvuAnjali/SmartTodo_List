import React from "react";
export default function Dashboard({tasks=[],roadmapPercent=0,setPage}) {
 const done=tasks.filter(t=>t.completed).length;
 const pending=tasks.length-done;
 const cards=[["Total Tasks",tasks.length,"All your tasks"],["Completed",done,"Tasks finished"],["Pending",pending,"Tasks remaining"],["Roadmap",roadmapPercent+"%","Learning progress"]];
 return <div className="page-wrap">
  <div className="page-title-row"><div><div className="eyebrow">YOUR PLACEMENT WORKSPACE</div><h1>Dashboard</h1><p>Plan your learning. Track your consistency. Prepare for placements.</p></div></div>
  <div className="stats-grid">{cards.map((c,i)=><section className="panel" key={c[0]}><div className="eyebrow">{c[0]}</div><h2 style={{fontSize:32,margin:"12px 0"}}>{c[1]}</h2><p>{c[2]}</p></section>)}</div>
  <section className="panel"><div className="panel-heading"><div><h3>Quick access</h3><p>Continue where you left off.</p></div></div><div style={{display:"flex",gap:12,flexWrap:"wrap"}}>{[["tasks","Manage Tasks"],["roadmap","Learning Roadmap"],["interview","Interview Preparation"],["quiz","Practice Quiz"],["progress","View Progress"]].map(x=><button className="primary-button" key={x[0]} onClick={()=>setPage(x[0])}>{x[1]}</button>)}</div></section>
  <section className="panel"><div className="panel-heading"><div><h3>Recent tasks</h3><p>Your latest activities</p></div><button className="secondary-button" onClick={()=>setPage("tasks")}>View all</button></div>
  {tasks.slice(0,5).length?tasks.slice(0,5).map(t=><div className="recent-item" key={t._id}><span className={"recent-status "+(t.completed?"is-done":"")}/><div><b>{t.title}</b><small>{t.category} · {t.priority} priority</small></div><strong>{t.completed?"Completed":"Pending"}</strong></div>):<div className="empty-state">No tasks yet. Open Manage Tasks to add your first task.</div>}</section>
 </div>;
}
