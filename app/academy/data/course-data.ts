export type Quiz = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type Section = {
  title: string;
  content: string;
};

export type Module = {
  id: string;
  number: number;
  title: string;
  description: string;
  duration: string;
  sections: Section[];
  quiz: Quiz[];
};

export type Course = {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  modules: Module[];
};

export const militaryDroneOpsCourse: Course = {
  id: "military-drone-ops",
  title: "Military Drone Operations Fundamentals",
  description:
    "A comprehensive foundation course covering EU drone regulations, systems technology, mission planning, flight operations, ISR tactics, and counter-UAS. Designed for defence professionals entering the military drone domain.",
  duration: "~12 hours",
  level: "Foundation",
  modules: [
    // ── MODULE 1 ──────────────────────────────────────────────
    {
      id: "eu-regulations",
      number: 1,
      title: "EU Drone Regulations & Military Exemptions",
      description:
        "Navigate the EASA regulatory framework including A1/A3/A2 categories, understand military-specific exemptions across EU member states, and apply SORA methodology for operational risk assessment.",
      duration: "~2 hours",
      sections: [
        {
          title: "EASA Regulatory Framework Overview",
          content: `
<h3>The European Aviation Safety Agency (EASA) Framework</h3>
<p>The European Union Aviation Safety Agency (EASA) established a harmonised regulatory framework for unmanned aircraft systems (UAS) through two key regulations adopted in 2019:</p>
<ul>
  <li><strong>Regulation (EU) 2019/947</strong> — Rules and procedures for the operation of unmanned aircraft. This regulation defines the three operational categories (Open, Specific, Certified) and sets requirements for remote pilots, operators, and operations.</li>
  <li><strong>Regulation (EU) 2019/945</strong> — Requirements for unmanned aircraft design and manufacture. This regulation defines UAS classes (C0 through C6) and their technical requirements including maximum take-off mass, speed limits, and safety features.</li>
</ul>
<p>These regulations replaced the patchwork of national rules that previously governed drone operations across EU member states, creating a single regulatory framework applicable from 31 December 2020.</p>
<h3>Key Regulatory Principles</h3>
<p>The EASA framework is built on several foundational principles:</p>
<ul>
  <li><strong>Risk-based approach:</strong> Operations are categorised by the risk they pose to third parties on the ground and other airspace users, not merely by the weight or type of the drone.</li>
  <li><strong>Proportionality:</strong> Regulatory requirements scale with the level of risk. Low-risk operations face minimal bureaucracy, while high-risk operations require certification comparable to manned aviation.</li>
  <li><strong>Performance-based:</strong> Where possible, regulations specify desired outcomes rather than prescriptive technical solutions, allowing innovation and flexibility.</li>
  <li><strong>Geo-awareness:</strong> UAS in certain classes must have geo-awareness systems that can alert the remote pilot when approaching restricted airspace zones.</li>
</ul>`,
        },
        {
          title: "Open Category Operations (A1, A2, A3)",
          content: `
<h3>The Open Category</h3>
<p>The Open category covers low-risk UAS operations that do not require prior operational authorisation or declaration. Operations in this category must meet all of the following conditions:</p>
<ul>
  <li>The unmanned aircraft has a maximum take-off mass (MTOM) of less than 25 kg</li>
  <li>The remote pilot maintains visual line of sight (VLOS) at all times</li>
  <li>The maximum height is 120 metres above ground level (AGL)</li>
  <li>The UAS does not carry dangerous goods or drop materials</li>
</ul>

<h3>Subcategory A1 — Fly Over People</h3>
<p>A1 permits flight over uninvolved persons (but not over assemblies of people) with the following restrictions:</p>
<ul>
  <li><strong>C0 class UAS</strong> (under 250g): Minimal requirements. The remote pilot must be familiar with the user manual. No age restriction beyond national law.</li>
  <li><strong>C1 class UAS</strong> (under 900g): Remote pilot must complete online training and pass an online theoretical knowledge examination administered by the National Aviation Authority (NAA). Minimum age 16 (or as set by member state).</li>
</ul>

<h3>Subcategory A2 — Fly Close to People</h3>
<p>A2 permits flights close to uninvolved persons with additional safeguards:</p>
<ul>
  <li>Only <strong>C2 class UAS</strong> (under 4 kg) may be operated</li>
  <li>Minimum horizontal distance of 30 metres from uninvolved persons (reducible to 5 metres in low-speed mode with 1:1 rule)</li>
  <li>Remote pilot must hold an A2 certificate of remote pilot competency, which requires completing the A1/A3 online examination, self-practical training, and an additional theoretical examination at a proctored test centre</li>
</ul>

<h3>Subcategory A3 — Fly Far from People</h3>
<p>A3 covers operations in areas where no uninvolved persons are expected:</p>
<ul>
  <li><strong>C2, C3, or C4 class UAS</strong> (up to 25 kg) may be operated</li>
  <li>The operation must take place in an area where the remote pilot reasonably expects that no uninvolved person will be endangered</li>
  <li>Minimum safe horizontal distance from residential, commercial, industrial, or recreational areas</li>
  <li>Same online examination requirement as A1</li>
</ul>`,
        },
        {
          title: "Specific Category & SORA Methodology",
          content: `
<h3>The Specific Category</h3>
<p>The Specific category covers medium-risk operations that exceed the limits of the Open category but do not require the full certification regime. Entry into this category requires either:</p>
<ul>
  <li>An <strong>operational authorisation</strong> from the National Aviation Authority (NAA), based on a risk assessment</li>
  <li>Operating under a <strong>Standard Scenario (STS)</strong> after making a declaration to the NAA</li>
  <li>Holding a <strong>Light UAS Operator Certificate (LUC)</strong> that grants privileges to self-authorise operations</li>
</ul>

<h3>SORA: Specific Operations Risk Assessment</h3>
<p>The SORA methodology, developed by JARUS (Joint Authorities for Rulemaking on Unmanned Systems), is the primary risk assessment framework for Specific category operations. SORA follows a structured 10-step process:</p>
<ul>
  <li><strong>Step 1:</strong> ConOps (Concept of Operations) description — Define the operational intent, aircraft characteristics, and operating environment</li>
  <li><strong>Step 2:</strong> Determine the intrinsic Ground Risk Class (GRC) — Based on UAS dimensions and operational scenario</li>
  <li><strong>Step 3:</strong> Apply mitigations to reduce the final GRC — Strategic mitigations such as population density reduction, ground risk buffer areas</li>
  <li><strong>Step 4:</strong> Determine the initial Air Risk Class (ARC) — Based on the airspace encounter rate</li>
  <li><strong>Step 5:</strong> Apply strategic mitigations to reduce the ARC — Operational restrictions, airspace management measures</li>
  <li><strong>Step 6:</strong> Determine the Tactical Mitigation Performance Requirement (TMPR)</li>
  <li><strong>Step 7:</strong> Determine the SAIL (Specific Assurance and Integrity Level) — Ranges from SAIL I (lowest) to SAIL VI (highest)</li>
  <li><strong>Step 8:</strong> Identify Operational Safety Objectives (OSOs)</li>
  <li><strong>Step 9:</strong> Evaluate adjacent areas and airspace considerations</li>
  <li><strong>Step 10:</strong> Comprehensive safety portfolio compilation</li>
</ul>

<h3>Standard Scenarios (STS)</h3>
<p>For common operational profiles, EASA has published Standard Scenarios that provide pre-assessed risk frameworks:</p>
<ul>
  <li><strong>STS-01:</strong> VLOS operations over controlled ground area in populated environment (urban flights with ground risk mitigation)</li>
  <li><strong>STS-02:</strong> BVLOS operations over sparsely populated areas with airspace observers</li>
</ul>
<p>Operators using an STS need only make a declaration to the NAA rather than applying for individual authorisation, significantly reducing administrative burden.</p>`,
        },
        {
          title: "Military Exemptions Under EU 2019/947",
          content: `
<h3>Article 2 — Scope and Exemptions</h3>
<p>EU Regulation 2019/947, Article 2(3)(a), explicitly states that the regulation <strong>does not apply to UAS operations carried out within the framework of the armed forces of a Member State</strong>. This is a fundamental exemption that gives military organisations sovereign authority over their drone operations.</p>
<p>However, this exemption comes with important nuances:</p>
<ul>
  <li><strong>Territorial application:</strong> The exemption applies to operations conducted by or on behalf of a member state's armed forces. Allied forces operating in another EU member state may need bilateral agreements or status-of-forces agreements (SOFAs) to benefit from equivalent exemptions.</li>
  <li><strong>Dual-use operations:</strong> When military UAS are used for civilian tasks (disaster relief, border surveillance supporting civilian agencies), the regulatory status may be ambiguous. Some member states require military operators to comply with civilian regulations during non-military missions.</li>
  <li><strong>Shared airspace:</strong> Even though military UAS are exempt from EASA regulations, they must still comply with airspace rules and coordinate with civil aviation authorities to ensure safe integration, particularly in non-segregated airspace.</li>
  <li><strong>Training flights:</strong> Military training operations in civilian airspace typically require coordination with the national civil aviation authority, even if the UAS itself is exempt from certification requirements.</li>
</ul>

<h3>National Military Aviation Authorities</h3>
<p>Each EU member state has a Military Aviation Authority (MAA) responsible for regulating military air operations, including UAS:</p>
<ul>
  <li><strong>Netherlands:</strong> Militaire Luchtvaart Autoriteit (MLA) under the Ministry of Defence regulates all RNLAF drone operations. The Netherlands has been at the forefront of integrating military UAS into civilian airspace through temporary reserved areas (TRAs) and real-time coordination procedures.</li>
  <li><strong>Germany:</strong> Luftfahrtamt der Bundeswehr (LufABw) oversees military aviation safety. German military drone operations frequently use temporary danger areas (EDR zones) for segregated operations.</li>
  <li><strong>France:</strong> Direction de la Securite Aeronautique d'Etat (DSAE) covers military aviation. France has one of Europe's most mature military UAS programmes, including MALE platforms like the MQ-9 Reaper.</li>
</ul>`,
        },
        {
          title: "National Variations: Netherlands, Nordics, Baltics",
          content: `
<h3>The Netherlands</h3>
<p>The Netherlands has implemented the EASA framework through the Inspectie Leefomgeving en Transport (ILT) and has several notable national specificities:</p>
<ul>
  <li><strong>U-space implementation:</strong> The Netherlands is a pioneer in U-space (unmanned traffic management) through partnerships with organisations like the Royal Netherlands Aerospace Centre (NLR). U-space services include network identification, geo-awareness, and flight authorisation.</li>
  <li><strong>Military integration:</strong> The RNLAF has established dedicated UAS training centres and regularly conducts operations at Woensdrecht Air Base and in designated military training areas. The Scan Eagle and MQ-9 Reaper programmes have driven extensive experience in operational procedures.</li>
  <li><strong>Geo-zones:</strong> The Dutch government publishes UAS geographical zones through the dronekaart.nl platform, including restrictions around airports (CTRs), military areas, and sensitive installations.</li>
</ul>

<h3>Nordic Countries</h3>
<p>The Nordic nations have embraced UAS technology with progressive regulatory approaches:</p>
<ul>
  <li><strong>Finland:</strong> Traficom (Finnish Transport and Communications Agency) manages UAS regulation. Finland has been particularly progressive with BVLOS operations in sparsely populated areas and has leveraged its vast uninhabited territories for military UAS training.</li>
  <li><strong>Sweden:</strong> The Swedish Transport Agency (Transportstyrelsen) oversees civilian UAS, while the Swedish Armed Forces maintain extensive UAS capabilities. Sweden's emphasis on Total Defence means military UAS exercises frequently involve civilian infrastructure coordination.</li>
  <li><strong>Norway:</strong> As an EEA (not EU) member, Norway follows EASA regulations through the EEA Agreement. The Norwegian Defence Research Establishment (FFI) has been instrumental in developing Arctic drone capabilities and cold-weather operational procedures.</li>
  <li><strong>Denmark:</strong> The Danish Transport, Construction, and Housing Authority manages civilian UAS. Denmark has invested in UAS for maritime surveillance in Arctic regions (Greenland, Faroe Islands) through the Joint Arctic Command.</li>
</ul>

<h3>Baltic States</h3>
<p>The Baltic nations have rapidly developed UAS capabilities driven by their security environment:</p>
<ul>
  <li><strong>Estonia:</strong> Estonia has embraced military UAS as a cost-effective force multiplier. The Estonian Defence Forces have integrated commercial drones extensively and participate in NATO UAS interoperability exercises. The Estonian Civil Aviation Authority (ECAA) manages the civilian framework.</li>
  <li><strong>Latvia:</strong> The Latvian National Armed Forces have expanded UAS capabilities, particularly for ISR along the eastern border. Latvia participates in the Baltic Air Surveillance Network (BALTNET) which is increasingly incorporating UAS data feeds.</li>
  <li><strong>Lithuania:</strong> Lithuania has been a leader in battlefield UAS adoption, influenced by observations of the conflict in Ukraine. The Lithuanian Armed Forces have established dedicated UAS units and invested in counter-UAS training for all infantry formations.</li>
</ul>`,
        },
      ],
      quiz: [
        {
          question:
            "What is the maximum take-off mass (MTOM) for UAS in the Open category?",
          options: ["10 kg", "25 kg", "50 kg", "150 kg"],
          correctIndex: 1,
          explanation:
            "The Open category covers UAS with a maximum take-off mass of less than 25 kg. Operations above this weight class typically fall into the Specific or Certified categories.",
        },
        {
          question:
            "Which EU regulation provides the military exemption for UAS operations?",
          options: [
            "Regulation (EU) 2019/945, Article 5",
            "Regulation (EU) 2019/947, Article 2(3)(a)",
            "Regulation (EU) 2018/1139, Article 12",
            "Regulation (EU) 2019/947, Article 16",
          ],
          correctIndex: 1,
          explanation:
            "EU Regulation 2019/947, Article 2(3)(a) explicitly exempts UAS operations carried out within the framework of the armed forces of a Member State from the regulation's requirements.",
        },
        {
          question:
            "What does SORA stand for in the context of EU drone regulation?",
          options: [
            "Standard Operations Risk Analysis",
            "Specific Operations Risk Assessment",
            "Systematic Operational Review and Audit",
            "Safety of Remote Aviation",
          ],
          correctIndex: 1,
          explanation:
            "SORA stands for Specific Operations Risk Assessment. It is the primary risk assessment methodology developed by JARUS for evaluating drone operations in the Specific category.",
        },
        {
          question:
            "In the Open category, what is the maximum permitted flight height above ground level?",
          options: [
            "50 metres AGL",
            "90 metres AGL",
            "120 metres AGL",
            "150 metres AGL",
          ],
          correctIndex: 2,
          explanation:
            "The maximum flight height in the Open category is 120 metres (approximately 400 feet) above ground level. This limit aligns with the boundary below which manned aircraft typically do not operate under normal circumstances.",
        },
        {
          question:
            "Which subcategory requires an additional proctored examination beyond the standard online test?",
          options: [
            "A1 with C0 class UAS",
            "A1 with C1 class UAS",
            "A2 with C2 class UAS",
            "A3 with C4 class UAS",
          ],
          correctIndex: 2,
          explanation:
            "The A2 subcategory requires the remote pilot to hold a certificate of competency, which involves completing the A1/A3 online examination, self-practical training, and an additional theoretical knowledge examination at a proctored test centre.",
        },
      ],
    },

    // ── MODULE 2 ──────────────────────────────────────────────
    {
      id: "drone-systems",
      number: 2,
      title: "Drone Systems & Technology",
      description:
        "Compare fixed-wing, multirotor, and VTOL platforms. Understand payloads, sensor suites, communication links, data protocols, and electronic warfare considerations for military drone systems.",
      duration: "~2 hours",
      sections: [
        {
          title: "Platform Classification: Fixed-Wing, Multirotor, VTOL, Hybrid",
          content: `
<h3>Fixed-Wing UAS</h3>
<p>Fixed-wing drones generate lift through aerodynamic surfaces (wings) and are propelled forward by motors or engines. They are the dominant configuration for military applications requiring long endurance and range.</p>
<ul>
  <li><strong>Advantages:</strong> Superior endurance (often 10-24+ hours for MALE platforms), higher cruise speeds (80-200+ knots), greater range, more efficient energy use per kilometre, and ability to carry heavier payloads relative to size.</li>
  <li><strong>Limitations:</strong> Require a runway, catapult launcher, or rocket-assisted take-off (RATO). Cannot hover. Recovery typically requires a runway, net recovery system, or parachute/deep-stall landing.</li>
  <li><strong>Examples:</strong> MQ-9 Reaper (MALE class, 27h endurance), RQ-20 Puma (hand-launched ISR), Scan Eagle (catapult launch, Skyhook recovery), IAI Heron TP (heavy MALE).</li>
</ul>

<h3>Multirotor UAS</h3>
<p>Multirotor configurations (quadcopter, hexacopter, octocopter) use multiple vertically-oriented rotors for lift and control. They are the most common configuration for tactical and close-range military applications.</p>
<ul>
  <li><strong>Advantages:</strong> Vertical take-off and landing (no runway needed), hovering capability, precise position hold, high manoeuvrability at low speeds, relatively simple maintenance, lower cost for tactical platforms.</li>
  <li><strong>Limitations:</strong> Limited endurance (typically 20-45 minutes for battery-powered systems), lower speed, reduced range, less energy-efficient in forward flight, higher acoustic signature at close range.</li>
  <li><strong>Examples:</strong> DJI Matrice 300 (ISR/inspection), FLIR Black Hornet (nano PRS), Skydio X2 (autonomous ISR), AeroVironment JUMP 20 (hybrid tilt-rotor).</li>
</ul>

<h3>VTOL (Vertical Take-Off and Landing) Hybrids</h3>
<p>VTOL hybrid UAS combine vertical take-off/landing capability with fixed-wing efficiency in cruise flight. They represent the fastest-growing segment of military UAS technology.</p>
<ul>
  <li><strong>Tilt-rotor:</strong> Rotors pivot from vertical (hover) to horizontal (cruise) orientation. Example: Textron Aerosonde HQ, V-BAT.</li>
  <li><strong>Tilt-wing:</strong> The entire wing assembly rotates. Less common but offers clean aerodynamics in cruise. Example: Quantum Systems Trinity F90+.</li>
  <li><strong>Lift + cruise:</strong> Separate vertical lift motors and forward-flight propulsion. Vertical rotors fold or stop in cruise. Example: Wingcopter 198, Autel Dragonfish.</li>
  <li><strong>Tail-sitter:</strong> The entire aircraft points nose-up for VTOL, then transitions to horizontal flight. Example: Shield AI V-BAT.</li>
</ul>

<h3>Considerations for Military Selection</h3>
<p>Platform selection depends on the mission profile. Key trade-offs include endurance vs. hover capability, logistics footprint, acoustic signature, and the ability to operate from unprepared surfaces. Modern military procurement increasingly favours VTOL hybrids for their operational flexibility.</p>`,
        },
        {
          title: "Key Components: Flight Controller, ESC, GPS, IMU",
          content: `
<h3>Flight Controller (FC)</h3>
<p>The flight controller is the central processing unit of a UAS. It receives sensor data, processes pilot commands, runs stabilisation algorithms, and outputs motor commands to maintain controlled flight.</p>
<ul>
  <li><strong>Autopilot systems:</strong> Military-grade autopilots (e.g., Piccolo, Kestrel, Veronte) provide waypoint navigation, autonomous flight modes, geo-fencing, and failsafe behaviours. Open-source autopilots like PX4 and ArduPilot are used in some tactical platforms.</li>
  <li><strong>Redundancy:</strong> Military flight controllers typically feature dual or triple redundancy in processing, with automatic failover. This ensures continued operation if a processor fails.</li>
  <li><strong>Processing:</strong> Modern FCs use ARM-based processors or FPGAs for real-time control loops running at 400Hz or higher. Some integrate AI accelerators for autonomous operations.</li>
</ul>

<h3>Electronic Speed Controllers (ESC)</h3>
<p>ESCs translate flight controller commands into motor speed adjustments. For electric motors, they convert DC battery power into three-phase AC to drive brushless motors.</p>
<ul>
  <li><strong>Response time:</strong> Military-grade ESCs require response times under 10ms for precise attitude control</li>
  <li><strong>Protocols:</strong> DShot, OneShot, and PWM are common communication protocols between FC and ESC</li>
  <li><strong>Thermal management:</strong> High-current ESCs in larger platforms require active cooling systems</li>
</ul>

<h3>GPS / GNSS Modules</h3>
<p>Global Navigation Satellite System (GNSS) receivers provide position, velocity, and timing data critical for navigation and waypoint following.</p>
<ul>
  <li><strong>Multi-constellation:</strong> Military receivers typically use GPS, GLONASS, Galileo, and BeiDou simultaneously for improved accuracy and resilience</li>
  <li><strong>RTK and PPK:</strong> Real-Time Kinematic and Post-Processed Kinematic techniques provide centimetre-level accuracy for survey and precision operations</li>
  <li><strong>Anti-jamming:</strong> Military GNSS receivers use controlled reception pattern antennas (CRPA) to null jamming signals, and may have access to encrypted military GPS signals (M-code)</li>
  <li><strong>GPS-denied navigation:</strong> Modern military UAS increasingly incorporate visual-inertial odometry, terrain-referenced navigation, and celestial navigation as backups when GNSS is denied</li>
</ul>

<h3>Inertial Measurement Unit (IMU)</h3>
<p>The IMU provides acceleration and angular rate measurements in three axes, enabling the flight controller to determine the aircraft's attitude and movement independent of external signals.</p>
<ul>
  <li><strong>MEMS sensors:</strong> Most tactical UAS use Micro-Electro-Mechanical Systems (MEMS) gyroscopes and accelerometers, balancing cost, size, and performance</li>
  <li><strong>Sensor fusion:</strong> The Extended Kalman Filter (EKF) fuses IMU data with GPS, barometer, magnetometer, and optical flow to produce accurate state estimation</li>
  <li><strong>Vibration isolation:</strong> IMU performance is highly sensitive to vibration. Military installations use dampened mounting systems and redundant IMU modules</li>
</ul>`,
        },
        {
          title: "Payloads: EO/IR, LIDAR, SIGINT, SAR",
          content: `
<h3>Electro-Optical / Infrared (EO/IR) Cameras</h3>
<p>EO/IR sensor balls are the most common UAS payload, providing day/night imaging capability for ISR, target acquisition, and battle damage assessment.</p>
<ul>
  <li><strong>Electro-Optical (EO):</strong> High-resolution visible-spectrum cameras, often with 30x+ optical zoom. Modern systems offer 4K or higher resolution with image stabilisation. Used for visual identification and assessment during daylight.</li>
  <li><strong>Infrared (IR):</strong> Thermal imaging sensors detect heat signatures, enabling operations in darkness, smoke, and light fog. Cooled MWIR (Mid-Wave IR) sensors offer higher sensitivity than uncooled LWIR (Long-Wave IR) but at greater cost and complexity.</li>
  <li><strong>Laser designator/rangefinder:</strong> Many military gimbals integrate laser systems for target designation (enabling guided munitions) and range finding (for accurate target coordinates).</li>
  <li><strong>Stabilisation:</strong> Military-grade gimbals provide multi-axis gyro-stabilised platforms that maintain pointing accuracy within milliradians despite aircraft vibration and movement.</li>
  <li><strong>Examples:</strong> L3Harris WESCAM MX-15 (medium altitude), FLIR Star SAFIRE 380-HDc, Elbit DCOMPASS, Rafael Reccelite.</li>
</ul>

<h3>LIDAR (Light Detection and Ranging)</h3>
<p>LIDAR uses pulsed laser light to create precise three-dimensional point clouds of terrain and structures.</p>
<ul>
  <li><strong>Military applications:</strong> Route clearance (detecting IEDs and obstacles), terrain mapping for landing zone assessment, infrastructure survey, and foliage penetration (limited).</li>
  <li><strong>Accuracy:</strong> Airborne LIDAR achieves 2-5 cm vertical accuracy from altitudes of 100-500m AGL</li>
  <li><strong>Point density:</strong> Modern systems capture 500,000+ points per second, creating highly detailed 3D models</li>
</ul>

<h3>SIGINT (Signals Intelligence)</h3>
<p>SIGINT payloads intercept and analyse electromagnetic emissions for intelligence gathering.</p>
<ul>
  <li><strong>COMINT:</strong> Communications Intelligence — intercepting radio communications, mobile phone signals, and data transmissions</li>
  <li><strong>ELINT:</strong> Electronic Intelligence — detecting and characterising radar and electronic systems</li>
  <li><strong>Direction finding:</strong> UAS-mounted SIGINT payloads can geolocate emitters through triangulation (using multiple platforms or multiple passes)</li>
  <li><strong>Challenges:</strong> SIGINT payloads are typically classified, require specialised operators, and raise significant legal considerations regarding privacy and lawful interception</li>
</ul>

<h3>SAR (Synthetic Aperture Radar)</h3>
<p>SAR uses the movement of the aircraft to synthesise a large antenna aperture, producing high-resolution radar imagery regardless of weather or lighting conditions.</p>
<ul>
  <li><strong>All-weather capability:</strong> Unlike optical sensors, SAR penetrates clouds, rain, and fog, and operates in complete darkness</li>
  <li><strong>GMTI:</strong> Ground Moving Target Indication mode detects and tracks vehicles and personnel movement</li>
  <li><strong>Resolution:</strong> Modern miniaturised SAR systems achieve sub-metre resolution from UAS platforms</li>
  <li><strong>Applications:</strong> Wide-area surveillance, change detection (comparing images over time to detect disturbed earth, new structures, or vehicle movement), maritime surveillance</li>
</ul>`,
        },
        {
          title: "Communication: C2 Links, Datalinks, SATCOM, Mesh Networks",
          content: `
<h3>Command and Control (C2) Links</h3>
<p>The C2 link is the communication channel between the ground control station (GCS) and the UAS, used to send flight commands and receive telemetry data.</p>
<ul>
  <li><strong>Line-of-sight (LOS):</strong> Direct radio link between GCS and UAS, typically using frequencies in the C-band (4-8 GHz) or S-band (2-4 GHz). Range limited to the radio horizon, typically 100-200 km depending on altitude and power. Low latency (milliseconds).</li>
  <li><strong>Beyond line-of-sight (BLOS):</strong> Uses satellite communication (SATCOM) to relay commands and telemetry. Enables global operations but introduces higher latency (250-600ms for GEO satellites, lower for LEO constellations). Used by MALE/HALE platforms like MQ-9 and Global Hawk.</li>
  <li><strong>Frequency management:</strong> Military C2 links use dedicated spectrum allocations, frequency hopping, and spread-spectrum techniques to resist interference and interception.</li>
  <li><strong>Redundancy:</strong> Critical military UAS use redundant C2 links (e.g., LOS primary with SATCOM backup) to ensure continued control if one link fails.</li>
</ul>

<h3>Payload Datalinks</h3>
<p>Separate from the C2 link, payload datalinks transmit sensor data (video, imagery, SIGINT) from the UAS to ground stations or other consumers.</p>
<ul>
  <li><strong>Bandwidth requirements:</strong> Full-motion video (FMV) at 1080p requires 4-8 Mbps depending on compression. Multiple sensor feeds and metadata increase the requirement to 20-50+ Mbps for advanced platforms.</li>
  <li><strong>Compression:</strong> H.264 and H.265 (HEVC) are standard video codecs. STANAG 4609 defines the NATO standard for digital motion imagery.</li>
  <li><strong>CDL (Common Data Link):</strong> NATO standard wideband datalink used by MALE/HALE platforms, providing up to 274 Mbps in Ku-band. Directional antenna requires tracking alignment.</li>
</ul>

<h3>SATCOM Integration</h3>
<p>Satellite communications enable beyond-line-of-sight operations and global reach for military UAS.</p>
<ul>
  <li><strong>GEO satellites:</strong> Geostationary orbit (35,786 km) — high latency (~600ms round trip) but wide coverage footprint. Used by platforms like MQ-9 Reaper.</li>
  <li><strong>LEO constellations:</strong> Low Earth orbit (500-2000 km) — much lower latency (20-40ms) with high throughput. Starlink and military-specific LEO constellations are transforming UAS BLOS operations.</li>
  <li><strong>MUOS:</strong> Mobile User Objective System — US military narrowband SATCOM system providing 3G-like services for UAS C2.</li>
</ul>

<h3>Mesh Networks and Swarm Communication</h3>
<p>Mesh networking enables multiple UAS to communicate with each other and relay data without relying on centralised infrastructure.</p>
<ul>
  <li><strong>MANET (Mobile Ad-hoc Network):</strong> Self-forming, self-healing networks where each node can relay traffic. Products like Persistent Systems MPU5 and Silvus StreamCaster are widely used in military UAS networks.</li>
  <li><strong>Swarm coordination:</strong> Mesh networks enable collaborative behaviour between multiple UAS — coordinated search patterns, distributed sensing, and resilient communication where loss of individual nodes does not break the network.</li>
  <li><strong>STANAG 4586:</strong> NATO interoperability standard for UAS C2, enabling different GCS to control different UAS types through standardised interfaces.</li>
</ul>`,
        },
        {
          title: "Electronic Warfare: Jamming, Spoofing, Hardening",
          content: `
<h3>The EW Threat to UAS</h3>
<p>Unmanned aircraft systems are inherently vulnerable to electronic warfare because they depend on radio frequency (RF) links for command, control, and navigation. Understanding these threats is essential for military UAS operators.</p>

<h3>Jamming</h3>
<p>Jamming involves transmitting RF energy to overpower or disrupt the signals a UAS depends on:</p>
<ul>
  <li><strong>C2 link jamming:</strong> Disrupting the command link causes the UAS to enter a lost-link procedure (typically autonomous return-to-base or loiter). Modern jammers can target specific frequency bands used by known UAS types.</li>
  <li><strong>GNSS jamming:</strong> Overwhelming GPS/GNSS signals forces the UAS to rely on inertial navigation, which degrades over time. Relatively inexpensive GNSS jammers can deny position data over large areas (10+ km radius for high-power systems).</li>
  <li><strong>Datalink jamming:</strong> Disrupting the payload datalink degrades ISR capability even if the UAS can still fly and be controlled. This is particularly effective against narrow-beam directional links.</li>
  <li><strong>Barrage vs. spot jamming:</strong> Barrage jamming covers a wide frequency range (effective but requires high power). Spot jamming concentrates energy on specific frequencies (efficient but requires knowing the target frequency).</li>
</ul>

<h3>Spoofing</h3>
<p>Spoofing involves transmitting false signals to deceive UAS systems:</p>
<ul>
  <li><strong>GPS spoofing:</strong> Transmitting counterfeit GPS signals to cause the UAS to calculate an incorrect position. This can redirect the UAS off-course, force a landing in a desired location, or create navigation errors that compromise the mission. GPS spoofing is considered more dangerous than jamming because the pilot may not realise the navigation data is compromised.</li>
  <li><strong>C2 spoofing:</strong> Attempting to inject false commands into the control link. Modern encrypted military links make this extremely difficult, but protocol vulnerabilities in commercial systems have been demonstrated.</li>
  <li><strong>ADS-B spoofing:</strong> Creating phantom aircraft tracks in the UAS traffic management system to cause unnecessary avoidance manoeuvres or create confusion.</li>
</ul>

<h3>EW Hardening Measures</h3>
<p>Military UAS employ multiple layers of protection against EW threats:</p>
<ul>
  <li><strong>Frequency hopping:</strong> Rapidly changing transmission frequencies makes jamming more difficult, as the jammer must cover the entire hop set. Military radios can use thousands of frequency hops per second.</li>
  <li><strong>Spread spectrum:</strong> Distributing signal energy across a wide bandwidth reduces susceptibility to narrowband jamming. Direct Sequence Spread Spectrum (DSSS) and Frequency Hopping Spread Spectrum (FHSS) are common techniques.</li>
  <li><strong>Encryption:</strong> End-to-end encryption of C2 and data links prevents command injection and data interception. AES-256 is the minimum standard for military UAS communications.</li>
  <li><strong>Anti-jam GNSS:</strong> Controlled Reception Pattern Antennas (CRPA) use beam-forming to null jamming signals. M-code GPS provides military-specific encrypted signals with higher power. Navigation filter logic can detect and reject spoofed signals.</li>
  <li><strong>Autonomous fallback:</strong> Robust lost-link procedures (automatic return to base, waypoint following, or loiter) ensure the UAS can continue safely if communications are disrupted.</li>
</ul>`,
        },
      ],
      quiz: [
        {
          question:
            "Which UAS configuration offers the best endurance for long-duration ISR missions?",
          options: [
            "Quadcopter multirotor",
            "Fixed-wing",
            "Hexacopter with large batteries",
            "Tilt-rotor VTOL",
          ],
          correctIndex: 1,
          explanation:
            "Fixed-wing UAS offer superior endurance due to their aerodynamic efficiency. MALE-class fixed-wing platforms like the MQ-9 Reaper can achieve 27+ hours of flight time, far exceeding any multirotor or VTOL hybrid configuration.",
        },
        {
          question: "What does CRPA stand for in the context of GPS anti-jam technology?",
          options: [
            "Controlled Reception Pattern Antenna",
            "Counter-Radio Protection Array",
            "Coded Receiver Phase Alignment",
            "Centralised Radio Positioning Antenna",
          ],
          correctIndex: 0,
          explanation:
            "CRPA stands for Controlled Reception Pattern Antenna. These antenna arrays use beam-forming techniques to create nulls in the direction of jamming signals while maintaining reception of legitimate GPS satellite signals.",
        },
        {
          question:
            "Which NATO standard defines the interoperability framework for UAS command and control?",
          options: [
            "STANAG 4609",
            "STANAG 4586",
            "STANAG 7023",
            "STANAG 2019",
          ],
          correctIndex: 1,
          explanation:
            "STANAG 4586 is the NATO standard for UAS command, control, communication, and intelligence (C4I) interoperability. It enables different ground control stations to control different UAS types through standardised interfaces.",
        },
        {
          question:
            "What is the primary advantage of SAR (Synthetic Aperture Radar) payloads over EO/IR sensors?",
          options: [
            "Higher image resolution",
            "Lower cost and weight",
            "All-weather, day/night imaging capability",
            "Better colour reproduction",
          ],
          correctIndex: 2,
          explanation:
            "SAR's primary advantage is its ability to produce high-resolution imagery regardless of weather conditions (clouds, rain, fog) or lighting (complete darkness). Unlike optical sensors, radar waves penetrate atmospheric conditions that degrade EO/IR performance.",
        },
        {
          question:
            "What is the typical round-trip latency for UAS SATCOM via geostationary orbit?",
          options: [
            "20-40 milliseconds",
            "100-150 milliseconds",
            "~600 milliseconds",
            "2-3 seconds",
          ],
          correctIndex: 2,
          explanation:
            "Geostationary satellites orbit at 35,786 km altitude. The signal must travel to the satellite and back, resulting in approximately 600ms round-trip latency. This is a significant consideration for real-time UAS control and is one reason LEO constellations are gaining interest.",
        },
      ],
    },

    // ── MODULE 3 ──────────────────────────────────────────────
    {
      id: "mission-planning",
      number: 3,
      title: "Mission Planning & Airspace",
      description:
        "Master operational planning from mission briefing to execution. Covers airspace classification, NOTAMs, civil-military deconfliction procedures, and comprehensive risk assessment frameworks.",
      duration: "~2 hours",
      sections: [
        {
          title: "Operational Risk Assessment (SORA)",
          content: `
<h3>Applying SORA to Military-Adjacent Operations</h3>
<p>While military operations are exempt from EASA regulations, the SORA methodology remains highly valuable as a structured risk assessment framework that military planners can adapt for their own operations. Many national Military Aviation Authorities have adopted SORA-derived processes.</p>

<h3>Ground Risk Assessment</h3>
<p>The ground risk assessment evaluates the danger to people and property on the ground if the UAS crashes:</p>
<ul>
  <li><strong>Intrinsic Ground Risk Class (GRC):</strong> Determined by the UAS characteristic dimension and the operational scenario. A 3m fixed-wing flying BVLOS over populated areas has a higher intrinsic GRC than a small multirotor flying VLOS over unpopulated terrain.</li>
  <li><strong>Mitigation measures:</strong> Strategic mitigations (e.g., ground risk buffer, population density reduction, emergency response plan) can reduce the final GRC. Each mitigation has an associated integrity level (low, medium, high) that must be substantiated.</li>
  <li><strong>Impact energy:</strong> The kinetic energy of the UAS at impact is a key factor. A 25 kg fixed-wing at cruise speed carries significantly more energy than a 2 kg quadcopter.</li>
</ul>

<h3>Air Risk Assessment</h3>
<p>The air risk assessment evaluates the probability and severity of a mid-air collision with manned aircraft:</p>
<ul>
  <li><strong>Air Risk Class (ARC):</strong> Ranges from ARC-a (atypical airspace, very low encounter rate) to ARC-d (uncontrolled airspace above 500ft in high-traffic areas). Higher ARC requires more robust detect-and-avoid capabilities.</li>
  <li><strong>Strategic mitigations:</strong> Operating in restricted/segregated airspace, temporal restrictions (night operations), or coordination with ATC can reduce the effective ARC.</li>
  <li><strong>Tactical mitigations:</strong> Detect-and-avoid systems, transponders (ADS-B Out), and visual observers provide tactical separation from manned aircraft.</li>
</ul>

<h3>SAIL and Operational Safety Objectives</h3>
<p>The Specific Assurance and Integrity Level (SAIL) synthesises the ground and air risk assessments into a single level (I through VI) that determines the required Operational Safety Objectives (OSOs). Higher SAILs require more rigorous compliance with OSOs covering:</p>
<ul>
  <li>Technical issue management with the UAS</li>
  <li>Human error management</li>
  <li>Adverse operating conditions management</li>
  <li>Compliance monitoring</li>
</ul>`,
        },
        {
          title: "Airspace Classification (A Through G)",
          content: `
<h3>ICAO Airspace Classification System</h3>
<p>Airspace classification, standardised by the International Civil Aviation Organization (ICAO), directly impacts where and how UAS can operate. Understanding this system is fundamental for mission planning.</p>

<h3>Controlled Airspace (Classes A-E)</h3>
<ul>
  <li><strong>Class A:</strong> Typically above FL195 (19,500 feet). IFR only. All flights receive ATC separation services. UAS operations require specific authorisation and transponder equipment. Relevant for HALE platforms only.</li>
  <li><strong>Class B:</strong> Surrounds major airports (e.g., Schiphol). IFR and VFR flights receive ATC separation. UAS operations require specific authorisation, transponder, and radio communication capability.</li>
  <li><strong>Class C:</strong> Surrounds large airports. IFR flights receive separation from all traffic; VFR flights receive traffic information. UAS access requires authorisation and typically ADS-B Out.</li>
  <li><strong>Class D:</strong> Control zones (CTRs) around smaller airports. IFR receives separation from IFR; VFR receives traffic information. UAS can access with authorisation, which may be obtainable through automated systems (U-space).</li>
  <li><strong>Class E:</strong> General controlled airspace. IFR receives separation; VFR is advisory only. This is the most permissive controlled airspace class for UAS operations.</li>
</ul>

<h3>Uncontrolled Airspace (Classes F-G)</h3>
<ul>
  <li><strong>Class F:</strong> Advisory routes where IFR flights receive advisory service. Uncommon in many European countries.</li>
  <li><strong>Class G:</strong> Uncontrolled airspace where no ATC service is provided. This is where most small UAS operations occur, typically below 500 feet AGL. However, manned aircraft (especially helicopters and agricultural aircraft) also operate in Class G, requiring robust see-and-avoid or detect-and-avoid capabilities.</li>
</ul>

<h3>Military Airspace Structures</h3>
<p>In addition to the standard ICAO classifications, military operations use specialised airspace designations:</p>
<ul>
  <li><strong>Restricted Areas (R/EHR):</strong> Airspace where flight is restricted according to certain conditions. Military UAS training areas are often designated as restricted areas.</li>
  <li><strong>Danger Areas (D/EHD):</strong> Areas where activities dangerous to flight may exist. Often used for live-fire exercises and UAS operations.</li>
  <li><strong>Prohibited Areas (P/EHP):</strong> Airspace where all flight is prohibited (e.g., over government buildings, nuclear facilities).</li>
  <li><strong>Temporary Reserved Areas (TRA):</strong> Airspace temporarily reserved for military use through civil-military coordination. TRAs are activated through NOTAMs and provide segregated airspace for military UAS operations.</li>
  <li><strong>Temporary Segregated Areas (TSA):</strong> Similar to TRAs but with stricter exclusion of other traffic. Used for high-risk military UAS operations.</li>
</ul>`,
        },
        {
          title: "NOTAMs, TFRs, and Military Airspace",
          content: `
<h3>NOTAMs (Notices to Air Missions)</h3>
<p>NOTAMs are the primary mechanism for communicating airspace changes, restrictions, and hazards to aviators. For UAS operators, NOTAMs are essential pre-flight planning documents.</p>
<ul>
  <li><strong>Types relevant to UAS:</strong> Airspace activation/deactivation NOTAMs (TRAs, TSAs, danger areas), airport operational status, navigation aid outages, temporary restrictions, and UAS-specific NOTAMs for operations affecting other airspace users.</li>
  <li><strong>NOTAM format:</strong> The ICAO NOTAM format uses standardised Q-codes and geographical coordinates. Recent reforms (NOTAM reform initiative) aim to make NOTAMs more readable and filterable.</li>
  <li><strong>Digital NOTAM:</strong> The industry is transitioning to digital NOTAMs (AIXM format) that can be machine-parsed, enabling automated geo-fencing updates and dynamic airspace management.</li>
  <li><strong>Military NOTAMs:</strong> Military units issue NOTAMs through their national aeronautical information service (AIS) to notify civilian aviators of military UAS operations, restricted area activations, and exercise boundaries.</li>
</ul>

<h3>Temporary Flight Restrictions (TFRs)</h3>
<p>TFRs restrict flight in specific areas for defined periods, typically for security, safety, or emergency operations:</p>
<ul>
  <li><strong>Security TFRs:</strong> Established around VIP movements, government events, or sensitive installations</li>
  <li><strong>Emergency TFRs:</strong> Implemented during disasters, wildfires, or accident investigations to protect emergency responders</li>
  <li><strong>Military exercise TFRs:</strong> Large-scale exercises (e.g., NATO exercises) may establish extensive TFRs affecting UAS operations across wide areas</li>
  <li><strong>UAS operator responsibility:</strong> Operators must check for active TFRs during pre-flight planning and monitor for pop-up TFRs during operations</li>
</ul>

<h3>Civil-Military Airspace Coordination</h3>
<p>The Flexible Use of Airspace (FUA) concept, mandated by EU regulation, enables dynamic allocation of airspace between civil and military users:</p>
<ul>
  <li><strong>Level 1 (Strategic):</strong> Long-term airspace management policy set by national authorities</li>
  <li><strong>Level 2 (Pre-tactical):</strong> Day-to-day allocation of airspace structures based on military and civil requirements, managed by Airspace Management Cells (AMCs)</li>
  <li><strong>Level 3 (Tactical):</strong> Real-time coordination between military units and ATC for immediate airspace needs</li>
</ul>
<p>Military UAS operators must engage with all three FUA levels to ensure airspace is available for their operations while minimising impact on civil aviation.</p>`,
        },
        {
          title: "Weather Considerations for Drone Operations",
          content: `
<h3>Meteorological Factors Affecting UAS</h3>
<p>Weather has a disproportionate impact on UAS compared to manned aircraft. Most tactical UAS have lower wind and weather tolerances, and small UAS are particularly susceptible to gusts and precipitation.</p>

<h3>Wind</h3>
<ul>
  <li><strong>Maximum operating wind:</strong> Most small multirotors have maximum wind ratings of 10-15 m/s (20-30 knots). Fixed-wing tactical UAS typically handle 15-25 knots. Larger platforms can operate in stronger winds but with degraded endurance.</li>
  <li><strong>Gusts:</strong> Gust factors (ratio of gust speed to sustained wind) above 1.5 can cause control issues for small UAS. Turbulence near buildings, ridgelines, and tree lines creates localised gusts that may not appear in weather forecasts.</li>
  <li><strong>Wind shear:</strong> Changes in wind speed or direction with altitude affect launch, recovery, and transition phases. Low-level jet streams can create significant shear below 500 metres AGL.</li>
  <li><strong>Mission impact:</strong> Headwinds reduce ground speed and endurance. Crosswinds affect sensor stabilisation and image quality. Tailwinds during return legs should be accounted for in fuel/battery planning.</li>
</ul>

<h3>Precipitation and Humidity</h3>
<ul>
  <li><strong>Rain:</strong> Most tactical UAS are not rated for operation in rain. Water ingress can damage electronics, GPS antennas, and motor systems. Some military platforms have IP54 or higher ratings for light rain operations.</li>
  <li><strong>Snow and ice:</strong> Icing is a critical hazard. Ice accumulation on wings degrades lift and increases weight. Propeller icing reduces thrust. Most small UAS lack de-icing capability.</li>
  <li><strong>Fog and low cloud:</strong> Reduces VLOS range and degrades EO sensor performance. IR sensors and SAR payloads maintain effectiveness in fog.</li>
  <li><strong>Humidity:</strong> High humidity can cause condensation in camera housings and electronics. Persistent moisture degrades battery performance and connector reliability.</li>
</ul>

<h3>Temperature</h3>
<ul>
  <li><strong>Cold weather:</strong> Lithium polymer batteries lose capacity significantly below 0degC (up to 30% reduction at -20degC). Motor bearings stiffen, increasing power consumption. LCD screens may become sluggish.</li>
  <li><strong>Hot weather:</strong> High temperatures reduce air density, degrading lift and increasing power requirements. Battery thermal runaway risk increases above 40degC. Electronics require additional cooling.</li>
  <li><strong>Density altitude:</strong> The combination of temperature, humidity, and altitude affects air density and therefore UAS performance. High-altitude, hot-day conditions can significantly reduce payload capacity.</li>
</ul>

<h3>Weather Planning Resources</h3>
<p>UAS operators should consult multiple weather sources:</p>
<ul>
  <li><strong>METARs/TAFs:</strong> Airport weather reports and forecasts, available from aviation weather services</li>
  <li><strong>Pilot weather briefings:</strong> Low-level wind charts, turbulence forecasts, and icing charts</li>
  <li><strong>On-site measurement:</strong> Portable weather stations (Kestrel, Davis) for real-time surface conditions</li>
  <li><strong>Upper wind data:</strong> Radiosonde data and numerical weather prediction models for wind profiles at operating altitude</li>
</ul>`,
        },
        {
          title: "Mission Planning Tools and Checklists",
          content: `
<h3>The Mission Planning Process</h3>
<p>Military UAS mission planning follows a structured methodology similar to manned aviation, adapted for unmanned operations. The process typically follows the military decision-making process (MDMP) or a simplified variant.</p>

<h3>Five-Phase Planning Framework</h3>
<ul>
  <li><strong>Phase 1 — Mission Analysis:</strong> Define the operational requirement. What intelligence is needed? What area must be covered? What is the time window? What are the constraints (altitude, airspace, weather, rules of engagement)?</li>
  <li><strong>Phase 2 — Course of Action Development:</strong> Develop options for mission execution including orbit points, sensor coverage patterns, ingress/egress routes, communication relay positions, and contingency plans.</li>
  <li><strong>Phase 3 — Risk Assessment:</strong> Apply SORA-derived methodology or national military risk assessment framework. Identify hazards, assess likelihood and severity, determine mitigations, and accept residual risk at the appropriate command level.</li>
  <li><strong>Phase 4 — Mission Briefing:</strong> Brief the entire crew on the mission plan, contingencies, weather, airspace status, communications plan, and coordination with supported units.</li>
  <li><strong>Phase 5 — Execution and Monitoring:</strong> Execute the mission plan with continuous monitoring of UAS status, weather evolution, airspace changes, and mission effectiveness. Be prepared to adapt the plan as the situation develops.</li>
</ul>

<h3>Mission Planning Software</h3>
<p>Modern UAS operations rely on specialised planning software:</p>
<ul>
  <li><strong>Ground control station planning modules:</strong> Most military GCS (e.g., AeroVironment DGCS, General Atomics AGCS) include mission planning modules for route creation, sensor coverage analysis, and fuel/endurance calculations.</li>
  <li><strong>Terrain analysis tools:</strong> Digital elevation models (DEM), line-of-sight analysis for C2 link planning, and obstacle databases inform route selection.</li>
  <li><strong>Airspace management tools:</strong> Integration with national AIS (aeronautical information services) for NOTAM checking, airspace status, and TRA/TSA scheduling.</li>
  <li><strong>Weather integration:</strong> Automated weather data overlays showing wind fields, precipitation, visibility, and cloud base along the planned route.</li>
</ul>

<h3>Pre-Mission Checklist</h3>
<p>A thorough pre-mission checklist should cover:</p>
<ul>
  <li><strong>Airspace:</strong> Classification confirmed, NOTAMs checked, TRAs/TSAs activated, ATC coordination complete</li>
  <li><strong>Weather:</strong> Current conditions and forecast within limits, alternate plan for weather degradation</li>
  <li><strong>Equipment:</strong> UAS serviceable, batteries charged and temperature-conditioned, sensors calibrated, GCS software updated</li>
  <li><strong>Communications:</strong> C2 link tested, frequencies deconflicted, backup communications confirmed, IFF settings verified</li>
  <li><strong>Crew:</strong> All crew positions manned, crew rest requirements met, roles and responsibilities confirmed, emergency procedures reviewed</li>
  <li><strong>Coordination:</strong> Supported unit informed, adjacent units aware, recovery site prepared, emergency response plan in place</li>
</ul>`,
        },
      ],
      quiz: [
        {
          question:
            "In the ICAO airspace classification system, which class is uncontrolled airspace where most small UAS operations occur?",
          options: ["Class D", "Class E", "Class F", "Class G"],
          correctIndex: 3,
          explanation:
            "Class G is uncontrolled airspace where no ATC service is provided. Most small UAS operations occur in Class G airspace, typically below 500 feet AGL. However, manned aircraft also operate in this airspace, requiring vigilance.",
        },
        {
          question:
            "What does the Flexible Use of Airspace (FUA) concept enable?",
          options: [
            "Permanent allocation of airspace to military users",
            "Dynamic allocation of airspace between civil and military users",
            "Exclusive civil aviation access to all airspace below FL195",
            "Automatic NOTAM generation for all UAS flights",
          ],
          correctIndex: 1,
          explanation:
            "The Flexible Use of Airspace (FUA) concept enables dynamic allocation of airspace between civil and military users. Rather than permanently reserving airspace for military use, FUA allows airspace to be allocated based on actual needs through strategic, pre-tactical, and tactical coordination levels.",
        },
        {
          question:
            "At what temperature do lithium polymer batteries begin to experience significant capacity loss?",
          options: [
            "Below 20 degrees C",
            "Below 10 degrees C",
            "Below 0 degrees C",
            "Below -10 degrees C",
          ],
          correctIndex: 2,
          explanation:
            "Lithium polymer batteries experience significant capacity loss below 0 degrees Celsius, with up to 30% reduction at -20 degrees C. This is a critical consideration for winter operations and high-altitude missions where temperatures drop rapidly with altitude.",
        },
        {
          question:
            "What is a Temporary Segregated Area (TSA) used for in military operations?",
          options: [
            "Permanent military training airspace",
            "Temporary airspace reserved for military use with strict exclusion of other traffic",
            "Areas where civilian drones are permanently prohibited",
            "Airspace reserved for commercial airline holding patterns",
          ],
          correctIndex: 1,
          explanation:
            "A Temporary Segregated Area (TSA) is airspace temporarily reserved for military use with strict exclusion of other traffic. TSAs provide segregated airspace for high-risk military UAS operations and are activated through NOTAMs for specific time periods.",
        },
        {
          question:
            "Which phase of the mission planning framework involves applying a risk assessment methodology?",
          options: [
            "Phase 1 — Mission Analysis",
            "Phase 2 — Course of Action Development",
            "Phase 3 — Risk Assessment",
            "Phase 4 — Mission Briefing",
          ],
          correctIndex: 2,
          explanation:
            "Phase 3 is the Risk Assessment phase, where the mission planner applies SORA-derived methodology or the national military risk assessment framework. This phase identifies hazards, assesses likelihood and severity, determines mitigations, and determines the appropriate level of risk acceptance authority.",
        },
      ],
    },

    // ── MODULE 4 ──────────────────────────────────────────────
    {
      id: "flight-operations",
      number: 4,
      title: "Flight Operations & Procedures",
      description:
        "Execute pre-flight checks, manage in-flight emergencies, apply crew resource management principles, and follow standard handover protocols for safe and effective operations.",
      duration: "~2 hours",
      sections: [
        {
          title: "Pre-Flight Inspection Checklist",
          content: `
<h3>Systematic Pre-Flight Inspection</h3>
<p>A thorough pre-flight inspection is the single most important safety practice in UAS operations. The inspection follows a systematic, documented procedure that covers every critical system before the aircraft leaves the ground.</p>

<h3>Airframe Inspection</h3>
<ul>
  <li><strong>Structural integrity:</strong> Check for cracks, dents, deformation, or delamination in the airframe, wings, and control surfaces. Inspect mounting points for payload and landing gear.</li>
  <li><strong>Propulsion:</strong> Inspect propellers for nicks, cracks, and balance. Verify propeller attachment torque. For internal combustion engines, check fuel lines, filters, and exhaust system. For electric motors, check for bearing play and unusual sounds during manual rotation.</li>
  <li><strong>Control surfaces:</strong> Verify full and free movement of all control surfaces (ailerons, elevator, rudder for fixed-wing; motor arms and tilts for VTOL). Check hinges, linkages, and servo connections.</li>
  <li><strong>Wiring and connectors:</strong> Inspect all visible wiring for chafing, pinching, or loose connectors. Verify that signal cables are routed away from power cables to minimise electromagnetic interference.</li>
</ul>

<h3>Avionics and Systems</h3>
<ul>
  <li><strong>Flight controller:</strong> Power on and verify boot sequence. Confirm firmware version matches approved configuration. Check for any error messages or warnings.</li>
  <li><strong>GPS/GNSS:</strong> Verify satellite lock (minimum 8+ satellites for safe operation). Confirm HDOP (Horizontal Dilution of Precision) is below 2.0. Verify home point is correctly set.</li>
  <li><strong>IMU calibration:</strong> Verify gyroscope and accelerometer calibration is current. Perform field calibration if the system has been moved to a significantly different location or temperature environment.</li>
  <li><strong>Compass calibration:</strong> Verify magnetometer readings. Recalibrate if operating near large metal structures, vehicles, or underground utilities.</li>
  <li><strong>Communications:</strong> Test C2 link signal strength and latency. Verify range check passes. Confirm telemetry data is being received correctly at the GCS.</li>
</ul>

<h3>Battery / Power System</h3>
<ul>
  <li><strong>Charge level:</strong> Confirm batteries are fully charged. Verify cell balance (maximum 0.1V difference between cells for LiPo). Check battery temperature is within operating range.</li>
  <li><strong>Physical inspection:</strong> Look for swelling, punctures, or deformation. Check connector pins for corrosion or heat damage. Verify battery is securely mounted.</li>
  <li><strong>Cycle count:</strong> Record battery cycle count. Retire batteries that have exceeded manufacturer-recommended cycle life or show capacity degradation above 20%.</li>
</ul>

<h3>Payload</h3>
<ul>
  <li><strong>Sensor check:</strong> Power on payload and verify video/data feed at the GCS. Check gimbal movement through full range. Verify focus, zoom, and recording functions.</li>
  <li><strong>Mounting:</strong> Confirm payload is securely attached with all fasteners torqued to specification. Verify centre of gravity remains within limits with payload installed.</li>
  <li><strong>Data storage:</strong> Confirm adequate storage capacity. Format or replace storage media as required.</li>
</ul>`,
        },
        {
          title: "Crew Roles: Remote Pilot, Payload Operator, Visual Observer",
          content: `
<h3>Crew Composition</h3>
<p>Military UAS operations employ specialised crew roles to manage the complexity of simultaneous flight control, sensor operation, and mission management. The minimum crew complement depends on the platform and mission type.</p>

<h3>Remote Pilot in Command (RPIC)</h3>
<p>The RPIC has ultimate responsibility for the safe conduct of the flight:</p>
<ul>
  <li><strong>Primary duties:</strong> Aircraft control and navigation, compliance with flight plan, airspace management, communication with ATC (if required), and authority for mission abort decisions.</li>
  <li><strong>Decision authority:</strong> The RPIC has final authority and responsibility for the operation and safety of the flight. This mirrors the Pilot in Command authority in manned aviation.</li>
  <li><strong>Qualifications:</strong> Must hold appropriate pilot qualification for the platform type, be current in type-specific training, and meet medical fitness requirements set by the Military Aviation Authority.</li>
  <li><strong>Workload management:</strong> The RPIC must maintain situational awareness of aircraft state, weather, airspace, and mission progress while managing communications and coordinating with other crew members.</li>
</ul>

<h3>Payload Operator (PO)</h3>
<p>The Payload Operator manages sensor systems and mission-specific equipment:</p>
<ul>
  <li><strong>Primary duties:</strong> Sensor operation (camera pointing, zoom, mode selection), target tracking, imagery exploitation, video recording management, and real-time reporting of observed activity.</li>
  <li><strong>Sensor management:</strong> The PO must understand the capabilities and limitations of each sensor and select the optimal sensor mode for the current mission task (e.g., switching between EO and IR based on conditions).</li>
  <li><strong>Intelligence reporting:</strong> The PO typically produces real-time spot reports and coordinates with intelligence analysts for time-sensitive information.</li>
  <li><strong>Coordination with RPIC:</strong> The PO communicates orbit adjustments, altitude changes, and approach angles needed for optimal sensor coverage to the RPIC.</li>
</ul>

<h3>Visual Observer (VO)</h3>
<p>The Visual Observer maintains visual contact with the UAS and the surrounding airspace:</p>
<ul>
  <li><strong>Primary duties:</strong> Maintain visual line of sight with the UAS, scan for conflicting air traffic, monitor for ground hazards, and communicate real-time observations to the RPIC.</li>
  <li><strong>Regulatory requirement:</strong> VLOS operations require the RPIC or a designated VO to maintain visual contact with the UAS at all times. The VO must be in direct communication with the RPIC.</li>
  <li><strong>Positioning:</strong> VOs should be positioned to maintain sight of the UAS throughout the planned flight profile. For extended-range VLOS operations, multiple VOs may be positioned along the route.</li>
  <li><strong>Communication protocol:</strong> VOs use standardised call-outs for traffic (clock position, altitude, direction of travel) and hazards (birds, weather changes, ground activity).</li>
</ul>

<h3>Mission Commander (MC)</h3>
<p>For larger operations, a Mission Commander oversees the overall mission:</p>
<ul>
  <li><strong>Primary duties:</strong> Mission coordination with supported units, priority management, real-time mission re-tasking, and liaison with higher headquarters.</li>
  <li><strong>Not a flight role:</strong> The MC does not fly the aircraft but directs mission execution, freeing the RPIC and PO to focus on their respective tasks.</li>
</ul>`,
        },
        {
          title: "Normal Operating Procedures",
          content: `
<h3>Standard Operating Procedures (SOPs)</h3>
<p>SOPs ensure consistent, safe operations across different crews and conditions. Military UAS SOPs are typically published as unit-level documents approved by the commanding officer and reviewed by the Military Aviation Authority.</p>

<h3>Start-Up and Taxi</h3>
<ul>
  <li><strong>GCS initialization:</strong> Power on ground control station, load mission plan, verify data link configuration, and confirm telemetry reception. Run GCS built-in test (BIT) sequence.</li>
  <li><strong>Engine/motor start:</strong> Follow platform-specific start sequence. Verify RPM, voltage, and temperature readings are within normal parameters. For multi-engine platforms, start engines sequentially and verify each.</li>
  <li><strong>System checks:</strong> Run automated pre-flight checks through the flight controller. Verify all sensor feeds active at GCS. Confirm GPS lock and home point. Test fail-safe triggers.</li>
  <li><strong>Taxi (fixed-wing):</strong> Obtain taxi clearance if at a controlled airfield. Follow standard taxi routes. Perform control surface checks during taxi (full deflection test).</li>
</ul>

<h3>Take-Off</h3>
<ul>
  <li><strong>Final checks:</strong> Verify wind direction and strength, confirm take-off clearance, ensure launch area is clear of personnel and obstacles. Announce "launching" on the crew intercom.</li>
  <li><strong>Multirotor launch:</strong> Smooth throttle increase to hover. Stabilise at 3-5 metres AGL. Verify attitude hold and GPS position lock. Check for any unusual vibrations or drift.</li>
  <li><strong>Fixed-wing launch:</strong> Catapult launch: verify catapult tension and alignment. Hand launch: verify thrower technique and clear launch azimuth. Runway: standard take-off roll with rotation at specified speed.</li>
  <li><strong>Climb-out:</strong> Climb to transit altitude on published departure route. Monitor engine/motor performance during climb (highest power demand phase).</li>
</ul>

<h3>En-Route / On-Station</h3>
<ul>
  <li><strong>Navigation monitoring:</strong> Cross-check GPS track against planned route. Monitor altitude, airspeed, and heading. Maintain awareness of position relative to airspace boundaries.</li>
  <li><strong>System monitoring:</strong> Continuous monitoring of fuel/battery status, engine/motor temperatures, data link signal strength, and GPS satellite count. Log readings at defined intervals.</li>
  <li><strong>Communication:</strong> Maintain monitoring of assigned frequencies. Report position and status at defined intervals or when requested. Immediately report any abnormalities.</li>
  <li><strong>Mission execution:</strong> Execute planned sensor patterns. PO manages sensor pointing and recording. RPIC adjusts orbit as directed by PO or mission commander.</li>
</ul>

<h3>Recovery and Shutdown</h3>
<ul>
  <li><strong>Approach:</strong> Plan approach to landing zone considering wind direction, obstacles, and recovery method. Request landing clearance if at a controlled airfield.</li>
  <li><strong>Landing:</strong> Follow platform-specific landing procedure. Multirotor: controlled descent to hover at 3m, final descent to touchdown. Fixed-wing: approach to runway/net/parachute deployment point.</li>
  <li><strong>Post-landing:</strong> Disarm motors, safe all systems, and secure the aircraft. Download mission data. Complete post-flight inspection checklist. Log flight time and any discrepancies.</li>
</ul>`,
        },
        {
          title: "Emergency Procedures",
          content: `
<h3>Lost Link</h3>
<p>Loss of the command and control link is the most common emergency in UAS operations. Every UAS must have pre-programmed lost-link procedures.</p>
<ul>
  <li><strong>Detection:</strong> The GCS alerts when telemetry is lost. The UAS flight controller detects loss of pilot input. A timer starts (configurable, typically 3-30 seconds depending on platform).</li>
  <li><strong>Pre-programmed response:</strong> Common lost-link procedures include:
    <ul>
      <li>Hold position and orbit at current location for a defined period (allowing link re-establishment)</li>
      <li>Climb to a pre-set altitude (improving line-of-sight for link recovery)</li>
      <li>Return to launch point or a pre-designated recovery waypoint</li>
      <li>Land at current location (last resort for battery-critical situations)</li>
    </ul>
  </li>
  <li><strong>Duration management:</strong> The lost-link profile must account for remaining fuel/battery. The RPIC should have pre-calculated the maximum orbit time before a return-to-base becomes necessary.</li>
  <li><strong>Link recovery:</strong> Attempt to re-establish the link through antenna adjustment, frequency change, or relay activation. If link is recovered, resume normal operations or execute an immediate recovery if the situation warrants.</li>
</ul>

<h3>Flyaway</h3>
<p>A flyaway occurs when the UAS deviates uncontrollably from its intended flight path and does not respond to pilot commands.</p>
<ul>
  <li><strong>Causes:</strong> GPS spoofing/interference, compass error, flight controller malfunction, software bug, or loss of control authority.</li>
  <li><strong>Immediate actions:</strong> Attempt manual control override. If equipped, activate flight termination system (FTS). Notify ATC and adjacent units of the situation.</li>
  <li><strong>Tracking:</strong> Continue to monitor the UAS position through whatever data is available (last known position, radar tracking, visual observation). Plot trajectory for potential impact point estimation.</li>
  <li><strong>Notification:</strong> Report the incident to the chain of command, ATC, and civil aviation authority as required. Initiate search and recovery procedures.</li>
</ul>

<h3>Battery / Engine Failure</h3>
<ul>
  <li><strong>Single motor failure (multirotor):</strong> Most hexacopter and octocopter platforms can sustain flight on reduced motors. The flight controller automatically compensates. Land as soon as safely possible. Quadcopters typically cannot sustain flight on three motors.</li>
  <li><strong>Battery critical:</strong> When battery reaches minimum safe voltage, initiate immediate landing at the nearest suitable location. Do not attempt to return to base if insufficient charge remains. A dead-stick landing in a safe area is preferable to a mid-air loss of power over populated areas.</li>
  <li><strong>Engine failure (fixed-wing):</strong> Establish best-glide speed immediately. Select a landing area within glide range. Deploy parachute recovery system if equipped. Notify ATC and clear the crash area.</li>
</ul>

<h3>Fire</h3>
<ul>
  <li><strong>Airborne fire:</strong> Immediately terminate the flight. If possible, direct the UAS to an unpopulated area before impact. LiPo battery fires cannot be extinguished with standard methods — the batteries must burn out.</li>
  <li><strong>Ground fire:</strong> Evacuate personnel from the area. Do not use water on lithium battery fires (use sand, dry chemical, or lithium-specific suppressant). Establish a safety perimeter considering toxic fume dispersal.</li>
</ul>`,
        },
        {
          title: "Crew Resource Management (CRM)",
          content: `
<h3>CRM in UAS Operations</h3>
<p>Crew Resource Management (CRM) is the systematic approach to managing human factors in aviation operations. Originally developed for manned aviation, CRM principles are equally critical for UAS operations where crew members must coordinate effectively despite being physically separated from the aircraft.</p>

<h3>Communication</h3>
<p>Effective communication is the foundation of CRM:</p>
<ul>
  <li><strong>Standard phraseology:</strong> Use consistent, unambiguous terminology for all operational communications. Avoid slang, abbreviations, or jargon that could be misunderstood. Standard callouts include "take-off," "on-station," "sensor active," "RTB" (return to base), and "emergency."</li>
  <li><strong>Closed-loop communication:</strong> Every command or critical piece of information must be acknowledged. The sender speaks, the receiver reads back, and the sender confirms. This eliminates miscommunication and ensures shared understanding.</li>
  <li><strong>Crew intercom discipline:</strong> Keep intercom communications brief, relevant, and timely. Avoid unnecessary conversation during critical phases (take-off, landing, emergency). Use the principle of "sterile cockpit" during high-workload periods.</li>
  <li><strong>Cross-cockpit communication:</strong> The RPIC and PO must maintain continuous communication about aircraft state, sensor status, and mission progress. Neither crew member should make assumptions about what the other person knows.</li>
</ul>

<h3>Situational Awareness (SA)</h3>
<p>Maintaining SA is more challenging in UAS operations because the crew relies entirely on instruments and sensor feeds rather than direct sensory perception:</p>
<ul>
  <li><strong>Level 1 — Perception:</strong> What is the current state? Monitor altitude, airspeed, position, battery level, wind, communications status, and sensor imagery.</li>
  <li><strong>Level 2 — Comprehension:</strong> What does it mean? Integrate the perceived information to understand the overall situation. Is the mission progressing as planned? Are there developing threats?</li>
  <li><strong>Level 3 — Projection:</strong> What will happen next? Anticipate future states. When will the battery reach minimum? Will the weather deteriorate? Will airspace restrictions change?</li>
</ul>

<h3>Decision Making</h3>
<ul>
  <li><strong>OODA Loop:</strong> Military decision-making often follows the Observe-Orient-Decide-Act cycle. For UAS operations, rapid OODA cycling is essential for adapting to changing situations.</li>
  <li><strong>Risk-benefit analysis:</strong> Every decision should weigh the mission benefit against the safety risk. A successful mission that damages the aircraft or endangers people is not a success.</li>
  <li><strong>Go/No-Go decisions:</strong> Establish clear criteria before the mission for conditions that warrant mission abort. Decide on these thresholds when thinking is calm and unrushed.</li>
</ul>

<h3>Workload Management</h3>
<ul>
  <li><strong>Task shedding:</strong> During high-workload situations, shed non-essential tasks. Prioritise aviate (fly the aircraft), navigate (maintain position), communicate (report status), and then operate (execute the mission).</li>
  <li><strong>Crew coordination:</strong> Distribute tasks appropriately across crew positions. If one crew member becomes overloaded, other members should proactively offer assistance.</li>
  <li><strong>Fatigue management:</strong> Long-duration UAS missions (8-24+ hours) require crew rotation plans. Cognitive performance degrades significantly after 10-12 hours of continuous monitoring. Military units should establish maximum crew duty periods and mandatory rest intervals.</li>
</ul>`,
        },
      ],
      quiz: [
        {
          question:
            "What is the minimum recommended number of GPS satellites for safe UAS operation?",
          options: [
            "4 satellites",
            "6 satellites",
            "8 satellites",
            "12 satellites",
          ],
          correctIndex: 2,
          explanation:
            "While GPS can calculate a 3D position with just 4 satellites, a minimum of 8+ satellites is recommended for safe UAS operation. This provides redundancy for satellite geometry variations and allows the navigation filter to detect and reject faulty satellite signals.",
        },
        {
          question:
            "In the priority hierarchy for high-workload situations, what comes first?",
          options: [
            "Communicate",
            "Navigate",
            "Aviate",
            "Operate the mission payload",
          ],
          correctIndex: 2,
          explanation:
            "The priority hierarchy is Aviate, Navigate, Communicate, Operate. Flying the aircraft safely always takes first priority. This principle, borrowed from manned aviation, ensures that during high-workload situations the crew focuses on keeping the aircraft under control before attending to other tasks.",
        },
        {
          question:
            "What is the most common emergency encountered in UAS operations?",
          options: [
            "Engine failure",
            "Lost link (loss of C2 connection)",
            "Bird strike",
            "GPS spoofing",
          ],
          correctIndex: 1,
          explanation:
            "Loss of the command and control (C2) link is the most common emergency in UAS operations. This can be caused by range, terrain masking, interference, equipment failure, or antenna misalignment. Every UAS must have pre-programmed lost-link procedures to handle this contingency autonomously.",
        },
        {
          question:
            "What level of situational awareness involves anticipating future states?",
          options: [
            "Level 1 — Perception",
            "Level 2 — Comprehension",
            "Level 3 — Projection",
            "Level 4 — Resolution",
          ],
          correctIndex: 2,
          explanation:
            "Level 3 situational awareness is Projection — the ability to anticipate what will happen next based on current observations and understanding. This is the highest level of SA and requires experience and training to develop effectively in UAS operations.",
        },
        {
          question:
            "What is the correct response when a quadcopter loses one of its four motors?",
          options: [
            "Continue the mission on three motors",
            "Switch to manual mode for better control",
            "Land immediately — quadcopters typically cannot sustain flight on three motors",
            "Increase power to the remaining motors to compensate",
          ],
          correctIndex: 2,
          explanation:
            "Most quadcopter configurations cannot sustain controlled flight with only three operational motors due to the loss of both thrust and attitude control authority. Unlike hexacopters and octocopters which have motor redundancy, quadcopters should land immediately or deploy a parachute system if equipped.",
        },
      ],
    },

    // ── MODULE 5 ──────────────────────────────────────────────
    {
      id: "isr-tactical",
      number: 5,
      title: "ISR & Tactical Employment",
      description:
        "Apply intelligence gathering techniques, design surveillance patterns, conduct target acquisition, exploit collected data, and manage real-time feeds for tactical decision-making.",
      duration: "~2 hours",
      sections: [
        {
          title: "ISR Fundamentals: Collection, Processing, Exploitation, Dissemination",
          content: `
<h3>The Intelligence Cycle and UAS ISR</h3>
<p>Intelligence, Surveillance, and Reconnaissance (ISR) is the coordinated acquisition, processing, and provision of accurate, relevant, and timely information to support commander decision-making. UAS platforms have revolutionised ISR by providing persistent, flexible collection capabilities at a fraction of the cost of manned platforms.</p>

<h3>Collection</h3>
<p>Collection is the gathering of raw data through sensors and observation:</p>
<ul>
  <li><strong>Planning:</strong> Collection planning translates intelligence requirements into specific collection tasks. The collection manager prioritises requirements, selects the appropriate sensor and platform, and schedules collection missions.</li>
  <li><strong>Multi-INT approach:</strong> Modern ISR operations combine multiple intelligence disciplines:
    <ul>
      <li><strong>IMINT</strong> (Imagery Intelligence) — EO/IR cameras, SAR</li>
      <li><strong>SIGINT</strong> (Signals Intelligence) — Communications and electronic emissions intercept</li>
      <li><strong>MASINT</strong> (Measurement and Signature Intelligence) — Acoustic, seismic, chemical sensors</li>
      <li><strong>HUMINT</strong> support — UAS can corroborate or cue human intelligence sources</li>
    </ul>
  </li>
  <li><strong>Cueing:</strong> ISR operations often use a "find, fix, finish, exploit, analyse" (F3EA) targeting methodology where UAS provide the persistent stare needed to fix targets after initial detection.</li>
</ul>

<h3>Processing</h3>
<p>Processing converts raw collected data into a usable format:</p>
<ul>
  <li><strong>Video processing:</strong> Full-motion video (FMV) is geotagged with metadata (position, time, sensor parameters) following STANAG 4609/MISB standards. This enables accurate geolocation of observed objects.</li>
  <li><strong>Image processing:</strong> Still imagery undergoes orthorectification, mosaicking, and enhancement. AI-assisted processing can automatically detect objects of interest, track changes, and flag anomalies.</li>
  <li><strong>Signal processing:</strong> SIGINT data is filtered, demodulated, and decrypted (where possible) to extract usable intelligence.</li>
</ul>

<h3>Exploitation</h3>
<p>Exploitation is the analysis of processed data to extract intelligence:</p>
<ul>
  <li><strong>Imagery analysis:</strong> Trained imagery analysts (IAs) interpret sensor data to identify military equipment, assess battle damage, detect patterns of life, and characterise terrain.</li>
  <li><strong>Pattern of life analysis:</strong> Extended surveillance reveals habitual patterns — movement routes, timing, associations — that inform understanding of adversary activities.</li>
  <li><strong>Change detection:</strong> Comparing imagery from different time periods reveals new construction, disturbed earth, vehicle movement, and other changes indicative of activity.</li>
</ul>

<h3>Dissemination</h3>
<p>Dissemination delivers intelligence products to consumers in a timely, usable format:</p>
<ul>
  <li><strong>Real-time dissemination:</strong> Live FMV feeds to ground commanders via ROVER (Remotely Operated Video Enhanced Receiver) or equivalent systems enable immediate tactical decision-making.</li>
  <li><strong>Formatted reports:</strong> Intelligence summaries, spot reports, and target folders following standardised formats (e.g., SALUTE reports for contact information).</li>
  <li><strong>Database integration:</strong> Collected intelligence feeds into theatre-level databases and common operational pictures, contributing to broader situational awareness.</li>
</ul>`,
        },
        {
          title: "Surveillance Patterns: Orbit, Racetrack, Figure-8, Grid Search",
          content: `
<h3>Orbit Patterns</h3>
<p>Orbit patterns provide sustained coverage of a point target or small area of interest:</p>
<ul>
  <li><strong>Standard orbit:</strong> Circular flight path at a constant altitude around a designated point. The orbit radius is determined by sensor slant range requirements and wind conditions. Standard orbits provide continuous sensor coverage of the target.</li>
  <li><strong>Offset orbit:</strong> The orbit centre is displaced from the target to avoid overflying the target area (reducing detection risk) while maintaining sensor coverage through oblique viewing angles.</li>
  <li><strong>Orbit altitude and radius trade-offs:</strong> Higher altitude increases sensor footprint and reduces noise signature but decreases image resolution. Larger orbit radius reduces detection risk but increases slant range to the target.</li>
</ul>

<h3>Racetrack Pattern</h3>
<p>The racetrack (or hippodrome) pattern consists of two parallel straight legs connected by semicircular turns:</p>
<ul>
  <li><strong>Application:</strong> Ideal for monitoring linear features (roads, borders, coastlines, pipelines) or providing coverage of an elongated area of interest.</li>
  <li><strong>Sensor coverage:</strong> The straight legs provide stable, consistent sensor coverage. Turns are used for sensor repositioning and crew coordination.</li>
  <li><strong>Wind compensation:</strong> Align the racetrack with the prevailing wind to optimise endurance. The UAS will fly faster ground speed downwind and slower upwind, which must be accounted for in coverage calculations.</li>
</ul>

<h3>Figure-8 Pattern</h3>
<p>The figure-8 pattern alternates between two orbit points, providing coverage of two separate targets or a larger area:</p>
<ul>
  <li><strong>Dual target coverage:</strong> Useful when two points of interest are within sensor range but too far apart for a single orbit to cover both. The figure-8 provides alternating coverage of each target.</li>
  <li><strong>Efficient transitions:</strong> The continuous flowing pattern minimises wasted time in turns compared to flying discrete orbits around each target with transit legs between them.</li>
  <li><strong>Planning considerations:</strong> The separation between the two focal points determines the figure-8 dimensions. Wider separation increases transit time between targets and reduces dwell time on each.</li>
</ul>

<h3>Grid Search (Area Search)</h3>
<p>Grid search patterns provide systematic coverage of a defined area:</p>
<ul>
  <li><strong>Parallel track (lawnmower):</strong> Systematic coverage by flying parallel tracks across the area. Track spacing is determined by sensor swath width and required overlap (typically 20-30% overlap for complete coverage).</li>
  <li><strong>Expanding square:</strong> Starting from a central point and spiralling outward. Used for search and rescue or investigating a specific datum point where the target's exact location is uncertain.</li>
  <li><strong>Sector search:</strong> Divides the area into sectors searched individually. Each sector is searched with a pattern appropriate to its size and the intelligence requirements.</li>
  <li><strong>Creeping line:</strong> Similar to parallel track but with deliberate progression in one direction, used when the target is expected to be moving or when search priority varies across the area.</li>
</ul>

<h3>Pattern Selection Criteria</h3>
<p>Selecting the right surveillance pattern depends on:</p>
<ul>
  <li>Nature of the target (point, linear, area)</li>
  <li>Required dwell time on target</li>
  <li>Sensor capabilities and viewing angle requirements</li>
  <li>Wind direction and speed</li>
  <li>Threat environment (need to minimise predictable patterns)</li>
  <li>Available flight time and fuel/battery constraints</li>
</ul>`,
        },
        {
          title: "Sensor Management and Imagery Interpretation",
          content: `
<h3>Sensor Mode Selection</h3>
<p>Effective ISR requires the payload operator to continuously optimise sensor settings for the current task and conditions:</p>
<ul>
  <li><strong>EO (daylight):</strong> Use electro-optical in good daylight conditions for the highest resolution imagery and colour information. Narrow field of view (NFOV) for identification, wide field of view (WFOV) for search and surveillance.</li>
  <li><strong>IR (thermal):</strong> Switch to infrared during night operations, low-light conditions, or when thermal contrast is the primary detection mechanism (vehicles, personnel, recently disturbed earth). MWIR (cooled) provides better sensitivity; LWIR (uncooled) is more common on smaller platforms.</li>
  <li><strong>IR polarity:</strong> "White-hot" (warm objects appear white) is standard. "Black-hot" (warm objects appear dark) can improve contrast in certain conditions, such as detecting personnel against warm backgrounds.</li>
  <li><strong>Gain and level:</strong> Adjust IR gain (sensitivity) and level (brightness baseline) to optimise contrast for the target type and thermal environment. Over-gained imagery becomes noisy; under-gained imagery loses detail.</li>
</ul>

<h3>Imagery Interpretation Principles</h3>
<p>Military imagery interpretation uses standardised techniques to extract maximum intelligence from sensor data. The eight key interpretation elements are:</p>
<ul>
  <li><strong>Size:</strong> Absolute and relative dimensions help identify object types. A vehicle's length and width distinguish between a sedan, truck, or armoured vehicle.</li>
  <li><strong>Shape:</strong> Distinctive outlines (turret profile, wing configuration, antenna pattern) enable identification. Shadow analysis can reveal vertical structure details.</li>
  <li><strong>Shadow:</strong> Shadows provide profile information, reveal concealed objects, and indicate time of day. Long shadows (low sun) provide more detail but can obscure nearby objects.</li>
  <li><strong>Tone/Colour:</strong> Variations in brightness or colour indicate material composition, age, moisture content, and use patterns. Recently disturbed earth appears different from undisturbed ground.</li>
  <li><strong>Texture:</strong> Surface roughness visible in imagery. Smooth surfaces (paved roads, rooftops) contrast with rough surfaces (vegetation, gravel). Changes in texture can indicate activity.</li>
  <li><strong>Pattern:</strong> Regular arrangements suggest man-made activity (vehicle parks, defensive positions, supply dumps). Disruption of natural patterns can indicate concealment efforts.</li>
  <li><strong>Association:</strong> Objects near other identified features gain context. An antenna mast near a command vehicle suggests a headquarters. Tyre tracks leading to a building suggest activity.</li>
  <li><strong>Movement:</strong> FMV provides the critical advantage of detecting movement — vehicles, personnel, equipment being emplaced or displaced. Movement patterns reveal routes, timing, and intent.</li>
</ul>

<h3>Geolocation and Mensuration</h3>
<ul>
  <li><strong>Target coordinates:</strong> Modern gimballed sensors provide automatic geolocation of the sensor crosshair using GPS, IMU, laser rangefinder, and digital terrain elevation data. Accuracy varies from 5-50 metres depending on equipment and conditions.</li>
  <li><strong>Mensuration:</strong> Precise measurement of target coordinates for weapons employment. Requires high-quality sensor data and is typically performed by trained targeters.</li>
</ul>`,
        },
        {
          title: "Real-Time Video Dissemination",
          content: `
<h3>ROVER and Tactical Video Receivers</h3>
<p>Real-time dissemination of UAS sensor feeds to ground forces is one of the most transformative capabilities in modern military operations:</p>
<ul>
  <li><strong>ROVER (Remotely Operated Video Enhanced Receiver):</strong> Originally a US programme, ROVER and its international equivalents allow ground commanders and forward observers to receive live video from UAS directly on portable terminals. This provides immediate situational awareness without waiting for intelligence processing.</li>
  <li><strong>Tablet-based systems:</strong> Modern tactical video receivers are tablet or smartphone-based, running software that decodes compressed video streams with overlay metadata (coordinates, heading, altitude). Examples include the TAK (Team Awareness Kit) ecosystem.</li>
  <li><strong>Latency considerations:</strong> Ground forces receiving live video expect minimal delay. LOS video links achieve under 200ms latency, while SATCOM-relayed video may have 1-2 seconds of delay. Users must be trained to account for latency when guiding ground movements based on live video.</li>
</ul>

<h3>Video Distribution Architecture</h3>
<ul>
  <li><strong>Point-to-point:</strong> Direct transmission from UAS to a single receiver. Simple but limits distribution to one consumer.</li>
  <li><strong>Hub-and-spoke:</strong> UAS transmits to a processing node (typically at the GCS or TOC) which then redistributes to multiple consumers via network. Adds latency but enables wider distribution and metadata injection.</li>
  <li><strong>Multicast:</strong> Network-based distribution where multiple consumers subscribe to a video stream. Used in NATO networks following STANAG 4609 for video metadata and streaming protocols.</li>
  <li><strong>Cloud/edge processing:</strong> Modern architectures use edge computing at the GCS to perform initial processing (compression, metadata injection, object detection) before distributing via military networks.</li>
</ul>

<h3>Metadata Standards</h3>
<p>Metadata is the contextual information embedded in or transmitted alongside the video stream:</p>
<ul>
  <li><strong>MISB (Motion Imagery Standards Board):</strong> Defines the standard metadata elements for motion imagery, including platform position, sensor pointing angles, target coordinates, time stamps, and security classification.</li>
  <li><strong>KLV (Key-Length-Value) encoding:</strong> The technical format for embedding metadata in video streams. Each metadata element has a unique key, a length field, and the value data.</li>
  <li><strong>Essential metadata:</strong> At minimum, UAS video should include platform position, sensor field of view, target geolocation, universal time code, and classification marking. This ensures that any consumer can understand the context of what they are viewing.</li>
</ul>

<h3>Security Considerations</h3>
<ul>
  <li><strong>Encryption:</strong> All classified video feeds must be encrypted in transit. Unencrypted video transmissions can be intercepted by adversaries — a vulnerability that has been exploited in multiple conflicts.</li>
  <li><strong>Classification management:</strong> Video feeds may contain classified information (sensor capabilities, friendly force positions, targeting data). Distribution must be controlled according to the classification level and need-to-know principles.</li>
  <li><strong>Network segmentation:</strong> Classified video should traverse classified networks only. Cross-domain solutions are required to move information between classification levels.</li>
</ul>`,
        },
        {
          title: "Integration with Ground Forces and C2 Systems",
          content: `
<h3>UAS Integration in Combined Arms Operations</h3>
<p>UAS are most effective when integrated into the broader combined arms team rather than operating in isolation. Effective integration requires doctrine, training, equipment, and communication interoperability.</p>

<h3>Supported Unit Integration</h3>
<ul>
  <li><strong>Liaison:</strong> A UAS liaison officer (LNO) embedded with the supported unit ensures the ground commander understands UAS capabilities and limitations, and that UAS collection priorities align with the commander's information requirements.</li>
  <li><strong>Direct support:</strong> UAS assigned in direct support of a ground unit respond primarily to that unit's collection requirements. The ground commander can redirect the UAS through the liaison or through direct communication with the UAS mission commander.</li>
  <li><strong>General support:</strong> UAS operating in general support serve multiple units and are tasked by a higher headquarters collection manager who prioritises between competing requirements.</li>
</ul>

<h3>Command and Control Integration</h3>
<ul>
  <li><strong>Common Operational Picture (COP):</strong> UAS feeds contribute to the COP — a shared display of friendly forces, known enemy positions, obstacles, and relevant terrain. UAS tracks and sensor coverage areas should be visible on the COP.</li>
  <li><strong>Battle Management Systems:</strong> Modern C2 systems (e.g., NATO JBMC2, national systems like TITAAN/ATLAS) can display UAS sensor data, plot target locations, and coordinate UAS tasking through digital messaging.</li>
  <li><strong>Joint fires integration:</strong> When UAS identify targets for engagement, the targeting process requires coordination with the fires cell. UAS can provide terminal guidance, battle damage assessment (BDA), and re-attack recommendations.</li>
</ul>

<h3>Tactical Communication</h3>
<ul>
  <li><strong>Talk-on:</strong> The UAS operator can "talk" a ground element onto a target using the live video feed. Standard format: "From your position, target is [direction], [distance], [description]." The ground element confirms visual identification before any action.</li>
  <li><strong>9-line / 5-line coordination:</strong> When coordinating fires or close air support, standard message formats ensure all required information (target location, friendly positions, desired effects, restrictions) is communicated accurately.</li>
  <li><strong>Frequency management:</strong> UAS operations require dedicated frequencies for C2 link, crew intercom, supported unit coordination, ATC communication, and ISR dissemination. Proper frequency management prevents interference and ensures timely communication.</li>
</ul>

<h3>Lessons from Recent Conflicts</h3>
<p>Recent conflicts have demonstrated several key lessons for UAS tactical employment:</p>
<ul>
  <li><strong>Distributed operations:</strong> Small tactical UAS at platoon and company level provide organic ISR that does not depend on higher headquarters allocation. This democratisation of ISR has fundamentally changed small-unit tactics.</li>
  <li><strong>Speed of exploitation:</strong> The value of intelligence degrades rapidly. The faster collected data is processed and disseminated, the greater its tactical impact. Reducing the sensor-to-shooter timeline is a key operational objective.</li>
  <li><strong>Electronic warfare impact:</strong> UAS operations in contested electromagnetic environments face significant challenges. Units must train for degraded or denied UAS availability and maintain alternative ISR capabilities.</li>
  <li><strong>Counter-UAS awareness:</strong> Every UAS operator should understand the counter-UAS threat and employ tactics to minimise vulnerability — varying patterns, altitudes, and timing; minimising electromagnetic emissions; and using terrain masking.</li>
</ul>`,
        },
      ],
      quiz: [
        {
          question:
            "What does the acronym ROVER stand for in the context of UAS video dissemination?",
          options: [
            "Rapid Operational Video and Electronic Relay",
            "Remotely Operated Video Enhanced Receiver",
            "Real-time Observation Video Encoding Relay",
            "Remote Operational Visual Enhancement Receiver",
          ],
          correctIndex: 1,
          explanation:
            "ROVER stands for Remotely Operated Video Enhanced Receiver. It is a portable terminal that allows ground forces to receive live video feeds directly from UAS, providing immediate situational awareness without waiting for intelligence processing.",
        },
        {
          question:
            "Which surveillance pattern is best suited for monitoring a linear feature such as a border or road?",
          options: [
            "Standard orbit",
            "Expanding square",
            "Racetrack pattern",
            "Grid search",
          ],
          correctIndex: 2,
          explanation:
            "The racetrack (hippodrome) pattern consists of two parallel straight legs connected by semicircular turns, making it ideal for monitoring linear features like roads, borders, coastlines, and pipelines.",
        },
        {
          question:
            "In the F3EA targeting methodology, what does the first 'F' stand for?",
          options: [
            "Fire",
            "Find",
            "Fix",
            "Finish",
          ],
          correctIndex: 1,
          explanation:
            "F3EA stands for Find, Fix, Finish, Exploit, Analyse. 'Find' is the first step — detecting and identifying the target of interest. UAS provide the persistent stare capability needed to then 'Fix' (precisely locate) the target.",
        },
        {
          question:
            "Which of the eight imagery interpretation elements is uniquely available through full-motion video (FMV) compared to still imagery?",
          options: [
            "Shadow",
            "Pattern",
            "Movement",
            "Texture",
          ],
          correctIndex: 2,
          explanation:
            "Movement is the interpretation element uniquely available through full-motion video. While still imagery can show the other seven elements (size, shape, shadow, tone/colour, texture, pattern, association), only FMV can directly detect and characterise movement of vehicles, personnel, and equipment.",
        },
        {
          question:
            "What is the primary risk of transmitting unencrypted UAS video feeds?",
          options: [
            "Increased bandwidth consumption",
            "Signal degradation over distance",
            "Adversary interception and exploitation of intelligence",
            "Incompatibility with STANAG 4609 receivers",
          ],
          correctIndex: 2,
          explanation:
            "Unencrypted UAS video feeds can be intercepted by adversaries using relatively simple equipment. This vulnerability has been exploited in multiple real-world conflicts, allowing adversaries to see what the UAS is observing and thereby gain tactical advantage.",
        },
      ],
    },

    // ── MODULE 6 ──────────────────────────────────────────────
    {
      id: "counter-uas",
      number: 6,
      title: "Counter-UAS & Force Protection",
      description:
        "Assess UAS threats, understand detection and tracking systems, evaluate kinetic and non-kinetic countermeasures, and integrate electronic warfare into force protection operations.",
      duration: "~2 hours",
      sections: [
        {
          title: "UAS Threat Categories and Risk Levels",
          content: `
<h3>The Evolving UAS Threat</h3>
<p>The proliferation of commercially available drone technology has created a new threat vector that affects military forces, critical infrastructure, and civilian security. Understanding and categorising UAS threats is the foundation of effective counter-UAS operations.</p>

<h3>Threat Categories by Size and Capability</h3>
<ul>
  <li><strong>Group 1 — Micro/Mini (under 9 kg):</strong> Small commercial drones (DJI, Autel) modified for hostile purposes. Typically carry small payloads (grenades, IEDs up to 1-2 kg). Range 5-15 km. Most common threat in current conflicts. Difficult to detect due to small radar cross-section and low acoustic signature. Low cost enables mass employment.</li>
  <li><strong>Group 2 — Small (9-25 kg):</strong> More capable commercial and custom-built platforms. Can carry larger payloads (3-5 kg), fly longer distances (20-50 km), and operate at higher altitudes. Used for ISR and targeted strikes.</li>
  <li><strong>Group 3 — Medium (25-600 kg):</strong> Purpose-built military or advanced commercial systems. Significant ISR capability, extended range (100+ km), and ability to carry substantial payloads. Examples include loitering munitions like the Shahed-series and Lancet.</li>
  <li><strong>Group 4/5 — Large (600+ kg):</strong> MALE and HALE class systems (MQ-9, Bayraktar TB2, Wing Loong). Full military capability including precision-guided munitions. Operate at medium to high altitudes with long endurance. Typically require runway infrastructure.</li>
</ul>

<h3>Threat Employment Modes</h3>
<ul>
  <li><strong>Reconnaissance:</strong> UAS conducting ISR against friendly positions, movements, supply routes, and command nodes. Even without kinetic effect, hostile ISR enables adversary targeting.</li>
  <li><strong>Direct attack:</strong> UAS carrying explosives for precision strike against personnel, vehicles, or equipment. Can range from modified commercial drones dropping grenades to purpose-built loitering munitions.</li>
  <li><strong>Swarm attack:</strong> Coordinated employment of multiple UAS to overwhelm defences through saturation. Even if individual UAS are low-capability, mass employment creates a complex multi-threat environment.</li>
  <li><strong>Electronic attack:</strong> UAS carrying jammers, spoofers, or electronic deception payloads to disrupt friendly communications, radar, or other electronic systems.</li>
  <li><strong>CBRN delivery:</strong> UAS used to disperse chemical, biological, radiological, or nuclear materials. While technically challenging, this represents a high-consequence threat requiring specific countermeasures.</li>
</ul>

<h3>Risk Assessment Framework</h3>
<p>C-UAS risk assessment considers three factors:</p>
<ul>
  <li><strong>Likelihood:</strong> Based on threat capability, demonstrated intent, and operational environment. High-conflict zones with documented drone use indicate high likelihood.</li>
  <li><strong>Vulnerability:</strong> The degree to which the defended asset is exposed to UAS attack. Factors include detection coverage, reaction time, countermeasure availability, and physical protection.</li>
  <li><strong>Consequence:</strong> The impact of a successful UAS attack. Critical assets (command posts, ammunition stores, fuel depots, air defence systems) have higher consequence ratings.</li>
</ul>`,
        },
        {
          title: "Detection: Radar, RF, Acoustic, Visual, EO/IR",
          content: `
<h3>Multi-Sensor Detection Approach</h3>
<p>No single detection technology is effective against all UAS threats in all conditions. Effective C-UAS detection requires a multi-layered, multi-sensor approach where different technologies complement each other's limitations.</p>

<h3>Radar</h3>
<ul>
  <li><strong>Capability:</strong> Radar provides range, bearing, altitude, and velocity data. Advanced radars can classify targets based on radar cross-section (RCS) and micro-Doppler signature (propeller rotation creates distinctive returns).</li>
  <li><strong>Challenges:</strong> Small UAS have very low RCS (0.001-0.01 square metres for typical commercial drones), comparable to birds. Ground clutter and multipath in urban environments degrade performance. Slow-moving or hovering UAS can fall below minimum detectable velocity thresholds.</li>
  <li><strong>Types:</strong> Pulse-Doppler radar (good for moving targets), FMCW radar (continuous wave, good for small targets at short range), phased array radar (electronic beam steering for rapid scan), and AESA radar (advanced electronic scanning).</li>
  <li><strong>Examples:</strong> Blighter A400 series (electronic scanning), RADA RPS-42 (multi-mission hemispheric radar), Robin Elvira (bird/drone classification radar).</li>
</ul>

<h3>Radio Frequency (RF) Detection</h3>
<ul>
  <li><strong>Capability:</strong> RF sensors detect the radio emissions from the UAS control link, video downlink, and telemetry. Can provide direction of arrival and, with multiple sensors, geolocation of both the drone and its operator.</li>
  <li><strong>Advantages:</strong> Passive detection (does not emit signals, difficult to detect). Can identify drone type based on protocol analysis. Can detect drones at ranges where radar cannot distinguish them from birds. Can locate the operator, enabling capture or neutralisation.</li>
  <li><strong>Limitations:</strong> Cannot detect autonomous drones that are not actively transmitting. Performance degrades in dense RF environments (urban areas, military communications). Range depends on drone transmit power and frequency.</li>
  <li><strong>Examples:</strong> DroneShield DroneGun/DroneSentry, Dedrone DroneTracker, Rohde & Schwarz ARDRONIS.</li>
</ul>

<h3>Acoustic Detection</h3>
<ul>
  <li><strong>Capability:</strong> Microphone arrays detect the distinctive sound signatures of drone motors and propellers. Advanced systems use machine learning to distinguish drone sounds from environmental noise.</li>
  <li><strong>Advantages:</strong> Works against autonomous drones (no RF emission needed). Effective in conditions that challenge radar (ground clutter, urban canyons). Low power consumption and small footprint.</li>
  <li><strong>Limitations:</strong> Short detection range (typically 200-500 metres). Highly susceptible to ambient noise (wind, traffic, machinery, combat). Performance degrades significantly in wind above 10-15 knots. Cannot provide precise altitude information.</li>
</ul>

<h3>Visual and EO/IR Detection</h3>
<ul>
  <li><strong>Capability:</strong> Cameras (visible and thermal) can detect, track, and identify UAS. AI-powered image recognition can automatically flag potential drone targets in the camera field of view.</li>
  <li><strong>Advantages:</strong> Provides positive visual identification (essential for rules of engagement). IR detection works at night. Can assess payload and intent. Unaffected by RF environment.</li>
  <li><strong>Limitations:</strong> Limited range for small targets. Affected by weather (fog, rain, heavy cloud). Requires cueing from other sensors or extremely wide field of view for initial detection. Processing-intensive for AI-based automatic detection.</li>
</ul>

<h3>Sensor Fusion</h3>
<p>The most effective C-UAS detection systems fuse data from multiple sensor types. RF detection provides initial cueing and direction, radar provides range and altitude, and EO/IR provides visual confirmation and identification. Sensor fusion algorithms create a unified track picture and reduce false alarms by requiring corroboration across sensor types.</p>`,
        },
        {
          title: "Soft Kill: Jamming, Spoofing, Cyber",
          content: `
<h3>Electronic Countermeasures (Soft Kill)</h3>
<p>Soft kill methods disable or redirect hostile UAS without physical destruction. These are often preferred in environments where kinetic engagement poses collateral damage risks or where legal/political constraints limit the use of force.</p>

<h3>RF Jamming</h3>
<ul>
  <li><strong>C2 link jamming:</strong> Transmitting interference on the frequencies used for drone command and control. When the C2 link is disrupted, most commercial drones will execute a fail-safe — typically hovering in place, returning to their launch point, or landing. This makes C2 jamming the most common first-response countermeasure.</li>
  <li><strong>Video link jamming:</strong> Disrupting the video downlink degrades the operator's ability to navigate and target, but does not directly control the aircraft. Effective for ISR denial without triggering a fail-safe response.</li>
  <li><strong>Frequency coverage:</strong> Effective jamming requires covering the relevant frequency bands. Common commercial drone frequencies include 2.4 GHz (WiFi/control), 5.8 GHz (video/control), and 900 MHz / 1.4 GHz for long-range systems. Military jammers must cover these bands and be programmable for emerging threats.</li>
  <li><strong>Directional vs. omnidirectional:</strong> Directional jammers concentrate energy toward the target for greater effect at range but require tracking. Omnidirectional jammers provide area coverage but at shorter effective range and with greater risk of friendly interference.</li>
  <li><strong>Collateral effects:</strong> Jamming is inherently indiscriminate on the targeted frequency band. GPS jamming affects all receivers in the area, including friendly forces and civilian systems. Careful electromagnetic spectrum management is essential.</li>
</ul>

<h3>GPS Spoofing</h3>
<ul>
  <li><strong>Mechanism:</strong> Transmitting false GPS signals to override the drone's navigation. The spoofed signals cause the drone to calculate an incorrect position, enabling the defender to redirect the drone away from the protected area or force it to land at a designated location.</li>
  <li><strong>Advantages:</strong> More controlled than jamming — the defender can potentially capture the drone intact. Does not trigger lost-link fail-safe procedures.</li>
  <li><strong>Challenges:</strong> Requires sophisticated equipment and precise signal generation. Less effective against drones with anti-spoofing capabilities (military-grade GNSS, multi-constellation cross-checking, INS backup). Legal restrictions apply in many jurisdictions.</li>
</ul>

<h3>Protocol Exploitation (Cyber)</h3>
<ul>
  <li><strong>Command injection:</strong> Exploiting known vulnerabilities in commercial drone protocols to inject commands. Some commercial drones have documented security weaknesses in their control protocols that allow third-party command injection.</li>
  <li><strong>Deauthentication:</strong> Forcing the drone to disconnect from its controller by exploiting WiFi or Bluetooth authentication vulnerabilities. Effective against consumer-grade drones with weak link security.</li>
  <li><strong>Limitations:</strong> Requires knowledge of the specific drone model and its communication protocols. Not effective against military-grade encrypted systems. May violate computer crime legislation in some jurisdictions.</li>
</ul>

<h3>Portable C-UAS Devices</h3>
<ul>
  <li><strong>Handheld jammers:</strong> Rifle-shaped directional jammers (e.g., DroneShield DroneGun) that allow an individual operator to disrupt a UAS at ranges of 1-2 km. Simple to operate, requiring only visual acquisition and pointing at the target.</li>
  <li><strong>Vehicle-mounted systems:</strong> Integrated jamming systems mounted on military vehicles provide mobile C-UAS protection for convoys and mobile units. Typically combine omnidirectional protection with directional engagement capability.</li>
  <li><strong>Fixed-site systems:</strong> Permanent C-UAS installations protecting critical infrastructure, air bases, and headquarters combine detection, classification, and multi-mode defeat capabilities.</li>
</ul>`,
        },
        {
          title: "Hard Kill: Kinetic Interceptors, Directed Energy, Nets",
          content: `
<h3>Kinetic Defeat Methods</h3>
<p>Hard kill methods physically destroy or capture the hostile UAS. These are used when soft kill is ineffective (autonomous drones, hardened systems) or when the threat requires immediate physical neutralisation.</p>

<h3>Kinetic Interceptors</h3>
<ul>
  <li><strong>Dedicated C-UAS missiles:</strong> Purpose-built small missiles designed to intercept UAS at ranges of 1-5+ km. Examples include MBDA Mistral (repurposed MANPADS), Rafael Iron Dome Interceptor (large UAS), and Raytheon Coyote (expendable drone interceptor). Cost is a critical concern — intercepting a $500 commercial drone with a $100,000+ missile is economically unsustainable.</li>
  <li><strong>Interceptor drones:</strong> UAS designed to intercept and physically collide with hostile drones. Some carry nets or tethered charges. Advantages include reusability, lower cost-per-engagement, and ability to operate in environments where other weapons are restricted.</li>
  <li><strong>Conventional guns:</strong> Existing air defence guns (20-40mm) can engage larger UAS but struggle against small, slow targets due to fire control system limitations designed for fast-moving manned aircraft. New programmable air-burst ammunition improves effectiveness.</li>
  <li><strong>Small arms:</strong> Rifles and shotguns provide a last-resort capability. Shotguns with drone-specific ammunition (wide dispersal patterns) are more effective than rifles against small UAS. Effective range is limited to under 100 metres for consistent hits.</li>
</ul>

<h3>Directed Energy Weapons (DEW)</h3>
<ul>
  <li><strong>High-energy lasers (HEL):</strong> Focused laser beams that heat critical components (motors, battery, structural elements) until failure. Advantages include speed-of-light engagement (no flight time), very low cost-per-shot (a few dollars in electricity), and deep magazine (limited only by power supply). Challenges include atmospheric attenuation (rain, fog, dust), thermal blooming, and the need to maintain beam on target for several seconds. Examples: Raytheon HELWS, DragonFire (UK), and MEHEL (US Army).</li>
  <li><strong>High-power microwave (HPM):</strong> Electromagnetic pulses that fry electronic circuits in the target UAS. Advantages include wide-area effect (can defeat swarms) and speed of engagement. Challenges include range limitations, power requirements, and risk of collateral damage to friendly electronics. Example: Raytheon PHASER.</li>
</ul>

<h3>Net-Based Systems</h3>
<ul>
  <li><strong>Net guns:</strong> Compressed-air or pyrotechnic devices that launch nets to entangle drone propellers. Range typically 20-100 metres. Examples: OpenWorks SkyWall (bazooka-style launcher). Advantage: physical capture of the drone intact for forensic analysis.</li>
  <li><strong>Net-carrying interceptor drones:</strong> Drones that deploy nets in flight to capture hostile UAS. Can be semi-autonomous with visual tracking. Examples: Fortem DroneHunter (tethered net drone).</li>
  <li><strong>Tethered nets / wire barriers:</strong> Physical barriers deployed around high-value targets. Effective against low-altitude approaches but limited coverage area.</li>
</ul>

<h3>Cost Exchange Ratio</h3>
<p>A critical challenge in C-UAS is the cost exchange ratio — the cost of the countermeasure relative to the cost of the attacking drone. Commercial drones used for attack may cost $500-5,000, while interceptor missiles cost $50,000-500,000. This asymmetry favours the attacker and drives investment in low-cost defeat methods (directed energy, electronic warfare, gun-based systems).</p>`,
        },
        {
          title: "Integrated Air Defence and C-UAS Architecture",
          content: `
<h3>Layered Defence Concept</h3>
<p>Effective C-UAS protection requires a layered, integrated approach that combines detection, classification, and multiple defeat mechanisms. No single system can address the full spectrum of UAS threats.</p>

<h3>Defence Layers</h3>
<ul>
  <li><strong>Outer layer (5-20+ km):</strong> Long-range radar detection and classification. Provides early warning and tracking data. Enables engagement with air defence systems (missiles, long-range electronic warfare) for larger UAS threats (Group 3-5).</li>
  <li><strong>Middle layer (1-5 km):</strong> Multi-sensor detection (radar, RF, EO/IR). Primary engagement zone for electronic warfare (jamming, spoofing) and kinetic interceptors. Sufficient time for classification and engagement decisions.</li>
  <li><strong>Inner layer (under 1 km):</strong> Close-in defence using directed energy weapons, gun systems, nets, and portable jammers. Last line of defence for threats that penetrate outer layers. Emphasis on rapid reaction and high probability of kill.</li>
  <li><strong>Point defence:</strong> Physical hardening of critical assets (overhead protection, camouflage nets, dispersal). Passive protection measures that reduce the effectiveness of any UAS that penetrates active defences.</li>
</ul>

<h3>Command and Control for C-UAS</h3>
<ul>
  <li><strong>Centralised detection, decentralised engagement:</strong> A central C-UAS operations centre fuses sensor data and maintains the overall air picture, while engagement authority is delegated to local commanders for rapid response. This balances situational awareness with reaction time.</li>
  <li><strong>Rules of engagement (ROE):</strong> C-UAS ROE must address identification requirements (how to confirm hostile intent), engagement authority levels, collateral damage considerations, and coordination with civilian aviation. ROE for urban operations are particularly complex.</li>
  <li><strong>Airspace coordination:</strong> C-UAS operations must be coordinated with friendly UAS operations and manned aviation. A common air picture showing both friendly and hostile UAS is essential to prevent fratricide.</li>
  <li><strong>Identification Friend or Foe (IFF):</strong> Systems for positively identifying friendly UAS are critical. Options include electronic IFF transponders, pre-programmed flight corridors for friendly UAS, and procedural controls (friendly UAS must squawk specific codes).</li>
</ul>

<h3>Integration with Existing Air Defence</h3>
<p>C-UAS capability should be integrated into existing air defence structures rather than treated as a separate function:</p>
<ul>
  <li><strong>Sensor integration:</strong> C-UAS sensors feed into existing air defence radar networks and air defence C2 systems. UAS tracks are displayed alongside manned aircraft tracks for a unified air picture.</li>
  <li><strong>Engagement coordination:</strong> C-UAS weapons (jammers, missiles, guns) are coordinated through the same air defence operations centre that manages SAM and fighter engagements. This prevents conflicting engagements and ensures efficient resource allocation.</li>
  <li><strong>Training:</strong> Air defence personnel require additional training on UAS threat characteristics, C-UAS equipment operation, and modified engagement procedures for the UAS threat.</li>
</ul>

<h3>Emerging Challenges</h3>
<ul>
  <li><strong>Swarm defence:</strong> Countering mass UAS attacks (tens to hundreds of simultaneous drones) requires automated engagement systems that can process multiple targets faster than human operators. AI-driven target prioritisation and autonomous engagement authorisation are active areas of development.</li>
  <li><strong>Urban environment:</strong> C-UAS in built-up areas faces unique challenges — radar clutter from buildings, RF interference, restricted fields of fire, risk of collateral damage, and the presence of friendly commercial drones.</li>
  <li><strong>Regulatory framework:</strong> The legal framework for C-UAS in peacetime (counter-terrorism, critical infrastructure protection) varies significantly between countries. Electronic warfare and kinetic engagement against UAS over populated areas raises complex legal questions.</li>
  <li><strong>Technology escalation:</strong> As C-UAS capabilities improve, UAS threats adapt — autonomous navigation (defeating jamming), hardened electronics (defeating EW), reduced signatures (defeating detection), and cooperative tactics (defeating single-target engagement systems). This drives a continuous cycle of measure and counter-measure development.</li>
</ul>`,
        },
      ],
      quiz: [
        {
          question:
            "Which UAS threat group represents the most commonly encountered threat in current conflicts?",
          options: [
            "Group 3 — Medium (25-600 kg)",
            "Group 1 — Micro/Mini (under 9 kg)",
            "Group 4 — Large (600-1300 kg)",
            "Group 2 — Small (9-25 kg)",
          ],
          correctIndex: 1,
          explanation:
            "Group 1 (Micro/Mini) UAS under 9 kg, typically modified commercial drones, represent the most commonly encountered threat in current conflicts. Their low cost, wide availability, and ease of modification make them the weapon of choice for a range of actors.",
        },
        {
          question:
            "What is the primary advantage of RF detection over radar for counter-UAS?",
          options: [
            "Longer detection range",
            "Ability to detect autonomous drones not transmitting",
            "Passive operation and ability to locate the drone operator",
            "Better performance in heavy rain",
          ],
          correctIndex: 2,
          explanation:
            "RF detection is passive (it listens rather than transmits, making it difficult to detect) and can locate both the drone and its operator by analysing the radio emissions. Locating the operator enables capture or neutralisation at the source. However, RF detection cannot detect autonomous drones that are not actively transmitting.",
        },
        {
          question:
            "What is the primary challenge with the 'cost exchange ratio' in counter-UAS?",
          options: [
            "Interceptor missiles are too slow to catch drones",
            "Countermeasures are orders of magnitude more expensive than attacking drones",
            "Electronic warfare systems are too complex to operate",
            "Detection systems cannot distinguish drones from birds",
          ],
          correctIndex: 1,
          explanation:
            "The cost exchange ratio challenge is that defending against cheap drones ($500-5,000) with expensive interceptor missiles ($50,000-500,000) is economically unsustainable. This asymmetry favours the attacker and drives investment in low-cost defeat methods such as directed energy weapons and electronic warfare.",
        },
        {
          question:
            "In a layered C-UAS defence architecture, what is the primary engagement method in the middle layer (1-5 km)?",
          options: [
            "Small arms and shotguns",
            "Electronic warfare (jamming and spoofing)",
            "Physical barriers and nets",
            "High-energy laser weapons",
          ],
          correctIndex: 1,
          explanation:
            "The middle layer (1-5 km) is the primary engagement zone for electronic warfare methods including jamming and spoofing, as well as kinetic interceptors. This range provides sufficient time for classification and engagement decisions while keeping the threat at a safe distance from the defended asset.",
        },
        {
          question:
            "Which directed energy technology has the advantage of being able to defeat drone swarms through wide-area effect?",
          options: [
            "High-energy laser (HEL)",
            "High-power microwave (HPM)",
            "Low-energy laser designator",
            "Infrared countermeasure (IRCM)",
          ],
          correctIndex: 1,
          explanation:
            "High-Power Microwave (HPM) weapons emit electromagnetic pulses that can fry electronic circuits across a wide area, giving them the ability to defeat swarms of drones simultaneously. In contrast, lasers must engage targets one at a time, making them less effective against mass attacks.",
        },
      ],
    },
  ],
};

export const courses: Record<string, Course> = {
  "military-drone-ops": militaryDroneOpsCourse,
};
