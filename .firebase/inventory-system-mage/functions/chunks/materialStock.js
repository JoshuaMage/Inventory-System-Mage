import { w as writable } from "./index.js";
const INVENTORY = writable([
  {
    id: 1,
    materialName: "Nails",
    unit: "kg",
    materialDescription: "High-quality steel nails for construction.",
    brand: "NailPro",
    date: "08/18/24",
    datePurchase: "07/15/24",
    materialCode: "P1237",
    availableMaterial: 1e3,
    stockIn: 2e3,
    stockOut: 1011,
    purchaseQty: 2680,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "123 456 676",
    uniPrice: "60",
    deliverDate: "06/15/2024",
    etaDate: "07/05/2024",
    arrivalDate: "08/01/2024",
    status: "Pending"
  },
  {
    id: 2,
    materialName: "Hammer",
    unit: "pc",
    materialDescription: "Durable claw hammer with a comfortable grip.",
    brand: "HammerKing",
    date: "08/15/24",
    datePurchase: "06/15/24",
    materialCode: "P1238",
    availableMaterial: 1e3,
    stockIn: 2e3,
    stockOut: 850,
    purchaseQty: 2280,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "123 456 677",
    uniPrice: "150",
    deliverDate: "06/15/2024",
    etaDate: "07/05/2024",
    arrivalDate: "08/01/2024",
    status: "Pending"
  },
  {
    id: 3,
    materialName: "Measuring Tape",
    unit: "meter",
    materialDescription: "Retractable measuring tape with a lock feature.",
    brand: "MeasureMaster",
    date: "08/15/24",
    datePurchase: "07/1/24",
    materialCode: "P1239",
    availableMaterial: 1e3,
    stockIn: 2e3,
    stockOut: 950,
    purchaseQty: 2040,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "123 456 628",
    uniPrice: "85",
    deliverDate: "06/15/2024",
    etaDate: "07/05/2024",
    arrivalDate: "08/01/2024",
    status: "Pending"
  },
  {
    id: 4,
    materialName: "Screwdriver",
    unit: "pc",
    materialDescription: "Multi-bit screwdriver for various screws.",
    brand: "ScrewTight",
    date: "08/15/24",
    datePurchase: "07/25/24",
    materialCode: "P1241",
    availableMaterial: 1e3,
    stockIn: 2e3,
    stockOut: 540,
    purchaseQty: 3500,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "123 456 638",
    uniPrice: "50",
    deliverDate: "06/15/2024",
    etaDate: "07/05/2024",
    arrivalDate: "08/01/2024",
    status: "Pending"
  },
  {
    id: 5,
    materialName: "Wood Glue",
    unit: "liters",
    materialDescription: "Strong adhesive for woodworking projects.",
    brand: "GluePro",
    date: "08/15/24",
    datePurchase: "04/3/24",
    materialCode: "P1242",
    availableMaterial: 1e3,
    stockIn: 2e3,
    stockOut: 1016,
    purchaseQty: 2500,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "123 456 674",
    uniPrice: "300",
    deliverDate: "06/15/2024",
    etaDate: "07/08/2024",
    arrivalDate: "08/01/2024",
    status: "Pending"
  },
  {
    id: 6,
    materialName: "Pliers",
    unit: "pc",
    materialDescription: "Heavy-duty pliers for gripping and cutting.",
    brand: "GripStrong",
    date: "08/15/24",
    datePurchase: "04/20/24",
    materialCode: "P1243",
    availableMaterial: 1e3,
    stockIn: 2e3,
    stockOut: 350,
    purchaseQty: 6500,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "123 456 655",
    uniPrice: "75",
    deliverDate: "06/15/2024",
    etaDate: "07/08/2024",
    arrivalDate: "08/01/2024",
    status: "Pending"
  },
  {
    id: 7,
    materialName: "Sandpaper",
    unit: "pc",
    materialDescription: "Assorted grit sandpaper for smoothing surfaces.",
    brand: "SmoothFinish",
    date: "08/15/24",
    datePurchase: "02/09/24",
    materialCode: "P1244",
    availableMaterial: 1e3,
    stockIn: 2e3,
    stockOut: 200,
    purchaseQty: 1180,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "123 456 678",
    uniPrice: "20",
    deliverDate: "06/15/2024",
    etaDate: "07/08/2024",
    arrivalDate: "08/01/2024",
    status: "Pending"
  },
  {
    id: 8,
    materialName: "Drill Bits",
    unit: "pc",
    materialDescription: "Set of high-speed steel drill bits.",
    brand: "DrillMaster",
    date: "08/15/24",
    datePurchase: "07/05/24",
    materialCode: "P1245",
    availableMaterial: 1e3,
    stockIn: 2e3,
    stockOut: 190,
    purchaseQty: 3280,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "123 456 688",
    uniPrice: "500",
    deliverDate: "06/15/2024",
    etaDate: "07/08/2024",
    arrivalDate: "08/01/2024",
    status: "Pending"
  },
  {
    id: 9,
    materialName: "Paint Brush",
    unit: "pc",
    materialDescription: "High-quality paint brush for smooth application.",
    brand: "BrushPerfect",
    date: "08/15/24",
    datePurchase: "01/13/24",
    materialCode: "L1243",
    availableMaterial: 1e3,
    stockIn: 2e3,
    stockOut: 1021,
    purchaseQty: 3280,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "223 456 678",
    uniPrice: "40",
    deliverDate: "06/15/2024",
    etaDate: "07/08/2024",
    arrivalDate: "08/01/2024",
    status: "Delay"
  },
  {
    id: 10,
    materialName: "Wrench Set",
    unit: "pc",
    materialDescription: "Set of adjustable wrenches for various sizes.",
    brand: "TightFit",
    date: "08/15/24",
    datePurchase: "07/29/24",
    materialCode: "L1244",
    availableMaterial: 1e3,
    stockIn: 2e3,
    stockOut: 400,
    purchaseQty: 4280,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "323 456 678",
    uniPrice: "900",
    deliverDate: "06/24/2024",
    etaDate: "07/12/2024",
    arrivalDate: "08/14/2024",
    status: "Delay"
  },
  {
    id: 11,
    materialName: "Utility Knife",
    unit: "pc",
    materialDescription: "Sharp utility knife with retractable blade.",
    brand: "KnifeEdge",
    date: "08/15/24",
    datePurchase: "05/01/24",
    materialCode: "L1245",
    availableMaterial: 1e3,
    stockIn: 2e3,
    stockOut: 1024,
    purchaseQty: 5280,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "723 456 678",
    uniPrice: "100",
    deliverDate: "06/24/2024",
    etaDate: "07/12/2024",
    arrivalDate: "08/14/2024",
    status: "Delay"
  },
  {
    id: 12,
    materialName: "Level",
    unit: "pc",
    materialDescription: "Precision level for accurate measurements.",
    brand: "LevelLine",
    date: "08/15/24",
    datePurchase: "07/24/24",
    materialCode: "L1246",
    availableMaterial: 1e3,
    stockIn: 2e3,
    stockOut: 800,
    purchaseQty: 2e3,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "423 456 678",
    uniPrice: "120",
    deliverDate: "06/24/2024",
    etaDate: "07/12/2024",
    arrivalDate: "08/14/2024",
    status: "Delay"
  },
  {
    id: 13,
    materialName: "Screws",
    unit: "kg",
    materialDescription: "Assorted screws for various applications.",
    brand: "ScrewMaster",
    date: "08/19/24",
    datePurchase: "06/15/24",
    materialCode: "L1247",
    availableMaterial: 1e3,
    stockIn: 2e3,
    stockOut: 780,
    purchaseQty: 2030,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "623 456 678",
    uniPrice: "50",
    deliverDate: "06/24/2024",
    etaDate: "07/12/2024",
    arrivalDate: "08/14/2024",
    status: "Delay"
  },
  {
    id: 14,
    materialName: "Caulking Gun",
    unit: "pc",
    materialDescription: "Heavy-duty caulking gun for sealants.",
    brand: "SealPro",
    date: "08/19/24",
    datePurchase: "03/16/24",
    materialCode: "L1248",
    availableMaterial: 1e3,
    stockIn: 2e3,
    stockOut: 730,
    purchaseQty: 2580,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "823 456 678",
    uniPrice: "250",
    deliverDate: "06/24/2024",
    etaDate: "07/12/2024",
    arrivalDate: "08/14/2024",
    status: "Delay"
  },
  {
    id: 15,
    materialName: "Tape Measure",
    unit: "meter",
    materialDescription: "Durable tape measure with easy-read markings.",
    brand: "MeasureRight",
    date: "08/19/24",
    datePurchase: "08/18/24",
    materialCode: "L1249",
    availableMaterial: 1e3,
    stockIn: 2e3,
    stockOut: 860,
    purchaseQty: 2700,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "923 456 678",
    uniPrice: "75",
    deliverDate: "06/27/2024",
    etaDate: "07/18/2024",
    arrivalDate: "08/16/2024",
    status: "Delay"
  },
  {
    id: 16,
    materialName: "Saw",
    unit: "pc",
    materialDescription: "Sharp hand saw for cutting wood.",
    brand: "CutSharp",
    date: "08/19/24",
    datePurchase: "04/24/24",
    materialCode: "M1251",
    availableMaterial: 1e3,
    stockIn: 2e3,
    stockOut: 680,
    purchaseQty: 3200,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "123 456 678",
    uniPrice: "1500",
    deliverDate: "06/27/2024",
    etaDate: "07/18/2024",
    arrivalDate: "08/16/2024",
    status: "Delay"
  },
  {
    id: 17,
    materialName: "Bolt Cutter",
    unit: "pc",
    materialDescription: "Powerful bolt cutter for tough materials.",
    brand: "BoltBreak",
    date: "08/19/24",
    datePurchase: "08/01/24",
    materialCode: "M1252",
    availableMaterial: 1e3,
    stockIn: 2e3,
    stockOut: 1031,
    purchaseQty: 3240,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "123 456 678",
    uniPrice: "1300",
    deliverDate: "06/27/2024",
    etaDate: "07/18/2024",
    arrivalDate: "08/16/2024",
    status: "Delay"
  },
  {
    id: 18,
    materialName: "Chisel Set",
    unit: "pc",
    materialDescription: "Set of wood chisels for carving and shaping.",
    brand: "ChiselCraft",
    date: "08/19/24",
    datePurchase: "07/11/24",
    materialCode: "M1253",
    availableMaterial: 1e3,
    stockIn: 2e3,
    stockOut: 1032,
    purchaseQty: 3250,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "123 456 678",
    uniPrice: "800",
    deliverDate: "06/27/2024",
    etaDate: "07/18/2024",
    arrivalDate: "08/16/2024",
    status: "Arrive"
  },
  {
    id: 19,
    materialName: "Workbench",
    unit: "pc",
    materialDescription: "Sturdy workbench with storage shelves.",
    brand: "BenchPro",
    date: "08/20/24",
    datePurchase: "05/26/24",
    materialCode: "M1254",
    availableMaterial: 1e3,
    stockIn: 2e3,
    stockOut: 1033,
    purchaseQty: 5250,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "123 456 678",
    uniPrice: "3000",
    deliverDate: "06/27/2024",
    etaDate: "07/18/2024",
    arrivalDate: "08/16/2024",
    status: "Arrive"
  },
  {
    id: 20,
    materialName: "Safety Glasses",
    unit: "pc",
    materialDescription: "Protective Eye wear for workshop safety.",
    brand: "SafeVision",
    date: "08/20/24",
    datePurchase: "01/14/24",
    materialCode: "M1255",
    availableMaterial: 1e3,
    stockIn: 2e3,
    stockOut: 1034,
    purchaseQty: 2250,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "123 456 678",
    uniPrice: "150",
    deliverDate: "06/05/2024",
    etaDate: "07/20/2024",
    arrivalDate: "08/20/2024",
    status: "Arrive"
  },
  {
    id: 21,
    materialName: "Socket Set",
    unit: "pc",
    materialDescription: "Complete set of sockets for various bolts.",
    brand: "SocketMaster",
    date: "08/20/24",
    datePurchase: "04/22/24",
    materialCode: "M1256",
    availableMaterial: 1e3,
    stockIn: 2e3,
    stockOut: 1035,
    purchaseQty: 4250,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "123 456 678",
    uniPrice: "360",
    deliverDate: "06/05/2024",
    etaDate: "07/20/2024",
    arrivalDate: "08/20/2024",
    status: "Pending"
  },
  {
    id: 22,
    materialName: "Tool Box",
    unit: "pc",
    materialDescription: "Portable tool box with multiple compartments.",
    brand: "ToolSafe",
    date: "08/21/24",
    datePurchase: "06/26/24",
    materialCode: "M1257",
    availableMaterial: 1e3,
    stockIn: 2e3,
    stockOut: 1036,
    purchaseQty: 6250,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "123 456 678",
    uniPrice: "1100",
    deliverDate: "06/05/2024",
    etaDate: "07/20/2024",
    arrivalDate: "08/20/2024",
    status: "Pending"
  },
  {
    id: 23,
    materialName: "Work Gloves",
    unit: "pc",
    materialDescription: "Durable gloves for hand protection.",
    brand: "HandGuard",
    date: "08/21/24",
    datePurchase: "03/18/24",
    materialCode: "M1258",
    availableMaterial: 1e3,
    stockIn: 2e3,
    stockOut: 1037,
    purchaseQty: 7250,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "123 456 678",
    uniPrice: "35",
    deliverDate: "06/05/2024",
    etaDate: "07/20/2024",
    arrivalDate: "08/20/2024",
    status: "Arrive"
  },
  {
    id: 24,
    materialName: "Drill",
    unit: "pc",
    materialDescription: "Cordless drill with variable speed settings.",
    brand: "DrillPro",
    date: "08/21/24",
    datePurchase: "07/15/24",
    materialCode: "M1259",
    availableMaterial: 1e3,
    stockIn: 2e3,
    stockOut: 1038,
    purchaseQty: 8200,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "123 456 678",
    uniPrice: "550",
    deliverDate: "06/05/2024",
    etaDate: "07/20/2024",
    arrivalDate: "08/20/2024",
    status: "Arrive"
  },
  {
    id: 25,
    materialName: "Tape",
    unit: "meter",
    materialDescription: "Strong adhesive tape for various uses.",
    brand: "TapeStick",
    date: "08/21/24",
    datePurchase: "07/02/24",
    materialCode: "M1250",
    availableMaterial: 1e3,
    stockIn: 2e3,
    stockOut: 1039,
    purchaseQty: 2e3,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "123 456 678",
    uniPrice: "30",
    deliverDate: "06/10/2024",
    etaDate: "07/23/2024",
    arrivalDate: "08/14/2024",
    status: "Arrive"
  },
  {
    id: 26,
    materialName: "Ladder",
    unit: "pc",
    materialDescription: "Foldable ladder for reaching high places.",
    brand: "StepUp",
    date: "08/21/24",
    datePurchase: "01/11/24",
    materialCode: "M1252",
    availableMaterial: 1e3,
    stockIn: 2e3,
    stockOut: 1001,
    purchaseQty: 2680,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "123 456 678",
    uniPrice: "240",
    deliverDate: "06/10/2024",
    etaDate: "07/23/2024",
    arrivalDate: "08/14/2024",
    status: "Arrive"
  },
  {
    id: 27,
    materialName: "Flashlight",
    unit: "pc",
    materialDescription: "High-intensity flashlight for dark areas.",
    brand: "BrightBeam",
    date: "08/22/24",
    datePurchase: "05/03/24",
    materialCode: "M1262",
    availableMaterial: 1e3,
    stockIn: 2e3,
    stockOut: 1002,
    purchaseQty: 2880,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "123 456 672",
    uniPrice: "340",
    deliverDate: "06/10/2024",
    etaDate: "07/23/2024",
    arrivalDate: "08/14/2024",
    status: "Arrive"
  },
  {
    id: 28,
    materialName: "Hex Keys",
    unit: "pc",
    materialDescription: "Set of hex keys for hexagonal bolts.",
    brand: "HexMaster",
    date: "08/22/24",
    datePurchase: "07/30/24",
    materialCode: "P1234",
    purchaseQty: 1e3,
    stockIn: 2e3,
    stockOut: 800,
    purchaseQty: 6880,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "123 456 673",
    uniPrice: "1200",
    deliverDate: "06/10/2024",
    etaDate: "07/23/2024",
    arrivalDate: "08/14/2024",
    status: "Arrive"
  },
  {
    id: 29,
    materialName: "Wire Cutter",
    unit: "pc",
    materialDescription: "Sharp wire cutter for clean cuts.",
    brand: "WireSharp",
    date: "08/2./24",
    datePurchase: "05/29/24",
    materialCode: "P1235",
    availableMaterial: 1e3,
    stockIn: 2e3,
    stockOut: 700,
    purchaseQty: 6830,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "123 456 674",
    uniPrice: "600",
    deliverDate: "06/10/2024",
    etaDate: "07/23/2024",
    arrivalDate: "08/14/2024",
    status: "Arrive"
  },
  {
    id: 30,
    materialName: "Hammer",
    unit: "pc",
    datePurchase: "05/29/24",
    materialCode: "P1236",
    materialDescription: "Heavy-duty sledgehammer for demolition.",
    brand: "HammerForce",
    date: "08/23/24",
    datePurchase: "07/08/24",
    availableMaterial: 1e3,
    stockIn: 2e3,
    stockOut: 500,
    purchaseQty: 2500,
    pendingQty: 500,
    purchaseNumber: "P12345",
    vendor: "Company name",
    vendorPhoneNumber: 63123456781,
    vendorTelephone: "+111 222 333",
    vendorEmail: "dummy@email",
    vendorAddress: "Mariveles Bataan",
    vendorBankAcc: "123 456 675",
    uniPrice: "140",
    deliverDate: "06/15/2024",
    etaDate: "07/05/2024",
    arrivalDate: "08/01/2024",
    status: "Arrive"
  }
]);
export {
  INVENTORY as I
};
