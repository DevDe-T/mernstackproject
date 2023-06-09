import React from "react";

const Signup = () => {
	return (
		<>
			<div style={{ marginTop: "20px" }}>
				<div className="container h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col-lg-12 col-xl-11">
							<div
								className="card text-black"
								style={{ borderRadius: "25px" }}>
								<div className="card-body p-md-5">
									<div className="row justify-content-center">
										<div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
											<p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
												Sign up
											</p>

											<form className="mx-1 mx-md-4">
												<div className="d-flex flex-row align-items-center mb-4">
													<div className="form-outline flex-fill mb-0">
														<input
															type="text"
															id="form3Example1c"
															className="form-control"
															placeholder="Name"
														/>
													</div>
												</div>

												<div className="d-flex flex-row align-items-center mb-4">
													<div className="form-outline flex-fill mb-0">
														<input
															type="email"
															id="form3Example3c"
															className="form-control"
															placeholder="email"
														/>
													</div>
												</div>
												<div className="d-flex flex-row align-items-center mb-4">
													<div className="form-outline flex-fill mb-0">
														<input
															type="number"
															id="form3Example3c"
															className="form-control"
															placeholder="phone"
														/>
													</div>
												</div>
												<div className="d-flex flex-row align-items-center mb-4">
													<div className="form-outline flex-fill mb-0">
														<input
															type="text"
															id="form3Example3c"
															className="form-control"
															placeholder="work"
														/>
													</div>
												</div>

												<div className="d-flex flex-row align-items-center mb-4">
													<div className="form-outline flex-fill mb-0">
														<input
															type="password"
															placeholder="password"
															id="form3Example4c"
															className="form-control"
														/>
													</div>
												</div>

												<div className="d-flex flex-row align-items-center mb-4">
													<div className="form-outline flex-fill mb-0">
														<input
															type="password"
															id="form3Example4cd"
															className="form-control"
															placeholder="confirm password"
														/>
													</div>
												</div>

												<div className="form-check d-flex justify-content-center mb-5">
													<input
														className="form-check-input me-2"
														type="checkbox"
														value=""
														id="form2Example3c"
													/>
													<label
														className="form-check-label"
														for="form2Example3">
														I agree all statements in{" "}
														<a href="#!">Terms of service</a>
													</label>
												</div>

												<div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
													<button
														type="button"
														className="btn btn-primary btn-lg">
														Register
													</button>
												</div>
											</form>
										</div>
										<div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
											<img
												src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
												className="img-fluid"
												alt="Sample"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Signup;
