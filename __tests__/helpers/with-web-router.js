import React from 'react'
import {MemoryRouter} from 'react-router'

export function WithWebRouter({children, ...routerProps}) {
	return (
		<MemoryRouter {...routerProps}>
			{children}
		</MemoryRouter>
	)
}
