function App() {
	const pages = [
		{
			title: "WASMbrot",
			link: "https://kargayerde.github.io/wasmbrot/",
			repo: "",
			description: "",
		},
		{ title: "balls", link: "https://kargayerde.github.io/balls/", repo: "", description: "" },
		{
			title: "chatnoir",
			link: "https://chatnoir-front.onrender.com/",
			repo: "",
			description: "",
		},
		{
			title: "Trippy Algebra",
			link: "https://kargayerde.github.io/trippy-algebra/",
			repo: "",
			description: "",
		},
		{
			title: "Pigraph",
			link: "https://kargayerde.github.io/pigraph/",
			repo: "",
			description: "",
		},
		{
			title: "Parallax Scroller",
			link: "https://kargayerde.github.io/parallax-scroller/",
			repo: "",
			description: "",
		},
		{
			title: "More Discourses",
			link: "https://kargayerde.github.io/more-discourses/",
			repo: "",
			description: "",
		},
		{
			title: "Chronos",
			link: "https://kargayerde.github.io/chronos/",
			repo: "",
			description: "",
		},
		{
			title: "Transposer",
			link: "https://kargayerde.github.io/transposer/",
			repo: "",
			description: "",
		},
		{
			title: "Charfix",
			link: "https://kargayerde.github.io/charfix/",
			repo: "",
			description: "",
		},
		{ title: "Gas", link: "https://kargayerde.github.io/gas/", repo: "", description: "" },
	];

	return (
		<div className="App">
			{pages.map(({ title, link, repo, description }, index) => (
				<div key={index}>
					<a href={link}>{title.toLocaleLowerCase("tr")}</a>
				</div>
			))}
		</div>
	);
}

export default App;
