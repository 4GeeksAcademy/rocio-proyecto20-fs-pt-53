const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: {},
			vehicles: {},
			planets: {},
			favorites:[]
		},
		actions: {
			getAllPeople: () => {
				fetch("https://www.swapi.tech/api/people/", {
					method: 'GET',
					headers: {
						'Content-type': 'application/json'
					},
				},
				).then(data => data.json())
					.then(data => setStore({ people: data }))
					.catch(err => console.error(err))
			},
			getCharacter: (uid) => {
				fetch(`https://www.swapi.tech/api/people/${uid}`)
					.then((response) => response.json())
					.then((response) => { setStore({ character: response }) })
			},

			getAllVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/", {
					method: 'GET',
					headers: {
						'Content-type': 'application/json'
					},
				},
				
				).then(data => data.json())
					.then(data => setStore({ vehicles: data }))
					.catch(err => console.error(err))
			},
			getVehicles: (uid) => {
				fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
					.then((response) => response.json())
					.then((response) => { setStore({ vehicles: response }) })
			},
			getAllPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/", {
					method: 'GET',
					headers: {
						'Content-type': 'application/json'
					},
				},
				).then(data => data.json())
					.then(data => setStore({ planets: data }))
					.catch(err => console.error(err))
			},
			getPlanets: (uid) => {
				fetch(`https://www.swapi.tech/api/planets/${uid}`)
					.then((response) => response.json())
					.then((response) => { setStore({ planets: response }) })
			},
			addFavorites: (name) => {
				setStore({ favorites: [...getStore().favorites, name] })
			},

			removeFavorite: (id) => {
				setStore({
					favorites: getStore().favorites.filter((item, i) => {
						return i != id;
					})
				})
			},


		},
	};
};

export default getState
