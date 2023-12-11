export interface userType {
	firstName: string
	lastName: string
	username: string
	email: string
	avatar?: string
}

export interface requestType {
	name: string
	url: string
	type: 'sent' | 'received'
}
