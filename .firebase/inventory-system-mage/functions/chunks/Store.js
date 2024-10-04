import { w as writable } from "./index.js";
const Nails = "/_app/immutable/assets/nails.CTR_AH5Q.webp";
const hammer = "/_app/immutable/assets/Hammer.DQ1Hr4DS.png";
const Measuringtape = "/_app/immutable/assets/Measuring%20Tape.Dnp8zTm4.png";
const Screwdriver = "/_app/immutable/assets/Screwdriver.BK6VOQTL.png";
const Woodglue = "/_app/immutable/assets/Wood%20Glue.a0oMPdlK.png";
const Pliers = "/_app/immutable/assets/Pliers.DyOM87iH.png";
const Sandpaper = "/_app/immutable/assets/Sandpaper.Dlx_FK8O.webp";
const Utilityknife = "/_app/immutable/assets/Utility%20Knife.BSyo7TqK.png";
const Drill = "/_app/immutable/assets/Drill%20Bitss.CCDrfIZ0.png";
const PaintBrush = "/_app/immutable/assets/Paint%20Brush.B8_v-QEB.png";
const Wrench = "/_app/immutable/assets/Wrench%20Set.DCal60bd.webp";
const Level = "/_app/immutable/assets/level-removebg-preview%20(1).DLlvmmZD.png";
const Screw = "/_app/immutable/assets/Screws.BTTciYY7.png";
const Caulkinggun = "/_app/immutable/assets/Caulking%20Gun.BEnoVEfP.webp";
const Tapemesasure = "/_app/immutable/assets/Tape%20Measure.RadAz41T.png";
const Saw = "/_app/immutable/assets/Saw.NWsP32O4.png";
const Chisel = "/_app/immutable/assets/Bolt%20Cutter.B40V0Nuk.png";
const Workbent = "/_app/immutable/assets/Workbench-removebg-preview%20(1).CN3uRbWC.png";
const SafetyGlasses = "/_app/immutable/assets/Safety%20Glasses.bMEO4YP-.png";
const Socketset = "/_app/immutable/assets/Socket%20Set.BzU6Tb2o.png";
const Toolbox = "/_app/immutable/assets/Tool%20Box.Jir9qPDe.png";
const WorkGloves = "/_app/immutable/assets/Work%20Gloves.Byc2umHg.png";
const Drillpro = "/_app/immutable/assets/Drill.C2OryNmL.png";
const Tape = "/_app/immutable/assets/Tape.DSYJ43Z6.png";
const Ladder = "/_app/immutable/assets/Ladder.mYGzcK7R.png";
const Flashlight = "/_app/immutable/assets/Flashlight.DMgapWMO.png";
const Hexkeys = "/_app/immutable/assets/Hex%20Keys.DjI43yQM.png";
const WireCutter = "/_app/immutable/assets/Wire%20Cutter.DfmEcCWm.png";
const SledgeHammer = "/_app/immutable/assets/Sledgehammer.DpZbkSRQ.png";
const PRODUCTS = writable([
  {
    img: Nails,
    productName: "Nails",
    unitOfMeasurement: "kg",
    description: "High-quality steel nails for construction.",
    brand: "NailPro"
  },
  {
    img: hammer,
    productName: "Hammer",
    unitOfMeasurement: "pc",
    description: "Durable Sledgehamme hammer with a comfortable grip.",
    brand: "HammerKing"
  },
  {
    img: Measuringtape,
    productName: "Measuring Tape",
    unitOfMeasurement: "meter",
    description: "Retractable measuring tape with a lock feature.",
    brand: "MeasureMaster"
  },
  {
    img: Screwdriver,
    productName: "Screwdriver",
    unitOfMeasurement: "pc",
    description: "Multi-bit screwdriver for various screws.",
    brand: "ScrewTight"
  },
  {
    img: Woodglue,
    productName: "Wood Glue",
    unitOfMeasurement: "liters",
    description: "Strong adhesive for woodworking projects.",
    brand: "GluePro"
  },
  {
    img: Pliers,
    productName: "Pliers",
    unitOfMeasurement: "pc",
    description: "Heavy-duty pliers for gripping and cutting.",
    brand: "GripStrong"
  },
  {
    img: Sandpaper,
    productName: "Sandpaper",
    unitOfMeasurement: "pc",
    description: "Assorted grit sandpaper for smoothing surfaces.",
    brand: "SmoothFinish"
  },
  {
    img: Drill,
    productName: "Drill Bits",
    unitOfMeasurement: "pc",
    description: "Set of high-speed steel drill bits.",
    brand: "DrillMaster"
  },
  {
    img: PaintBrush,
    productName: "Paint Brush",
    unitOfMeasurement: "pc",
    description: "High-quality paint brush for smooth application.",
    brand: "BrushPerfect"
  },
  {
    img: Wrench,
    productName: "Wrench Set",
    unitOfMeasurement: "pc",
    description: "Set of adjustable wrenches for various sizes.",
    brand: "TightFit"
  },
  {
    img: Utilityknife,
    productName: "Utility Knife",
    unitOfMeasurement: "pc",
    description: "Sharp utility knife with retractable blade.",
    brand: "KnifeEdge"
  },
  {
    img: Level,
    productName: "Level",
    unitOfMeasurement: "pc",
    description: "Precision level for accurate measurements.",
    brand: "LevelLine"
  },
  {
    img: Screw,
    productName: "Screws",
    unitOfMeasurement: "kg",
    description: "Assorted screws for various applications.",
    brand: "ScrewMaster"
  },
  {
    img: Caulkinggun,
    productName: "Caulking Gun",
    unitOfMeasurement: "pc",
    description: "Heavy-duty caulking gun for sealants.",
    brand: "SealPro"
  },
  {
    img: Tapemesasure,
    productName: "Tape Measure",
    unitOfMeasurement: "meter",
    description: "Durable tape measure with easy-read markings.",
    brand: "MeasureRight"
  },
  {
    img: Saw,
    productName: "Saw",
    unitOfMeasurement: "pc",
    description: "Sharp hand saw for cutting wood.",
    brand: "CutSharp"
  },
  {
    img: Chisel,
    productName: "Bolt Cutter",
    unitOfMeasurement: "pc",
    description: "Powerful bolt cutter for tough materials.",
    brand: "BoltBreak"
  },
  {
    img: Chisel,
    productName: "Chisel Set",
    unitOfMeasurement: "pc",
    description: "Set of wood chisels for carving and shaping.",
    brand: "ChiselCraft"
  },
  {
    img: Workbent,
    productName: "Workbench",
    unitOfMeasurement: "pc",
    description: "Sturdy workbench with storage shelves.",
    brand: "BenchPro"
  },
  {
    img: SafetyGlasses,
    productName: "Safety Glasses",
    unitOfMeasurement: "pc",
    description: "Protective eyewear for workshop safety.",
    brand: "SafeVision"
  },
  {
    img: Socketset,
    productName: "Socket Set",
    unitOfMeasurement: "pc",
    description: "Complete set of sockets for various bolts.",
    brand: "SocketMaster"
  },
  {
    img: Toolbox,
    productName: "Tool Box",
    unitOfMeasurement: "pc",
    description: "Portable tool box with multiple compartments.",
    brand: "ToolSafe"
  },
  {
    img: WorkGloves,
    productName: "Work Gloves",
    unitOfMeasurement: "pc",
    description: "Durable gloves for hand protection.",
    brand: "HandGuard"
  },
  {
    img: Drillpro,
    productName: "Drill",
    unitOfMeasurement: "pc",
    description: "Cordless drill with variable speed settings.",
    brand: "DrillPro"
  },
  {
    img: Tape,
    productName: "Tape",
    unitOfMeasurement: "meter",
    description: "Strong adhesive tape for various uses.",
    brand: "TapeStick"
  },
  {
    img: Ladder,
    productName: "Ladder",
    unitOfMeasurement: "pc",
    description: "Foldable ladder for reaching high places.",
    brand: "StepUp"
  },
  {
    img: Flashlight,
    productName: "Flashlight",
    unitOfMeasurement: "pc",
    description: "High-intensity flashlight for dark areas.",
    brand: "BrightBeam"
  },
  {
    img: Hexkeys,
    productName: "Hex Keys",
    unitOfMeasurement: "pc",
    description: "Set of hex keys for hexagonal bolts.",
    brand: "HexMaster"
  },
  {
    img: WireCutter,
    productName: "Wire Cutter",
    unitOfMeasurement: "pc",
    description: "Sharp wire cutter for clean cuts.",
    brand: "WireSharp"
  },
  {
    img: SledgeHammer,
    productName: "Sledgehammer",
    unitOfMeasurement: "pc",
    description: "Heavy-duty sledgehammer for demolition.",
    brand: "HammerForce"
  }
]);
export {
  PRODUCTS as P
};
