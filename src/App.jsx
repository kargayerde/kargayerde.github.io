function App() {
	const pages = [
		{
			title: "WASMbrot",
			link: "https://kargayerde.github.io/wasmbrot/",
			repo: "",
			description: "A Mandelbrot viewer written in C and compiled to WASM.",
		},
		{
			title: "balls",
			link: "https://kargayerde.github.io/balls/",
			repo: "",
			description: "Dynamically generated 3D objects. Written in C, compiled to WASM",
		},
		{
			title: "chatnoir",
			link: "https://chatnoir-front.onrender.com/",
			repo: "",
			description: "Full stack end-to-end encrypted group chat proof-of-work.",
		},
		{
			title: "Trippy Algebra",
			link: "https://kargayerde.github.io/trippy-algebra/",
			repo: "",
			description: "2D patterns created using linear algebra and rendered to HTML canvas.",
		},
		{
			title: "Pigraph",
			link: "https://kargayerde.github.io/pigraph/",
			repo: "",
			description: "Graph of digits of pi in different radixes rendered to HTML canvas.",
		},
		{
			title: "Parallax Scroller",
			link: "https://kargayerde.github.io/parallax-scroller/",
			repo: "",
			description: "Parallax scrolling animation in HTML canvas.",
		},
		{
			title: "More Discourses",
			link: "https://kargayerde.github.io/more-discourses/",
			repo: "",
			description:
				"A tool to explore the relationships that emerge from Lacan's theory of four discourses.",
		},
		{
			title: "Chronos",
			link: "https://kargayerde.github.io/chronos/",
			repo: "",
			description: "A timeline management tool.",
		},
		{
			title: "Transposer",
			link: "https://kargayerde.github.io/transposer/",
			repo: "",
			description: "Transposes the chords in the input text without changing the rest.",
		},
		{
			title: "Charfix",
			link: "https://kargayerde.github.io/charfix/",
			repo: "",
			description: "Fixes corrupted Turkish characters caused by encoding errors.",
		},
		{
			title: "Gas",
			link: "https://kargayerde.github.io/gas/",
			repo: "",
			description:
				"Gas price viewer and alarm widget for Ethereum using public APIs.",
		},
	];

	return (
		<div className="App">
			{pages.map(({ title, link, repo, description }, index) => (
				<div key={index}>
					<a href={link} target="_blank">
						{title.toLocaleLowerCase("tr")}
					</a>
					<div>{description}</div>
				</div>
			))}
		</div>
	);
}

export default App;
