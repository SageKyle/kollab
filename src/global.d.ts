type UserType = {
	firstName: string
	lastName: string
	username: string
	email: string
	avatar?: string
	workspaces: []
	requests: []
	id: string
}

type requestType = {
	name: string
	url: string
	type: 'sent' | 'received'
}
