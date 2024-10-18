<script>
	import { INVENTORY } from '$lib/materialStock';

	let saleQty = '';
	let materials;
	let selectedMaterial = null;
	let materialDescription = '';
	let materialCode = '';
	let unit = '';

	$: materials = $INVENTORY;

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

	const labelCss = () => 'text-lg font-bold font-patrick py-7 text-start';
	const outputCss = () => 'w-32 font-medium text-base';
</script>

<main class="mt-24 h-screen w-screen bg-bgDarkGrey p-0 m-0">
	<div class="flex justify-center">
		<div class="flex-col w-7/12">
			<h1 class="text-white text-center bg-bgGrey h-24 content-center font-bold text-3xl">
				Mage Sale Form
			</h1>

			<div class="bg-white grid border border-black">
				<div action="" class="grid grid-cols-2 px-10">
					<div class={labelCss()} for="material-name">
						Material Name:
						<select
							class={outputCss()}
							name="material-name"
							id="material-name"
							bind:value={selectedMaterial}
						>
							{#each materials as item}
								<option value={item.materialName}>{item.materialName}</option>
							{/each}
						</select>
					</div>

					<div class="flex">
						<h2 class={labelCss()}>Material Description:</h2>
						<p class="self-center px-1 font-medium">{materialDescription}</p>
					</div>

					<div class="flex">
						<h2 class={labelCss()}>Material Code:</h2>
						<p class="self-center px-1 font-medium">{materialCode}</p>
					</div>

					<div class="flex">
						<h2 class={labelCss()}>Unit:</h2>
						<p class="self-center px-1 font-medium">{unit}</p>
					</div>

					<div class={labelCss()} for="qty">
						Qty: <input
							class={outputCss()}
							type="text"
							id="qty"
							bind:value={saleQty}
							on:input={handleInput}
							maxlength="5"
						/>
					</div>
					<div class={labelCss()} for="date">
						Date: <input class={outputCss()} type="date" id="date" />
					</div>
					<div class={labelCss()} for="remarks">
						Remarks: <input class="w-38 font-medium text-base" type="text" id="remarks" />
					</div>
					<div for="" class={labelCss()}>
						<input
							type="submit"
							class="px-5 py-1 border border-black rounded hover:font-extrabold hover:bg-nextPrevButton hover:text-white cursor-pointer"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
