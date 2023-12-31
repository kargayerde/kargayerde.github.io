function App() {
	const pages = {
		WASMbrot: "https://kargayerde.github.io/wasmbrot/",
		"More Discourses": "https://kargayerde.github.io/more-discourses/",
		"Trippy Algebra": "https://kargayerde.github.io/trippy-algebra/",
		Transposer: "https://kargayerde.github.io/transposer/",
		Charfix: "https://kargayerde.github.io/charfix/",
		"Parallax Scroller": "https://kargayerde.github.io/parallax-scroller/",
		Chronos: "https://kargayerde.github.io/chronos/",
		Gas: "https://kargayerde.github.io/gas/",
		Pigraph: "https://kargayerde.github.io/pigraph/",
	};

	return (
		<div className="App">
			{Object.keys(pages).map((page, index) => (
				<div key={index}>
					<a href={pages[page]}>{page.toLocaleLowerCase()}</a>
				</div>
			))}
		</div>
	);
}

export default App;