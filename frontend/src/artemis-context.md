# Artemis+ Context for AI Assistant

## Project Overview
Artemis+ is an interactive lunar habitat planner for 16–32 crew using ISRU, vertical greenhouses, and closed-loop water systems. Built from NASA mission reports and validated models — every technical detail is available for review.

## Mission Scope
- **Crew sizes**: 16, 24, 32 (configurable)
- **Mission durations**: 30 → 180+ days (scenarios)
- **Primary site**: Lunar south pole (polar illumination + ice resources)
- **Key constraints evaluated**: mass budget, power, water, food, radiation shielding

## Core Systems

### 1. Air & Life Support (ECLSS)
- **Purpose**: Keeps people breathing - removes CO₂, controls humidity, keeps cabin pressure and trace contaminants in check
- **Size**: ~10 m³ rack area
- **Mass & Power**: ~180–250 kg; ~600–900 W normally, up to ~1.2 kW during regeneration cycles
- **Key Number**: ~0.9 kg O₂ per person per day → ~3.6 kg/day for 4 people
- **Backups**: Two scrubber channels (A/B), spare blower, emergency O₂ bottles

**Airflow System**:
- 4 greenhouses - 2 in day mode (light), 2 in night mode (dark), then swap
- CO₂ from humans → active greenhouses → plants eat CO₂ → O₂ back to habitat
- Sleeping plants release CO₂ → scrubbers clean air → O₂ from tanks
- Sensors check air, fans send CO₂ to plants/scrubbers, valves control flow

### 2. Water Recovery (WRR)
- **Purpose**: Stops you running out of water - captures urine/greywater/condensate, purifies it, concentrates brine for reuse
- **Footprint & Mass**: ~0.5–1.0 m³ tanks; ~120–180 kg equipment
- **Power**: ~250–500 W
- **Target**: ≥95% water recovery (mission requirement; 98% aspirational goal)
- **Formula**: WRR (%) = recycled_liters / (recycled_liters + loss_liters) × 100

### 3. Food & Plants (Vertical Greenhouse)
- **Purpose**: Grows fresh food, helps balance O₂/CO₂ - one compact aeroponic module for 4 people
- **Mass & Power**: 300–600 kg; ~1.0 kW steady for lights/pumps
- **Goal**: ~2,100 kCal/person/day when combined with stored food

**Key Crops**:
- Wheat (grain): 90–120 days, 25 g/m²/day, 680 kcal/day, NASA-tested
- Corn (dwarf): 90–120 days, 100 g/m²/day, 2,920 kcal/day, partial NASA testing
- Potato (tuber): 90–120 days, 37.5 g/m²/day, 231 kcal/day, NASA-tested
- Soybean: 90–120 days, 20 g/m²/day, 713 kcal/day, NASA-tested
- Microgreens: 7–14 days, 200 g/m²/day, 400 kcal/day, NASA-tested

### 4. Power & Batteries
- **Solar**: Solar constant ≈ 1361 W/m²; ~80–90% illumination for south-pole ridge sites
- **House Load**: ~2.5–3.5 kW continuous; peaks ~5 kW
- **Solar Area**: ~7.5–8 m² effective area for ~3 kW baseline (30% panel efficiency)
- **Battery**: 150–300 kWh depending on margins; 48–72 hours autonomy locally

**Power Breakdown**:
- ECLSS: 600–900 W continuous, up to 1,200 W peak
- Water Recovery: 250–500 W continuous, 500–1,000 W peak
- Greenhouse: 800–1,200 W continuous, 1,500–2,000 W peak
- Comms & Avionics: 50–300 W continuous, 500–1,000 W peak
- Medical/Labs: 50–400 W continuous, 500 W peak
- Exercise: 100–400 W continuous, 400 W peak
- EVA Charging: 500–1,200 W continuous, 1,200 W peak
- Habitat: 200–400 W continuous, 600 W peak

### 5. Hygiene & Waste
- **Purpose**: Toilets, showers, solids drying/compaction, route greywater to WRR
- **Volume & Mass**: ~10 m³; 80–140 kg
- **Power**: 100–300 W

### 6. Medical & Health
- **Purpose**: The "don't die" corner - basic trauma, meds for 180 days, telemedicine kit
- **Volume**: ~10 m³ (fold-out surgical bed + cabinet)

### 7. Exercise & Mental Health
- **Purpose**: People need to move and not go crazy - compact treadmill, resistive unit, VR/mental health station
- **Volume**: ~15 m³
- **Power**: 100–400 W when in use
- **Rule**: ~45 min/day exercise per person equivalent

### 8. EVA & Suits
- **Purpose**: Getting outside without dying - airlock, suits, charging systems
- **Airlock**: Part of corridors; airlock volume included (≈6 m³)
- **Suits**: At least 2 suits + 1 spare for 4 people (depends on EVA ops)
- **Power**: ~0.5–1.2 kW per charge cycle

### 9. Comms & Avionics
- **Purpose**: Stay connected - dual comm paths, relay capability via orbiters
- **Mass**: 30–80 kg
- **Power**: 50–300 W

### 10. Waste-to-Resource / Maker Station
- **Purpose**: Turn trash into parts - recycle plastics to filament, extract salts from brine for binder feedstock
- **Mass/Power**: 150–400 kg; 300–1,200 W depending on throughput

**Recycling Materials**:
- **Plastics**: Sorting → Cleaning → Melting & Extrusion → Filament Formation → 3D printing materials
- **Metals**: Shredding → Melting → Mold casting → Support rods, bolts, screws, structural plates
- **Glass**: Shredding → Melting → Casting → Protective plates, labware, shielding

## Key Parameters
- **Crew size**: 16 / 24 / 32 (configurable)
- **Target WRR**: 95%+ (includes brine recovery)
- **Greenhouse yield**: ~2,100–2,200 kCal/person/day (system target)
- **Panel efficiency**: 30% baseline (include temperature/angle derating)
- **Battery reserve**: 30–50% margin (for eclipse and contingency)
- **Regolith vault strength**: Provided in isru_materials.csv (outcome MPa & SF=1.5)

## Technical Parameters Table
| Parameter | Units | Min Value | Max Value | Typical / Nominal |
|-----------|-------|-----------|-----------|-------------------|
| O₂ Production (habitat) | kg/day | 13.44 | 20.16 | 13.44 |
| Water Recovery Rate (system) | % | 90 | 99 | 97 |
| Battery / Energy Margin | % | 20 | 50 | 33 |
| Food / Crew (per person) | kcal/person/day | 2,800 | 3,200 | 3,000 |
| Crew Size | persons | 16 | 16 | 16 |
| CO₂ Scrub Rate (habitat) | kg/day | 13.44 | 20.16 | 13.44 |
| Greywater Recycling (system) | % | 70 | 98 | 92 |
| Power Consumption (habitat) | kW | 25 | 80 | 40 |
| Habitat Volume | m³/person | 15 | 30 | 25 |
| Water Consumption (net, after recycling) | L/person/day | 2 | 6 | 4 |

## Methods & Assumptions
- **Crew metabolism**: 2,500 kcal/person/day nominal
- **Water/CO₂**: Use NASA/ESA analogs for per-person baseline
- **Volume**: 4 crew • 125 m³ total pressurized volume (≈ 25 m³/person + margin)
- **Location**: Lunar south-pole ridge (good sunlight ~80–90%)

## Validation & Verification
- **Mass-balance verification**: Run closed-loop checks for air, water, and food across 30/90/180 day windows
- **Sensitivity sweeps**: Greenhouse productivity ±20%, WRR ±5%, battery capacity ±30%
- **Failure scenario suite**: Pump failure, greenhouse crop failure, prolonged eclipse, regolith contamination
- **Reproducibility**: Include notebooks and raw CSVs; tests must run end-to-end within provided Jupyter notebooks
- **Ground-truthing**: Cite NASA HERA analogs, LunaH-Map polar ice data, and lab test reports

## Top Failure Modes & Quick Fixes
1. **Power Loss**: Go to safe mode — shut greenhouse & exercise, run emergency life support on battery + stored O₂
2. **WRR Fail**: Switch to potable reserve, ration, hot-flush membranes
3. **CO₂ Scrubber Fail**: Switch to backup scrubber, increase plant O₂ duty, reduce strenuous activity
4. **Crop Collapse**: Use emergency rations, re-seed quarantine racks
5. **Suit/Airlock Fail**: Cancel EVAs, repair or swap suits, inspect seals
6. **Comms Outage**: Buffer telemetry and try relays; keep mission logs

## Spares & Maintenance (180-day stock)
- Spare blower ×1 (ECLSS)
- Pump cartridges ×2 (WRR)
- 1× membrane replacement set (WRR)
- Air/water filter sets (6 months)
- Nutrient concentrate (6 months)
- Medical kit + meds (180 days)
- Tool kit + 3D-printer spare reels & binder feedstock

## Mission Benefits
- Reduces payload dependence on Earth
- Enables circular resource use onboard lunar or Mars habitats
- Provides critical components: tools, structural elements, protective shields, spare parts, and backup fuels
- Supports life support, energy generation, and food production systems

## Technical Foundation
All calculations and models are based on NASA mission reports, validated through ground testing, and designed for reproducibility. The system includes comprehensive failure mode analysis, sensitivity testing, and validation procedures to ensure mission-critical reliability.

## Website Structure
The website includes the following pages:
- **Home**: Hero section with mission overview and core system pillars
- **About**: Comprehensive project description and technical foundation
- **Mission**: Detailed mission scope, crew sizes, durations, and KPIs
- **Systems**: Interactive detailed breakdown of all 10 core systems with collapsible sections
- **Methods**: Technical parameters, validation procedures, and assumptions
- **Design**: Visual design elements and habitat concepts
- **Simulator**: Interactive habitat planning and validation environment
