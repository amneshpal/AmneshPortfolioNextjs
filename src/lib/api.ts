// import axios from "axios";

// const api = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000", // NestJS backend URL
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Auth APIs
// export const loginUser = (data: { email: string; password: string }) =>
//   api.post("/auth/login", data);

// export const registerUser = (data: { name: string; email: string; password: string }) =>
//   api.post("/auth/register", data);

// // Projects APIs
// export const getProjects = () => api.get("/projects");
// export const getProject = (id: string | number) => api.get(`/projects/${id}`);
// export const createProject = (data: any) => api.post("/projects", data);
// export const updateProject = (id: string | number, data: any) =>
//   api.put(`/projects/${id}`, data);
// export const deleteProject = (id: string | number) => api.delete(`/projects/${id}`);

// // Contact API
// export const sendContactMessage = (data: { name: string; email: string; message: string }) =>
//   api.post("/contact", data);
