import { writable } from "svelte/store";

import Nails from "../image/productImg/nails.webp"
import hammer from "../image/productImg/Hammer.png";
import Measuringtape from "../image/productImg/Measuring Tape.png";
import Screwdriver from "../image/productImg/Screwdriver.png";
import Woodglue from "../image/productImg/Wood Glue.png";
import Pliers from "../image/productImg/Pliers.png";
import Sandpaper from "../image/productImg/Sandpaper.webp";
import Utilityknife from "../image/productImg/Utility Knife.png";
import Drill from "../image/productImg/Drill Bitss.png";
import PaintBrush from "../image/productImg/Paint Brush.jpg";
import Wrench from "../image/productImg/Wrench Set.webp";
import Level from "../image/productImg/level-removebg-preview (1).png";
import Screw from "../image/productImg/Screws.png";
import Caulkinggun from "../image/productImg/Caulking Gun.webp";
import Tapemesasure from "../image/productImg/Tape Measure.png";
import Saw from "../image/productImg/Saw.png";
import Boltcutter from "../image/productImg/Bolt Cutter.png";
import Chisel from "../image/productImg/Bolt Cutter.png";
import Workbent from "../image/productImg/Workbench-removebg-preview (1).png";
import SafetyGlasses from "../image/productImg/Safety Glasses.png";
import Socketset from "../image/productImg/Socket Set.png";
import Toolbox from "../image/productImg/Tool Box.png";
import WorkGloves from "../image/productImg/Work Gloves.png";
import Drillpro from "../image/productImg/Drill.png";
import Tape from "../image/productImg/Tape.png";
import Ladder from "../image/productImg/Ladder.png";
import Flashlight from "../image/productImg/Flashlight.png";
import Hexkeys from "../image/productImg/Hex Keys.png";
import WireCutter from "../image/productImg/Wire Cutter.png";
import SledgeHammer from "../image/productImg/Sledgehammer.png";
export const PRODUCTS = writable([
  {
    img: Nails,
    productName: "Nails",
    unitOfMeasurement: "kg",
    description: "High-quality steel nails for construction.",
    brand: "NailPro",
  },
  {
    img: hammer,
    productName: "Hammer",
    unitOfMeasurement: "pc",
    description: "Durable claw hammer with a comfortable grip.",
    brand: "HammerKing",
  },
  {
    img: Measuringtape,
    productName: "Measuring Tape",
    unitOfMeasurement: "meter",
    description: "Retractable measuring tape with a lock feature.",
    brand: "MeasureMaster",
  },
  {
    img: Screwdriver,
    productName: "Screwdriver",
    unitOfMeasurement: "pc",
    description: "Multi-bit screwdriver for various screws.",
    brand: "ScrewTight",
  },
  {
    img: Woodglue,
    productName: "Wood Glue",
    unitOfMeasurement: "liters",
    description: "Strong adhesive for woodworking projects.",
    brand: "GluePro",
  },
  {
    img: Pliers,
    productName: "Pliers",
    unitOfMeasurement: "pc",
    description: "Heavy-duty pliers for gripping and cutting.",
    brand: "GripStrong",
  },
  {
    img: Sandpaper,
    productName: "Sandpaper",
    unitOfMeasurement: "pc",
    description: "Assorted grit sandpaper for smoothing surfaces.",
    brand: "SmoothFinish",
  },
  {
    img: Drill,
    productName: "Drill Bits",
    unitOfMeasurement: "pc",
    description: "Set of high-speed steel drill bits.",
    brand: "DrillMaster",
  },
  {
    img: PaintBrush,
    productName: "Paint Brush",
    unitOfMeasurement: "pc",
    description: "High-quality paint brush for smooth application.",
    brand: "BrushPerfect",
  },
  {
    img: Wrench,
    productName: "Wrench Set",
    unitOfMeasurement: "pc",
    description: "Set of adjustable wrenches for various sizes.",
    brand: "TightFit",
  },
  {
    img: Utilityknife,
    productName: "Utility Knife",
    unitOfMeasurement: "pc",
    description: "Sharp utility knife with retractable blade.",
    brand: "KnifeEdge",
  },
  {
    img: Level,
    productName: "Level",
    unitOfMeasurement: "pc",
    description: "Precision level for accurate measurements.",
    brand: "LevelLine",
  },
  {
    img: Screw,
    productName: "Screws",
    unitOfMeasurement: "kg",
    description: "Assorted screws for various applications.",
    brand: "ScrewMaster",
  },
  {
    img: Caulkinggun,
    productName: "Caulking Gun",
    unitOfMeasurement: "pc",
    description: "Heavy-duty caulking gun for sealants.",
    brand: "SealPro",
  },
  {
    img: Tapemesasure,
    productName: "Tape Measure",
    unitOfMeasurement: "meter",
    description: "Durable tape measure with easy-read markings.",
    brand: "MeasureRight",
  },
  {
    img: Saw,
    productName: "Saw",
    unitOfMeasurement: "pc",
    description: "Sharp hand saw for cutting wood.",
    brand: "CutSharp",
  },
  {
    img: Boltcutter,
    productName: "Bolt Cutter",
    unitOfMeasurement: "pc",
    description: "Powerful bolt cutter for tough materials.",
    brand: "BoltBreak",
  },
  {
    img: Chisel,
    productName: "Chisel Set",
    unitOfMeasurement: "pc",
    description: "Set of wood chisels for carving and shaping.",
    brand: "ChiselCraft",
  },
  {
    img: Workbent,
    productName: "Workbench",
    unitOfMeasurement: "pc",
    description: "Sturdy workbench with storage shelves.",
    brand: "BenchPro",
  },
  {
    img: SafetyGlasses,
    productName: "Safety Glasses",
    unitOfMeasurement: "pc",
    description: "Protective eyewear for workshop safety.",
    brand: "SafeVision",
  },
  {
    img: Socketset,
    productName: "Socket Set",
    unitOfMeasurement: "pc",
    description: "Complete set of sockets for various bolts.",
    brand: "SocketMaster",
  },
  {
    img: Toolbox,
    productName: "Tool Box",
    unitOfMeasurement: "pc",
    description: "Portable tool box with multiple compartments.",
    brand: "ToolSafe",
  },
  {
    img: WorkGloves,
    productName: "Work Gloves",
    unitOfMeasurement: "pc",
    description: "Durable gloves for hand protection.",
    brand: "HandGuard",
  },
  {
    img: Drillpro,
    productName: "Drill",
    unitOfMeasurement: "pc",
    description: "Cordless drill with variable speed settings.",
    brand: "DrillPro",
  },
  {
    img: Tape,
    productName: "Tape",
    unitOfMeasurement: "meter",
    description: "Strong adhesive tape for various uses.",
    brand: "TapeStick",
  },
  {
    img: Ladder,
    productName: "Ladder",
    unitOfMeasurement: "pc",
    description: "Foldable ladder for reaching high places.",
    brand: "StepUp",
  },
  {
    img: Flashlight,
    productName: "Flashlight",
    unitOfMeasurement: "pc",
    description: "High-intensity flashlight for dark areas.",
    brand: "BrightBeam",
  },
  {
    img: Hexkeys,
    productName: "Hex Keys",
    unitOfMeasurement: "pc",
    description: "Set of hex keys for hexagonal bolts.",
    brand: "HexMaster",
  },
  {
    img: WireCutter,
    productName: "Wire Cutter",
    unitOfMeasurement: "pc",
    description: "Sharp wire cutter for clean cuts.",
    brand: "WireSharp",
  },
  {
    img: SledgeHammer,
    productName: "Sledgehammer",
    unitOfMeasurement: "pc",
    description: "Heavy-duty sledgehammer for demolition.",
    brand: "HammerForce",
  },
]);
