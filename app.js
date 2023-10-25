// Menu data structure
const menuLinks = [
	{ text: 'about', href: '/about' },
	{
		text: 'catalog',
		href: '#',
		subLinks: [
			{ text: 'all', href: '/catalog/all' },
			{ text: 'top selling', href: '/catalog/top' },
			{ text: 'search', href: '/catalog/search' },
		],
	},
	{
		text: 'orders',
		href: '#',
		subLinks: [
			{ text: 'new', href: '/orders/new' },
			{ text: 'pending', href: '/orders/pending' },
			{ text: 'history', href: '/orders/history' },
		],
	},
	{
		text: 'account',
		href: '#',
		subLinks: [
			{ text: 'profile', href: '/account/profile' },
			{ text: 'sign out', href: '/account/signout' },
		],
	},
]

// Task 1
let mainEl = document.querySelector('main')
mainEl.style.backgroundColor = 'var(--main-bg)'

let newH1 = document.createElement('h1')
newH1.innerText = 'SEI Rocks!'

mainEl.appendChild(newH1)
mainEl.classList.add('flex-ctr')

// Task 2
let topMenuEl = document.getElementById('top-menu')

topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add('flex-around')

// Task 3
menuLinks.forEach(function (link) {
	let newLink = document.createElement('a')

	let linkAttribute = document.createAttribute('href', link.href)
	newLink.setAttributeNode(linkAttribute)

	let linkContent = link.text
	newLink.innerText = linkContent

	topMenuEl.appendChild(newLink)
})

// Task 4
let subMenuEl = document.querySelector('#sub-menu')

subMenuEl.style.height = '100%'
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
subMenuEl.classList.add('flex-around')
subMenuEl.style.position = 'absolute'
subMenuEl.style.top = '0'

// Task 5
let topMenuLinks = topMenuEl.children

let showingSubMenu = false

topMenuEl.addEventListener('click', function (event) {
	event.preventDefault()

	//tagName is uppercase!
	if (event.target.tagName === 'A') {
		console.log(event.target.innerText.toLowerCase())
    } else {
        return
    }

	if (event.target.classList.contains('active')) {
		event.target.classList.remove('active')
		showingSubMenu = false
		subMenuEl.style.top = '0'
		return
    }
    
    // 5.4
    for (const key in topMenuLinks) {
        if (topMenuLinks.hasOwnProperty(key)){
            topMenuLinks[key].classList.remove('active')
        }
    }
    /*
    - The for...in loop iterates through properties in the prototype chain. This means that we need to check if the property belongs to the object using hasOwnProperty whenever we loop through an object with the for…in loop.
    - 
    */
    
    // 5.5
    if (event.target.tagName === 'A') {
        event.target.classList.add('active')
    }

    menuLinks.forEach(function (el) {

        // if (el.hasOwnProperty('subLinks')) {
        //     if (el.text === link) {
        //         showingSubMenu = true
        //     } else {
        //         showingSubMenu = false
        //     }
    
        // }
    })
    //console.log(showingSubMenu)
})


