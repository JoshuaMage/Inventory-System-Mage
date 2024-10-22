<script>
	import { INVENTORY } from '$lib/materialStock';

	let saleQty = '';
	let materials;
	let selectedMaterial = null;
	let materialDescription = '';
	let materialCode = '';
	let unit = '';
	let submissions = [];
	let selectedDate = '';
	let submissionMessage = ''; // New variable for submission status
	$: materials = $INVENTORY;

	// Existing reactive statement to set material details
	$: if (selectedMaterial) {
		const material = materials.find((m) => m.materialName === selectedMaterial);
		if (material) {
			materialDescription = material.materialDescription;
			materialCode = material.materialCode;
			unit = material.unit;
		} else {
			materialDescription = '';
			materialCode = '';
			unit = '';
		}
	}

	function handleInput(event) {
		const value = event.target.value.replace(/[^0-9]/g, '');
		if (value.length <= 5) {
			saleQty = value;
		}
	}

	function handleSubmit(event) {
		event.preventDefault();
		const form = event.target;

		if (form.checkValidity()) {
			if (selectedMaterial && saleQty) {
				const submission = {
					materialName: selectedMaterial,
					materialDescription,
					materialCode,
					unit,
					saleQty,
					date: selectedDate,
					remarks: document.getElementById('remarks').value
				};

				const existingSubmissions = JSON.parse(localStorage.getItem('submissions')) || [];
				existingSubmissions.push(submission);
				localStorage.setItem('submissions', JSON.stringify(existingSubmissions));

				submissions = existingSubmissions;

				// Show a success message
				submissionMessage = 'Submission successful!';

				// Reset form fields
				selectedMaterial = null;
				saleQty = '';
				materialDescription = '';
				materialCode = '';
				unit = '';
				selectedDate = '';
				document.getElementById('remarks').value = '';
			}
		} else {
			// Display a message or highlight invalid fields
			alert('Please fill in all required fields.');
		}
	}

	function handleDelete(index) {
		submissions = submissions.filter((_, i) => i !== index);
		localStorage.setItem('submissions', JSON.stringify(submissions));
	}

	if (typeof window !== 'undefined') {
		submissions = JSON.parse(localStorage.getItem('submissions')) || [];
	}

	const labelCss = () =>
		'text-sm md:text-lg font-bold font-patrick text-start hover:underline hover:underline-offset-4 hover:decoration-solid hover:decoration-2 hover:decoration-nextPrevButton md:pr-2';
	const outputCss = () =>
		' h-6 md:h-8  flex justify-center w-6/12 md:w-7/12 px-3 font-normal md:font-medium text-center  text-xs md:text-base border border-black rounded-lg pl-2 hover:shadow-md hover:shadow-black opacity';
	const outputDiv = () => 'flex py-2 md:py-5';
	const secondConCss = () => 'max-sm:text-xs text-base';
	const secondOutputCss = () =>
		' hover:underline hover:underline-offset-4 hover:decoration-black decoration-2';
</script>

<main class="mt-24 h-full w-screen p-0 m-0 bg-bgDarkGrey">
	<div class="flex md:justify-center min-h-screen">
		<div class="flex flex-col w-9/12 gap-10">
			<form action="" on:submit={handleSubmit} class="max-sm:relative max-sm:left-14">
				<div class=" flex flex-col bg-white border border-black rounded-xl">
					<div
						class="text-white text-center bg-bgGrey h-14 md:h-24 content-center font-bold text-lg md:text-3xl rounded-xl"
					>
						<h1>Mage Sale Form</h1>
					</div>

					<div class="overflow-hidden">
						<div class=" md:grid md:grid-cols-2 px-5 py-2 md:py-10 md:px-24">
							<div class={outputDiv()}>
								<label for="material-name" class={labelCss()}>Material Name:</label>
								<select
									class={outputCss()}
									name="material-name"
									id="material-name"
									bind:value={selectedMaterial}
									required
								>
									<option value="" disabled selected>Select a material</option>
									{#each materials as item}
										<option value={item.materialName}>{item.materialName}</option>
									{/each}
								</select>
							</div>

							<div class={outputDiv()}>
								<h2 class={labelCss()}>Material Description:</h2>
								<p
									class="max-sm:relative max-sm:right-9 md:translate-x-1 h-auto flex justify-center w-6/12 md:w-7/12 px-3 font-normal md:font-medium text-center text-xs md:text-base border border-black rounded-lg pl-2 hover:shadow-md hover:shadow-black opacity"
								>
									{materialDescription}
								</p>
							</div>

							<div class={outputDiv()}>
								<h2 class={labelCss()}>Material Code:</h2>
								<p class={outputCss()}>{materialCode}</p>
							</div>

							<div class={outputDiv()}>
								<h2 class={labelCss()}>Unit:</h2>
								<p
									class="translate-x-16 max-sm:ml-1 md:translate-x-40 h-6 md:h-8 flex justify-center w-6/12 md:w-7/12 md:px-3 font-normal md:font-medium text-center text-base border border-black rounded-lg pl-2 hover:shadow-md hover:shadow-black opacity"
								>
									{unit}
								</p>
							</div>

							<div class={outputDiv()}>
								<h2 class={labelCss()}>Qty:</h2>
								<input
									class="max-sm:ml-3 translate-x-16 md:translate-x-24 h-6 md:h-8 flex justify-center w-6/12 md:w-7/12 md:px-3 font-normal md:font-medium text-center text-xs md:text-base border border-black rounded-lg pl-2 hover:shadow-md hover:shadow-black opacity"
									type="text"
									id="qty"
									bind:value={saleQty}
									on:input={handleInput}
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
									bind:value={selectedDate}
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
				class="flex flex-col text-center h-auto border md:border-black rounded-lg max-sm:w-screen max-sm:p-1 max-sm:m-0">
				<div class="rounded-lg bg-bgGrey">
					<ul
						class=" grid grid-cols-3 h-auto gap-2  max-sm:py-3 md:grid-cols-11 font-thin md:font-bold md:h-14 content-center text-white"
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
				{#each submissions as submission, index}
					<div class="bg-transparent py-1 md:py-2 font-patrick">
						<ul class="max-sm:text-sm  gap-2 max-sm:border max-sm:border-black  grid grid-cols-3 md:grid-cols-11 content-center md:gap-2">
							<li class={secondOutputCss()}>
								<h4>{index + 1}</h4>
							</li>
							<li class={secondOutputCss()}>
								<h4>{submission.materialName}</h4>
							</li>
							<li class="flex md:grid md:col-span-3 hover:underline hover:underline-offset-4 hover:decoration-black decoration-2 overflow-x-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-white">
								<h4 class="whitespace-nowrap">{submission.materialDescription}</h4>
							</li>													
							<li class={secondOutputCss()}>
								<h4>{submission.materialCode}</h4>
							</li>
							<li class={secondOutputCss()}>
								<h4>{submission.unit}</h4>
							</li>
							<li class={secondOutputCss()}>
								<h4>{submission.saleQty}</h4>
							</li>
							<li class={secondOutputCss()}>
								<h4>{submission.date}</h4>
							</li>
							<li>
								<button
									class="max-sm:mb-2 h-5 md:h-7 w-6/12 md:w-9/12 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-400"
									on:click={() => handleDelete(index)}
								>
									Delete
								</button>
							</li>
							<li class={secondOutputCss()}>
								{submission.remarks}
							</li>
						</ul>
					</div>
				{/each}
			</div>
		</div>
	</div>
</main>
