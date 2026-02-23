export const bands: Record<string, {
  title: string;
  entry_salary: number;
  top_salary: number;
  pay_points: number[];
  typical_roles: string[];
  next_band: string | null;
  avg_years_to_progress: number | null;
}> = {
  "2": {
    title: "Band 2",
    entry_salary: 23615,
    top_salary: 23615,
    pay_points: [23615],
    typical_roles: ["Healthcare assistant", "Clinical support worker"],
    next_band: "3",
    avg_years_to_progress: 2
  },
  "3": {
    title: "Band 3",
    entry_salary: 24937,
    top_salary: 26598,
    pay_points: [24937, 25596, 26598],
    typical_roles: ["Senior healthcare assistant", "Nursing assistant"],
    next_band: "4",
    avg_years_to_progress: 2
  },
  "4": {
    title: "Band 4",
    entry_salary: 27485,
    top_salary: 30162,
    pay_points: [27485, 28672, 30162],
    typical_roles: ["Nursing associate", "Assistant practitioner"],
    next_band: "5",
    avg_years_to_progress: 3
  },
  "5": {
    title: "Band 5",
    entry_salary: 31049,
    top_salary: 37796,
    pay_points: [31049, 33706, 37796],
    typical_roles: ["Newly qualified nurse", "Staff nurse"],
    next_band: "6",
    avg_years_to_progress: 3
  },
  "6": {
    title: "Band 6",
    entry_salary: 38682,
    top_salary: 46580,
    pay_points: [38682, 42060, 46580],
    typical_roles: ["Senior nurse", "Specialist nurse", "Deputy ward manager"],
    next_band: "7",
    avg_years_to_progress: 4
  },
  "7": {
    title: "Band 7",
    entry_salary: 47810,
    top_salary: 54710,
    pay_points: [47810, 50952, 54710],
    typical_roles: ["Ward manager", "Advanced nurse practitioner", "Clinical specialist"],
    next_band: "8a",
    avg_years_to_progress: 5
  },
  "8a": {
    title: "Band 8a",
    entry_salary: 55690,
    top_salary: 62682,
    pay_points: [55690, 59490, 62682],
    typical_roles: ["Modern matron", "Nurse consultant", "Head of nursing"],
    next_band: "8b",
    avg_years_to_progress: 6
  },
  "8b": {
    title: "Band 8b",
    entry_salary: 65095,
    top_salary: 75329,
    pay_points: [65095, 70317, 75329],
    typical_roles: ["Deputy director of nursing", "Senior nurse consultant"],
    next_band: "9",
    avg_years_to_progress: 5
  },
  "9": {
    title: "Band 9",
    entry_salary: 109179,
    top_salary: 125637,
    pay_points: [109179, 117518, 125637],
    typical_roles: ["Director of nursing", "Chief nurse"],
    next_band: null,
    avg_years_to_progress: null
  }
};

export const londonWeighting = {
  inner: { label: "Inner London", percent: 0.20, min: 5609, max: 8466 },
  outer: { label: "Outer London", percent: 0.15, min: 4714, max: 5941 },
  fringe: { label: "London Fringe", percent: 0.05, min: 1303, max: 2198 },
  none: { label: "No weighting", percent: 0, min: 0, max: 0 }
};

export type BandKey = keyof typeof bands;
