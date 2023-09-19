const reactTab = document.getElementById('react');
const vueTab = document.getElementById('vue');
const angularTab = document.getElementById('angular');
const contentTab = document.getElementById('content');

const reactFeatures = [
	'Library vs. Framework: React is a JavaScript library for building user interfaces, mainly for web applications.',
	'Component-Based: React uses a component-based architecture, where the UI is broken down into reusable and manageable components.',
	'Virtual DOM: React uses a virtual DOM to optimize rendering performance by minimizing direct manipulation of the actual DOM.',
	'JSX: React uses JSX (JavaScript XML) for defining component structures, which is a syntax extension for JavaScript.',
	'One-way Data Binding: React primarily implements one-way data binding to maintain the flow of data in a predictable manner.',
	'State Management: React uses states and props to manage and pass data between components effectively.',
	'Community and Ecosystem: React has a vast and active community, along with a rich ecosystem of libraries and tools.',
	'Maintained by Facebook: React was created and is maintained by Facebook and the community.',
	'Flexibility: React offers flexibility in terms of choosing libraries or tools for other functionalities like routing and state management.',
	'Learning Curve: React is relatively easier to learn compared to full-fledged frameworks like Angular.',
];

const vueFeatures = [
	'Progressive Framework: Vue.js is a progressive JavaScript framework used for building user interfaces, providing incremental adoption and integration.',

	'Component-Based: Like React, Vue.js is also component-based, allowing developers to create reusable, encapsulated components.',
	'Two-way Data Binding: Vue.js provides two-way data binding, making it efficient for handling user input and updating the UI accordingly.',

	'Virtual DOM: Vue.js uses a virtual DOM to optimize rendering and improve performance.',

	'Directives: Vue.js offers directives to add dynamic behavior to the DOM and manipulate the DOM directly.',

	'Community and Ecosystem: Vue.js has a growing community and a growing ecosystem of libraries and tools.',

	'Maintained by Evan You: Vue.js was created by Evan You and is actively maintained by him and the community.',

	'Flexibility: Vue.js provides flexibility and adaptability, allowing integration into existing projects and coexisting with other libraries and frameworks.',

	'Learning Curve: Vue.js has a relatively gentle learning curve, making it accessible to developers new to frontend frameworks.',

	'Reactivity: Vue.js features reactivity at its core, automatically updating the DOM when data changes.',
];

const angularFeatures = [
	'Full-fledged Framework: Angular is a comprehensive frontend framework developed and maintained by Google.',

	'Highly Opinionated: Angular is highly opinionated and provides a complete set of tools and practices for building large-scale applications.',

	'Component-Based: Angular follows a component-based architecture for building reusable and structured UI components.',

	'Two-way Data Binding: Angular implements two-way data binding, automatically updating the UI when data changes and vice versa.',

	'Dependency Injection: Angular supports dependency injection, facilitating efficient management of component dependencies.',

	'Directives and Pipes: Angular offers directives for DOM manipulation and pipes for transforming data in templates.',

	'RxJS Integration: Angular integrates RxJS for reactive programming, enabling efficient handling of asynchronous operations.',

	'Community and Ecosystem: Angular has a robust and mature community, along with a vast ecosystem of libraries, tools, and support.',

	'Maintained by Google: Angular is maintained by Google and a large community of contributors.',

	'Learning Curve: Angular has a steeper learning curve due to its comprehensive nature and the need to learn TypeScript, which is its primary language.',
];

reactTab.addEventListener('click', (e) => {
	setActiveTab(reactTab);
	setInActiveTabs([vueTab, angularTab]);
	setContentForActiveTab(reactFeatures);
});
vueTab.addEventListener('click', (e) => {
	setActiveTab(vueTab);
	setInActiveTabs([reactTab, angularTab]);
	setContentForActiveTab(vueFeatures);
});
angularTab.addEventListener('click', (e) => {
	setActiveTab(angularTab);
	setInActiveTabs([reactTab, vueTab]);
	setContentForActiveTab(angularFeatures);
});

setActiveTab = (tab) => {
	tab.classList.add('clicked');
};

setInActiveTabs = (tabs) => {
	tabs.forEach((tab) => {
		tab.classList.remove('clicked');
	});
};

setContentForActiveTab = (features) => {
	const existingFeatures = contentTab.querySelector('ol');
	if (existingFeatures) {
		contentTab.removeChild(existingFeatures);
	}

	const ol = document.createElement('ol');
	features.forEach((feature, index) => {
		const li = document.createElement('li');
		li.textContent = feature;
		ol.appendChild(li);
	});

	contentTab.appendChild(ol);
};
