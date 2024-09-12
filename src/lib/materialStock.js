import { writable } from 'svelte/store';
export const INVENTORY = writable([
	{
		id: 1,
		materialName: 'Nails',
		unit: 'kg',
		materialdescription: 'High-quality steel nails for construction.',
		brand: 'NailPro',
		date: '08/18/24',
		datePurchase: '07/15/24',
		materialCode: 'P1237',
		availablematerial: 1000,
		stockin: 2000,
		stockout: 1011,
		purchaseqty: 2680,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '123 456 676',
		unitprice: '60',
		totalPrice: 'amountmoney',
		
		deliverDate: '06/15/2024',
		etaDate: '07/05/2024',
		arrivalDate: '08/01/2024',
		status: 'Pending'
	},
	{
		id: 2,
		materialName: 'Hammer',
		unit: 'pc',
		materialdescription: 'Durable claw hammer with a comfortable grip.',
		brand: 'HammerKing',

		date: '08/15/24',
		datePurchase: '06/15/24',
		materialCode: 'P1238',
		availablematerial: 1000,
		stockin: 2000,
		stockout: 850,
		purchaseqty: 2280,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '123 456 677',
		unitprice: '150',
		totalPrice: 'amountmoney',
		
		deliverDate: '06/15/2024',
		etaDate: '07/05/2024',
		arrivalDate: '08/01/2024',
		status: 'Pending'
	},
	{
		id: 3,
		materialName: 'Measuring Tape',
		unit: 'meter',
		materialdescription: 'Retractable measuring tape with a lock feature.',
		brand: 'MeasureMaster',

		date: '08/15/24',
		datePurchase: '07/1/24',
		materialCode: 'P1239',
		availablematerial: 1000,
		stockin: 2000,
		stockout: 950,
		purchaseqty: 2040,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '123 456 628',
		unitprice: '85',
		totalPrice: 'amountmoney',
		
		deliverDate: '06/15/2024',
		etaDate: '07/05/2024',
		arrivalDate: '08/01/2024',
		status: 'Pending'
	},
	{
		id: 4,
		materialName: 'Screwdriver',
		unit: 'pc',
		materialdescription: 'Multi-bit screwdriver for various screws.',
		brand: 'ScrewTight',

		date: '08/15/24',
		datePurchase: '07/25/24',
		materialCode: 'P1241',
		availablematerial: 1000,
		stockin: 2000,
		stockout: 540,
		purchaseqty: 3500,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '123 456 638',
		unitprice: '50',
		totalPrice: 'amountmoney',
		
		deliverDate: '06/15/2024',
		etaDate: '07/05/2024',
		arrivalDate: '08/01/2024',
		status: 'Pending'
	},
	{
		id: 5,
		materialName: 'Wood Glue',
		unit: 'liters',
		materialdescription: 'Strong adhesive for woodworking projects.',
		brand: 'GluePro',

		date: '08/15/24',
		datePurchase: '04/3/24',
		materialCode: 'P1242',
		availablematerial: 1000,
		stockin: 2000,
		stockout: 1016,
		purchaseqty: 2500,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '123 456 674',
		unitprice: '300',
		totalPrice: 'amountmoney',
		
		deliverDate: '06/15/2024',
		etaDate: '07/08/2024',
		arrivalDate: '08/01/2024',
		status: 'Pending'
	},
	{
		id: 6,
		materialName: 'Pliers',
		unit: 'pc',
		materialdescription: 'Heavy-duty pliers for gripping and cutting.',
		brand: 'GripStrong',

		date: '08/15/24',
		datePurchase: '04/20/24',
		materialCode: 'P1243',
		availablematerial: 1000,
		stockin: 2000,
		stockout: 350,
		purchaseqty: 6500,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '123 456 655',
		unitprice: '75',
		totalPrice: 'amountmoney',
		
		deliverDate: '06/15/2024',
		etaDate: '07/08/2024',
		arrivalDate: '08/01/2024',
		status: 'Pending'
	},
	{
		id: 7,
		materialName: 'Sandpaper',
		unit: 'pc',
		materialdescription: 'Assorted grit sandpaper for smoothing surfaces.',
		brand: 'SmoothFinish',

		date: '08/15/24',
		datePurchase: '02/09/24',
		materialCode: 'P1244',
		availablematerial: 1000,
		stockin: 2000,
		stockout: 200,
		purchaseqty: 1180,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '123 456 678',
		unitprice: '20',
		totalPrice: 'amountmoney',
		
		deliverDate: '06/15/2024',
		etaDate: '07/08/2024',
		arrivalDate: '08/01/2024',
		status: 'Pending'
	},
	{
		id: 8,
		materialName: 'Drill Bits',
		unit: 'pc',
		materialdescription: 'Set of high-speed steel drill bits.',
		brand: 'DrillMaster',

		date: '08/15/24',
		datePurchase: '07/05/24',
		materialCode: 'P1245',
		availablematerial: 1000,
		stockin: 2000,
		stockout: 190,
		purchaseqty: 3280,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '123 456 688',
		unitprice: '500',
		totalPrice: 'amountmoney',
		
		deliverDate: '06/15/2024',
		etaDate: '07/08/2024',
		arrivalDate: '08/01/2024',
		status: 'Pending'
	},
	{
		id: 9,
		materialName: 'Paint Brush',
		unit: 'pc',
		materialdescription: 'High-quality paint brush for smooth application.',
		brand: 'BrushPerfect',

		date: '08/15/24',
		datePurchase: '01/13/24',
		materialCode: 'L1243',
		availablematerial: 1000,
		stockin: 2000,
		stockout: 1021,
		purchaseqty: 3280,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '223 456 678',
		unitprice: '40',
		totalPrice: 'amountmoney',
		
		deliverDate: '06/15/2024',
		etaDate: '07/08/2024',
		arrivalDate: '08/01/2024',
		status: 'Delay'
	},
	{
		id: 10,
		materialName: 'Wrench Set',
		unit: 'pc',
		materialdescription: 'Set of adjustable wrenches for various sizes.',
		brand: 'TightFit',

		date: '08/15/24',
		datePurchase: '07/29/24',
		materialCode: 'L1244',
		availablematerial: 1000,
		stockin: 2000,
		stockout: 400,
		purchaseqty: 4280,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '323 456 678',
		unitprice: '900',
		totalPrice: 'amountmoney',
		
		deliverDate: '06/24/2024',
		etaDate: '07/12/2024',
		arrivalDate: '08/14/2024',
		status: 'Delay'
	},
	{
		id: 11,
		materialName: 'Utility Knife',
		unit: 'pc',
		materialdescription: 'Sharp utility knife with retractable blade.',
		brand: 'KnifeEdge',

		date: '08/15/24',
		datePurchase: '05/01/24',
		materialCode: 'L1245',
		availablematerial: 1000,
		stockin: 2000,
		stockout: 1024,
		purchaseqty: 5280,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '723 456 678',
		unitprice: '100',
		totalPrice: 'amountmoney',
		
		deliverDate: '06/24/2024',
		etaDate: '07/12/2024',
		arrivalDate: '08/14/2024',
		status: 'Delay'
	},
	{
		id: 12,
		materialName: 'Level',
		unit: 'pc',
		materialdescription: 'Precision level for accurate measurements.',
		brand: 'LevelLine',

		date: '08/15/24',
		datePurchase: '07/24/24',
		materialCode: 'L1246',
		availablematerial: 1000,
		stockin: 2000,
		stockout: 800,
		purchaseqty: 2000,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '423 456 678',
		unitprice: '120',
		totalPrice: 'amountmoney',
		
		deliverDate: '06/24/2024',
		etaDate: '07/12/2024',
		arrivalDate: '08/14/2024',
		status: 'Delay'
	},
	{
		id: 13,
		materialName: 'Screws',
		unit: 'kg',
		materialdescription: 'Assorted screws for various applications.',
		brand: 'ScrewMaster',

		date: '08/19/24',
		datePurchase: '06/15/24',
		materialCode: 'L1247',
		availablematerial: 1000,
		stockin: 2000,
		stockout: 780,
		purchaseqty: 2030,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '623 456 678',
		unitprice: '50',
		totalPrice: 'amountmoney',
		
		deliverDate: '06/24/2024',
		etaDate: '07/12/2024',
		arrivalDate: '08/14/2024',
		status: 'Delay'
	},
	{
		id: 14,
		materialName: 'Caulking Gun',
		unit: 'pc',
		materialdescription: 'Heavy-duty caulking gun for sealants.',
		brand: 'SealPro',

		date: '08/19/24',
		datePurchase: '03/16/24',
		materialCode: 'L1248',
		availablematerial: 1000,
		stockin: 2000,
		stockout: 730,
		purchaseqty: 2580,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '823 456 678',
		unitprice: '250',
		totalPrice: 'amountmoney',
		
		deliverDate: '06/24/2024',
		etaDate: '07/12/2024',
		arrivalDate: '08/14/2024',
		status: 'Delay'
	},
	{
		id: 15,
		materialName: 'Tape Measure',
		unit: 'meter',
		materialdescription: 'Durable tape measure with easy-read markings.',
		brand: 'MeasureRight',

		date: '08/19/24',
		datePurchase: '08/18/24',
		materialCode: 'L1249',
		availablematerial: 1000,
		stockin: 2000,
		stockout: 860,
		purchaseqty: 2700,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '923 456 678',
		unitprice: '75',
		totalPrice: 'amountmoney',
		
		deliverDate: '06/27/2024',
		etaDate: '07/18/2024',
		arrivalDate: '08/16/2024',
		status: 'Delay'
	},
	{
		id: 16,
		materialName: 'Saw',
		unit: 'pc',
		materialdescription: 'Sharp hand saw for cutting wood.',
		brand: 'CutSharp',

		date: '08/19/24',
		datePurchase: '04/24/24',
		materialCode: 'M1251',
		availablematerial: 1000,
		stockin: 2000,
		stockout: 680,
		purchaseqty: 3200,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '123 456 678',
		unitprice: '1500',
		totalPrice: 'amountmoney',
		
		deliverDate: '06/27/2024',
		etaDate: '07/18/2024',
		arrivalDate: '08/16/2024',
		status: 'Delay'
	},
	{
		id: 17,
		materialName: 'Bolt Cutter',
		unit: 'pc',
		materialdescription: 'Powerful bolt cutter for tough materials.',
		brand: 'BoltBreak',

		date: '08/19/24',
		datePurchase: '08/01/24',
		materialCode: 'M1252',
		availablematerial: 1000,
		stockin: 2000,
		stockout: 1031,
		purchaseqty: 3240,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '123 456 678',
		unitprice: '1300',
		totalPrice: 'amountmoney',
		
		deliverDate: '06/27/2024',
		etaDate: '07/18/2024',
		arrivalDate: '08/16/2024',
		status: 'Delay'
	},
	{
		id: 18,
		materialName: 'Chisel Set',
		unit: 'pc',
		materialdescription: 'Set of wood chisels for carving and shaping.',
		brand: 'ChiselCraft',

		date: '08/19/24',
		datePurchase: '07/11/24',
		materialCode: 'M1253',
		availablematerial: 1000,
		stockin: 2000,
		stockout: 1032,
		purchaseqty: 3250,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '123 456 678',
		unitprice: '800',
		totalPrice: 'amountmoney',
		
		deliverDate: '06/27/2024',
		etaDate: '07/18/2024',
		arrivalDate: '08/16/2024',
		status: 'Arrive'
	},
	{
		id: 19,
		materialName: 'Workbench',
		unit: 'pc',
		materialdescription: 'Sturdy workbench with storage shelves.',
		brand: 'BenchPro',

		date: '08/20/24',
		datePurchase: '05/26/24',
		materialCode: 'M1254',
		availablematerial: 1000,
		stockin: 2000,
		stockout: 1033,
		purchaseqty: 5250,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '123 456 678',
		unitprice: '3000',
		totalPrice: 'amountmoney',
		
		deliverDate: '06/27/2024',
		etaDate: '07/18/2024',
		arrivalDate: '08/16/2024',
		status: 'Arrive'
	},
	{
		id: 20,
		materialName: 'Safety Glasses',
		unit: 'pc',
		materialdescription: 'Protective eyewear for workshop safety.',
		brand: 'SafeVision',

		date: '08/20/24',
		datePurchase: '01/14/24',
		materialCode: 'M1255',
		availablematerial: 1000,
		stockin: 2000,
		stockout: 1034,
		purchaseqty: 2250,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '123 456 678',
		unitprice: '150',
		totalPrice: 'amountmoney',
		
		deliverDate: '06/05/2024',
		etaDate: '07/20/2024',
		arrivalDate: '08/20/2024',
		status: 'Arrive'
	},
	{
		id: 21,
		materialName: 'Socket Set',
		unit: 'pc',
		materialdescription: 'Complete set of sockets for various bolts.',
		brand: 'SocketMaster',

		date: '08/20/24',
		datePurchase: '04/22/24',
		materialCode: 'M1256',
		availablematerial: 1000,
		stockin: 2000,
		stockout: 1035,
		purchaseqty: 4250,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '123 456 678',
		unitprice: '360',
		totalPrice: 'amountmoney',
		
		deliverDate: '06/05/2024',
		etaDate: '07/20/2024',
		arrivalDate: '08/20/2024',
		status: 'Pending'
	},
	{
		id: 22,
		materialName: 'Tool Box',
		unit: 'pc',
		materialdescription: 'Portable tool box with multiple compartments.',
		brand: 'ToolSafe',

		date: '08/21/24',
		datePurchase: '06/26/24',
		materialCode: 'M1257',
		availablematerial: 1000,
		stockin: 2000,
		stockout: 1036,
		purchaseqty: 6250,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '123 456 678',
		unitprice: '1100',
		totalPrice: 'amountmoney',
		
		deliverDate: '06/05/2024',
		etaDate: '07/20/2024',
		arrivalDate: '08/20/2024',
		status: 'Pending'
	},
	{
		id: 23,
		materialName: 'Work Gloves',
		unit: 'pc',
		materialdescription: 'Durable gloves for hand protection.',
		brand: 'HandGuard',

		date: '08/21/24',
		datePurchase: '03/18/24',
		materialCode: 'M1258',
		availablematerial: 1000,
		stockin: 2000,
		stockout: 1037,
		purchaseqty: 7250,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '123 456 678',
		unitprice: '35',
		totalPrice: 'amountmoney',
		
		deliverDate: '06/05/2024',
		etaDate: '07/20/2024',
		arrivalDate: '08/20/2024',
		status: 'Arrive'
	},
	{
		id: 24,
		materialName: 'Drill',
		unit: 'pc',
		materialdescription: 'Cordless drill with variable speed settings.',
		brand: 'DrillPro',

		date: '08/21/24',
		datePurchase: '07/15/24',
		materialCode: 'M1259',
		availablematerial: 1000,
		stockin: 2000,
		stockout: 1038,
		purchaseqty: 8200,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '123 456 678',
		unitprice: '550',
		totalPrice: 'amountmoney',
		
		deliverDate: '06/05/2024',
		etaDate: '07/20/2024',
		arrivalDate: '08/20/2024',
		status: 'Arrive'
	},
	{
		id: 25,
		materialName: 'Tape',
		unit: 'meter',
		materialdescription: 'Strong adhesive tape for various uses.',
		brand: 'TapeStick',

		date: '08/21/24',
		datePurchase: '07/02/24',
		materialCode: 'M1250',
		availablematerial: 1000,
		stockin: 2000,
		stockout: 1039,
		purchaseqty: 2000,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '123 456 678',
		unitprice: '30',
		totalPrice: 'amountmoney',
		
		deliverDate: '06/10/2024',
		etaDate: '07/23/2024',
		arrivalDate: '08/14/2024',
		status: 'Arrive'
	},
	{
		id: 26,
		materialName: 'Ladder',
		unit: 'pc',
		materialdescription: 'Foldable ladder for reaching high places.',
		brand: 'StepUp',

		date: '08/21/24',
		datePurchase: '01/11/24',
		materialCode: 'M1252',
		availablematerial: 1000,
		stockin: 2000,
		stockout: 1001,
		purchaseqty: 2680,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '123 456 678',
		unitprice: '240',
		totalPrice: 'amountmoney',
		
		deliverDate: '06/10/2024',
		etaDate: '07/23/2024',
		arrivalDate: '08/14/2024',
		status: 'Arrive'
	},
	{
		id: 27,
		materialName: 'Flashlight',
		unit: 'pc',
		materialdescription: 'High-intensity flashlight for dark areas.',
		brand: 'BrightBeam',

		date: '08/22/24',
		datePurchase: '05/03/24',
		materialCode: 'M1262',
		availablematerial: 1000,
		stockin: 2000,
		stockout: 1002,
		purchaseqty: 2880,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '123 456 672',
		unitprice: '340',
		totalPrice: 'amountmoney',
		
		deliverDate: '06/10/2024',
		etaDate: '07/23/2024',
		arrivalDate: '08/14/2024',
		status: 'Arrive'
	},
	{
		id: 28,
		materialName: 'Hex Keys',
		unit: 'pc',
		materialdescription: 'Set of hex keys for hexagonal bolts.',
		brand: 'HexMaster',

		date: '08/22/24',
		datePurchase: '07/30/24',
		materialCode: 'P1234',
		purchaseqty: 1000,
		stockin: 2000,
		stockout: 800,
		purchaseqty: 6880,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '123 456 673',
		unitprice: '1200',
		totalPrice: 'amountmoney',
		
		deliverDate: '06/10/2024',
		etaDate: '07/23/2024',
		arrivalDate: '08/14/2024',
		status: 'Arrive'
	},
	{
		id: 29,
		materialName: 'Wire Cutter',
		unit: 'pc',
		materialdescription: 'Sharp wire cutter for clean cuts.',
		brand: 'WireSharp',

		date: '08/2./24',
		datePurchase: '05/29/24',
		materialCode: 'P1235',
		availablematerial: 1000,
		stockin: 2000,
		stockout: 700,
		purchaseqty: 6830,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '123 456 674',
		unitprice: '600',
		totalPrice: 'amountmoney',
		
		deliverDate: '06/10/2024',
		etaDate: '07/23/2024',
		arrivalDate: '08/14/2024',
		status: 'Arrive'
	},
	{
		id: 30,
		materialName: 'Hammer',
		unit: 'pc',
		datePurchase: '05/29/24',
		materialCode: "P1236",
		materialdescription: 'Heavy-duty sledgehammer for demolition.',
		brand: "HammerForce",
		date: '08/23/24',
		datePurchase: '07/08/24',
		availablematerial: 1000,
		stockin: 2000,
		stockout: 500,
		purchaseqty: 2500,
		pendingQty: 500,
		purchaseNumber: 'P12345',
		vendor: 'dummy - Inc company',
		vendorPhonenumber: +63123456781,
		vendorTelephone: '+111 222 333',
		vendorEmail: 'dummy@email',
		vendorAddress: 'Mariveles Bataan',
		vendeorBankAcc: '123 456 675',
		unitprice: '140',
		totalPrice: 'amountmoney',
		deliverDate: '06/15/2024',
		etaDate: '07/05/2024',
		arrivalDate: '08/01/2024',
		status: 'Arrive'
	}
]);
