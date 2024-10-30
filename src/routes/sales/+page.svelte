<script>
	const labelCss = () =>
		'text-sm md:text-lg font-bold font-patrick text-start hover:underline hover:underline-offset-4 hover:decoration-solid hover:decoration-2 hover:decoration-nextPrevButton md:pr-2';
	const outputCss = () =>
		' h-6 md:h-8  flex justify-center w-6/12 md:w-7/12 px-3 font-normal md:font-medium text-center  text-xs md:text-base border border-black rounded-lg pl-2 hover:shadow-md hover:shadow-black opacity';
	const outputDiv = () => 'flex py-2 md:py-5';
	const secondConCss = () => 'max-sm:text-xs text-base';
	const secondOutputCss = () =>
		' hover:underline hover:underline-offset-4 hover:decoration-black decoration-2';
</script>

<div class="mt-24 h-full p-0 m-0 bg-bgDarkGrey">
	<div class="flex md:justify-center min-h-screen">
		<div class="flex flex-col gap-10">
			<form action="" class="max-sm:relative max-sm:left-14">
				<div class=" flex flex-col bg-white border border-black rounded-xl">
					<div
						class="text-white text-center bg-bgGrey h-14 md:h-24 content-center font-bold text-lg md:text-3xl rounded-xl"
					>
						<h1>Mage Stock-Out History</h1>
					</div>

					<div class="overflow-hidden">
						<div class=" md:grid md:grid-cols-2 px-5 py-2 md:py-10 md:px-24">
							<div class={outputDiv()}>
								<h2 class={labelCss()}>Material Name:</h2>
								<h3 class={outputCss()}>1</h3>
							</div>

							<div class={outputDiv()}>
								<h2 class={labelCss()}>Material Description:</h2>
								<p
									class="max-sm:relative max-sm:right-9 md:translate-x-1 h-auto flex justify-center w-6/12 md:w-7/12 px-3 font-normal md:font-medium text-center text-xs md:text-base border border-black rounded-lg pl-2 hover:shadow-md hover:shadow-black opacity"
								>
									1
								</p>
							</div>

							<div class={outputDiv()}>
								<h2 class={labelCss()}>Material Code:</h2>
								<p class={outputCss()}>1</p>
							</div>

							<div class={outputDiv()}>
								<h2 class={labelCss()}>Unit:</h2>
								<p
									class="translate-x-16 max-sm:ml-1 md:translate-x-40 h-6 md:h-8 flex justify-center w-6/12 md:w-7/12 md:px-3 font-normal md:font-medium text-center text-base border border-black rounded-lg pl-2 hover:shadow-md hover:shadow-black opacity"
								>
									1
								</p>
							</div>

							<div class={outputDiv()}>
								<h2 class={labelCss()}>Qty:</h2>
								<input
									class="max-sm:ml-3 translate-x-16 md:translate-x-24 h-6 md:h-8 flex justify-center w-6/12 md:w-7/12 md:px-3 font-normal md:font-medium text-center text-xs md:text-base border border-black rounded-lg pl-2 hover:shadow-md hover:shadow-black opacity"
									type="text"
									id="qty"
									maxlength="5"
									required
								/>
							</div>
							<div class={outputDiv()}>
								<h2 class={labelCss()}>Date:</h2>
								<input
									class="max-sm:ml-1 translate-x-16 md:translate-x-40 h-6 md:h-8 flex justify-center w-6/12 md:w-7/12 px-3 font-normal md:font-medium text-center text-xs md:text-base border border-black rounded-lg pl-2 hover:shadow-md hover:shadow-black opacity"
									type="date"
									id="date"
									required
								/>
							</div>
							<div class={outputDiv()}>
								<h2 class={labelCss()}>Remarks:</h2>
								<input
									class=" translate-x-11 md:translate-x-14 h-6 md:h-8 flex justify-center w-6/12 md:w-7/12 px-3 font-normal md:font-medium text-center text-xs md:text-base border border-black rounded-lg pl-2 hover:shadow-md hover:shadow-black opacity"
									type="text"
									id="remarks"
									required
								/>
							</div>
							<div
								class="relative max-sm:left-3/4 max-sm:mt-4 md:flex md:justify-end md:translate-x-20 md:translate-y-16"
							>
								<button
									type="submit"
									class="h-7 max-sm:w-20 md:h-9 md:px-10 md:py-1 border-2 border-black rounded-lg hover:font-extrabold hover:bg-nextPrevButton hover:text-white cursor-pointer hover:shadow-md hover:shadow-nextPrevButton"
								>
									Submit
								</button>
							</div>
						</div>
					</div>
				</div>
			</form>

			<div
				class="flex flex-col text-center border md:border-black rounded-lg max-sm:w-screen max-sm:p-1 max-sm:m-0"
			>
				<div class="rounded-lg bg-bgGrey">
					<ul
						class=" grid grid-cols-3 gap-2 max-sm:py-3 md:grid-cols-11 font-thin md:font-bold md:h-14 content-center text-white"
					>
						<li class={secondConCss()}>Item</li>
						<li class={secondConCss()}>Material Name</li>
						<li class="max-sm:text-xs md:grid md:col-span-3">Material Description</li>
						<li class={secondConCss()}>Material Code</li>
						<li class={secondConCss()}>Unit</li>
						<li class={secondConCss()}>Quantity</li>
						<li class={secondConCss()}>Date Stock-out</li>

						<li class={secondConCss()}>Delete</li>
						<li class={secondConCss()}>Remarks</li>
					</ul>
				</div>
				<div class="bg-transparent py-1 md:py-2 font-patrick">
					<ul
						class="max-sm:text-sm gap-2 max-sm:border max-sm:border-black grid grid-cols-3 md:grid-cols-11 content-center md:gap-2"
					>
						<li class={secondOutputCss()}>
							<h4>1</h4>
						</li>

						<li class={secondOutputCss()}>
							<h4>1</h4>
						</li>

						<li
							class="flex md:grid md:col-span-3 hover:underline hover:underline-offset-4 hover:decoration-black decoration-2 overflow-x-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-white"
						>
							<h4 class="whitespace-nowrap">1</h4>
						</li>
						<li class={secondOutputCss()}>
							<h4>1</h4>
						</li>
						<li class={secondOutputCss()}>
							<h4>1</h4>
						</li>
						<li class={secondOutputCss()}>
							<h4>1</h4>
						</li>
						<li class={secondOutputCss()}>
							<h4>1</h4>
						</li>
						<li>
							<button
								class="max-sm:mb-2 h-5 md:h-7 w-6/12 md:w-9/12 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-400"
							>
								Delete
							</button>
						</li>
						<li class={secondOutputCss()}>1</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
