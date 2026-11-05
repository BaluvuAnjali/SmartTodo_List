const API_BASE = process.env.REACT_APP_API_URL || "/api";

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}

export const taskApi = {
  getAll: () => request("/tasks"),
  create: (task) => request("/tasks", { method: "POST", body: JSON.stringify(task) }),
  update: (id, changes) => request(`/tasks/${id}`, { method: "PATCH", body: JSON.stringify(changes) }),
  remove: (id) => request(`/tasks/${id}`, { method: "DELETE" }),
  health: () => request("/health")
};
