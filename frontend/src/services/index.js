import api from './api'

export const getHealth = () => api.get('/health')

export const getClients = () => api.get('/clients')
export const createClient = (data) => api.post('/clients', data)

export const getProjects = () => api.get('/projects')
export const createProject = (data) => api.post('/projects', data)

export const getIncomes = () => api.get('/incomes')
export const createIncome = (data) => api.post('/incomes', data)

export const getInvoices = () => api.get('/invoices')
export const createInvoice = (data) => api.post('/invoices', data)
