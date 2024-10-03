import { createRouter, createWebHistory } from 'vue-router';

// Define routes with code-splitting and webpack chunk naming
const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
		meta: {
			title: 'Home - Women Genital and Fertility Health',
			description: 'Welcome to our homepage where we focus on female reproductive and mental health.',
			canonical: '/',
		},
	},
	{
		path: '/about',
		name: 'About',
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
		meta: {
			title: 'About Us - Women Genital and Fertility Health',
			description: 'Learn more about our mission and objectives for promoting Women Genital and Fertility Health.',
			canonical: '/about',
		},
	},
	{
		path: '/mission',
		name: 'Mission',
		component: () => import(/* webpackChunkName: "mission" */ '../views/Mission.vue'),
		meta: {
			title: 'Our Mission - Reproductive Health',
			description: 'Learn about our mission to educate and advocate for Women Genital and Fertility Health and rights.',
			canonical: '/mission',
		},
	},
	{
		path: '/services',
		name: 'Services',
		component: () => import(/* webpackChunkName: "services" */ '../views/Services.vue'),
		meta: {
			title: 'Our Services - Women Genital and Fertility Health',
			description: "Explore our services aimed at promoting women's reproductive health and mental well-being.",
			canonical: '/services',
		},
	},
	{
		path: '/contact',
		name: 'Contact',
		component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
		meta: {
			title: 'Contact Us - Women Genital and Fertility Health',
			description: 'Get in touch with us for more information on female reproductive and mental health.',
			canonical: '/contact',
		},
	},
	{
		path: '/blog',
		name: 'Blog',
		component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue'),
		meta: {
			title: 'Blog - Women Genital and Fertility Health',
			description: 'Read the latest articles on female reproductive and mental health.',
			canonical: '/blog',
		},
	},
	{
		path: '/blog/:id',
		name: 'BlogPost',
		component: () => import(/* webpackChunkName: "blog-post" */ '../views/BlogPost.vue'),
		meta: {
			title: 'Blog Post - Women Genital and Fertility Health',
			description: 'Read detailed posts about female reproductive and mental health.',
			canonical: '/blog/:id',
		},
	},
];

// Create the router
const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: 'active',
	scrollBehavior(to, from, savedPosition) {
		return {
			// behavior: 'smooth',
			top: 0,
		};
	},
});

// Add navigation guards to dynamically set meta tags (title, description, canonical)
router.beforeEach((to, from, next) => {
	// Set the page title
	if (to.meta.title) {
		document.title = to.meta.title;
	}

	// Set meta description
	if (to.meta.description) {
		const description = document.querySelector('meta[name="description"]');
		if (description) {
			description.setAttribute('content', to.meta.description);
		} else {
			const newMeta = document.createElement('meta');
			newMeta.setAttribute('name', 'description');
			newMeta.setAttribute('content', to.meta.description);
			document.head.appendChild(newMeta);
		}
	}

	// Set canonical link
	if (to.meta.canonical) {
		const canonicalLink = document.querySelector('link[rel="canonical"]');
		if (canonicalLink) {
			canonicalLink.setAttribute('href', `${window.location.origin}${to.meta.canonical}`);
		} else {
			const newLink = document.createElement('link');
			newLink.setAttribute('rel', 'canonical');
			newLink.setAttribute('href', `${window.location.origin}${to.meta.canonical}`);
			document.head.appendChild(newLink);
		}
	}

	next();
});

export default router;
