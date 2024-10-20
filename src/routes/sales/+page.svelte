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
		'text-lg font-bold font-patrick text-start hover:underline hover:decoration-solid hover:decoration-2 hover:decoration-nextPrevButton pr-2';
	const outputCss = () =>
		'h-8  flex justify-center w-7/12 px-3 font-medium text-center text-base border border-black rounded-lg pl-2 hover:shadow-md hover:shadow-black opacity';
	const outputDiv = () => 'flex  py-5';
</script>

bgGrey: '#000000',
<main class="mt-24 h-full w-screen p-0 m-0 bg-bgDarkGrey">
	<div class="flex justify-center min-h-screen">
		<div class="flex flex-col w-9/12 gap-10">
			<form action="" on:submit={handleSubmit}>
				<div class="flex flex-col bg-white border border-black rounded-xl">
					<div
						class="text-white text-center bg-bgGrey h-24 content-center font-bold text-3xl rounded-xl"
					>
						<h1>Mage Sale Form</h1>
					</div>

					<div class="">
						<div class="grid grid-cols-2 py-10 px-24">
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
									class="translate-x-1 h-auto flex justify-center w-7/12 px-3 font-medium text-center text-base border border-black rounded-lg pl-2 hover:shadow-md hover:shadow-black opacity"
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
									class="translate-x-40 h-8 flex justify-center w-7/12 px-3 font-medium text-center text-base border border-black rounded-lg pl-2 hover:shadow-md hover:shadow-black opacity"
								>
									{unit}
								</p>
							</div>

							<div class={outputDiv()}>
								<h2 class={labelCss()}>Qty:</h2>
								<input
									class="translate-x-24 h-8 flex justify-center w-7/12 px-3 font-medium text-center text-base border border-black rounded-lg pl-2 hover:shadow-md hover:shadow-black opacity"
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
									class="translate-x-40 h-8 flex justify-center w-7/12 px-3 font-medium text-center text-base border border-black rounded-lg pl-2 hover:shadow-md hover:shadow-black opacity"
									type="date"
									id="date"
									bind:value={selectedDate}
									required
								/>
							</div>
							<div class={outputDiv()}>
								<h2 class={labelCss()}>Remarks:</h2>
								<input
									class="translate-x-14 h-8 flex justify-center w-7/12 px-3 font-medium text-center text-base border border-black rounded-lg pl-2 hover:shadow-md hover:shadow-black opacity"
									type="text"
									id="remarks"
									required
								/>
							</div>
							<div class="flex justify-end translate-x-20 translate-y-16">
								<button
									type="submit"
									class="h-9 px-10 py-1 border border-black rounded-lg hover:font-extrabold hover:bg-nextPrevButton hover:text-white cursor-pointer hover:shadow-md hover:shadow-nextPrevButton"
								>
									Submit
								</button>
							</div>
						</div>
					</div>
				</div>
			</form>

			<div class="flex flex-col text-center h-auto border border-black rounded-lg">
				<div class="rounded-lg bg-bgGrey">
					<ul class="grid grid-cols-12 font-bold h-14 content-center text-white">
						<li>Item</li>
						<li>Material Name</li>
						<li class="grid col-span-3">Material Description</li>
						<li>Material Code</li>
						<li>Unit</li>
						<li>Quantity</li>
						<li>Date Stock-out</li>
						<li>Remarks</li>
						<li>Edit</li>
						<li>Delete</li>
					</ul>
				</div>
				{#each submissions as submission, index}
					<div class="bg-transparent py-2">
						<ul class="grid grid-cols-12 content-center gap-2">
							<li class="hover:underline hover:decoration-nextPrevButton decoration-2">
								{index + 1}
							</li>
							<li class="hover:underline hover:decoration-nextPrevButton decoration-2">
								{submission.materialName}
							</li>
							<li
								class="grid col-span-3 hover:underline hover:decoration-nextPrevButton decoration-2"
							>
								{submission.materialDescription}
							</li>
							<li class="hover:underline hover:decoration-nextPrevButton decoration-2">
								{submission.materialCode}
							</li>
							<li class="hover:underline hover:decoration-nextPrevButton decoration-2">
								{submission.unit}
							</li>
							<li class="hover:underline hover:decoration-nextPrevButton decoration-2">
								{submission.saleQty}
							</li>
							<li class="hover:underline hover:decoration-nextPrevButton decoration-2">
								{submission.date}
							</li>
							<li class="hover:underline hover:decoration-nextPrevButton decoration-2">
								{submission.remarks}
							</li>
							<button
								class="h-7 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white justify-items-center"
								on:click={() => handleDelete(index)}
							>
								<svg
									fill="#000000"
									width="27px"
									height="27px"
									viewBox="0 0 32 32"
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
									><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
										id="SVGRepo_tracerCarrier"
										stroke-linecap="round"
										stroke-linejoin="round"
									></g><g id="SVGRepo_iconCarrier">
										<title>edit</title>
										<path
											d="M10.681 18.207l-2.209 5.67 5.572-2.307-3.363-3.363zM26.855 6.097l-0.707-0.707c-0.78-0.781-2.047-0.781-2.828 0l-1.414 1.414 3.535 3.536 1.414-1.414c0.782-0.781 0.782-2.048 0-2.829zM10.793 17.918l0.506-0.506 3.535 3.535 9.9-9.9-3.535-3.535 0.707-0.708-11.113 11.114zM23.004 26.004l-17.026 0.006 0.003-17.026 11.921-0.004 1.868-1.98h-14.805c-0.552 0-1 0.447-1 1v19c0 0.553 0.448 1 1 1h19c0.553 0 1-0.447 1-1v-14.058l-2.015 1.977 0.054 11.085z"
										></path>
									</g></svg
								>
							</button>
							<button
								class="h-7 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white"
								on:click={() => handleDelete(index)}
							>
								<svg
									width="27px"
									height="27px"
									viewBox="0 0 1024 1024"
									xmlns="http://www.w3.org/2000/svg"
									fill="#000000"
									><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
										id="SVGRepo_tracerCarrier"
										stroke-linecap="round"
										stroke-linejoin="round"
									></g><g id="SVGRepo_iconCarrier"
										><path
											fill="#000000"
											d="M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z"
										></path></g
									></svg
								>
							</button>
						</ul>
					</div>
				{/each}
			</div>
		</div>
	</div>
</main>
