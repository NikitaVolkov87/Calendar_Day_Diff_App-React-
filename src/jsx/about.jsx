class About extends React.Component {
	
	componentDidMount() {
		aboutRevealer("about");
		aboutShadow();
		aboutInteraction();
	}

	render() {

		return (
			<div className="About-comp">
				<section className="about xslider-container">
					<div className="container">
						<div className="row m0">
							<div className="col">
								<h2 className="xslider xslider1">Calendar date range finder app</h2>
								<ul>
									<li className="xslider xslider2">
										<div className="row shadow-aim click-field">
											<div className="col-1 dflex">
												<i className="fas fa-clipboard-list"></i>
											</div>
											<div className="col">
												<a href="#" className="dflex">
													<h4>How to Setup</h4>
													<i className="fas fa-angle-down"></i>
												</a>
												<div className="hide-block">
													<p><b>Step 1:</b> git clone this repo</p>
													<p><b>Step 2:</b> cd to the cloned</p>
													<p><b>Step 3:</b> install the Application</p>
												</div>
											</div>
										</div>
									</li>
									<li className="xslider xslider3">
										<div className="row shadow-aim click-field">
											<div className="col-1 dflex">
												<i className="fas fa-clipboard-list"></i>
											</div>
											<div className="col">
												<a href="#" className="dflex">
													<h4>How to Setup</h4>
													<i className="fas fa-angle-down"></i>
												</a>
												<div className="hide-block">
													<p><b>Step 1:</b> git clone this repo</p>
													<p><b>Step 2:</b> cd to the cloned</p>
													<p><b>Step 3:</b> install the Application</p>
												</div>
											</div>
										</div>
									</li>
									<li className="xslider xslider4">
										<div className="row shadow-aim click-field">
											<div className="col-1 dflex">
												<i className="fas fa-clipboard-list"></i>
											</div>
											<div className="col">
												<a href="#" className="dflex">
													<h4>How to Setup</h4>
													<i className="fas fa-angle-down"></i>
												</a>
												<div className="hide-block">
													<p><b>Step 1:</b> git clone this repo</p>
													<p><b>Step 2:</b> cd to the cloned</p>
													<p><b>Step 3:</b> install the Application</p>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}
	

export default About;
