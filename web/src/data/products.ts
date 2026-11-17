export type ProductCategory =
  | 'medicines'
  | 'health-wellness'
  | 'otc'
  | 'cosmetics'
  | 'nutraceuticals'
  | 'protein-supplements'
  | 'ayurvedic'
  | 'surgical'

export type Product = {
  id: string
  name: string
  strength?: string
  form: string
  category: ProductCategory
  use: string
  source: string
}

export const categoryMeta: Record<
  ProductCategory,
  { label: string; description: string }
> = {
  medicines: {
    label: 'Medicines',
    description:
      'Prescription generics for diabetes, heart care, infections, pain relief, and more — quality-assured and affordable.',
  },
  'health-wellness': {
    label: 'Health & Wellness',
    description: 'Daily wellness support including multivitamins, immunity boosters, and lifestyle care products.',
  },
  otc: {
    label: 'OTC',
    description: 'Over-the-counter relief for fever, cold, allergy, acidity, and everyday ailments.',
  },
  cosmetics: {
    label: 'Cosmetics',
    description: 'Personal care for face, skin, hair, bath, baby, and men’s care — including Khadi India range.',
  },
  nutraceuticals: {
    label: 'Nutraceuticals',
    description: 'Nutritional supplements that support energy, immunity, digestion, and overall health.',
  },
  'protein-supplements': {
    label: 'Protein Supplements',
    description: 'Protein powders and fitness nutrition for active lifestyles and recovery support.',
  },
  ayurvedic: {
    label: 'Ayurvedic',
    description: 'Traditional Ayurvedic products such as Brahmi, Amla, Aloe Vera, Giloy, and more.',
  },
  surgical: {
    label: 'Surgical',
    description: 'Gloves, syringes, thermometers, wound care, and other essential surgical / first-aid items.',
  },
}

/** Curated from Davaindia / 1mg public listings + store category range. Prices vary in store. */
export const products: Product[] = [
  // Medicines — chronic / Rx generics
  { id: 'metformin-500', name: 'Metformin', strength: '500mg', form: 'Tablet', category: 'medicines', use: 'Type 2 diabetes', source: 'https://www.davaindia.com/products/metformin-ip-500mg-tablet-30' },
  { id: 'metformin-1000-sr', name: 'Metformin SR', strength: '1000mg', form: 'Tablet', category: 'medicines', use: 'Type 2 diabetes', source: 'https://www.davaindia.com/products/metformin-hcl-1000mg-sr' },
  { id: 'glimepiride-2', name: 'Glimepiride', strength: '2mg', form: 'Tablet', category: 'medicines', use: 'Type 2 diabetes', source: 'https://www.1mg.com/marketer/davaindia-generic-pharmacy-81732' },
  { id: 'teneligliptin-20', name: 'Teneligliptin', strength: '20mg', form: 'Tablet', category: 'medicines', use: 'Type 2 diabetes', source: 'https://www.1mg.com/marketer/davaindia-generic-pharmacy-81732' },
  { id: 'davapride-3mf', name: 'Davapride 3 MF SR', strength: 'Combination', form: 'Tablet', category: 'medicines', use: 'Diabetes management', source: 'https://www.davaindia.com/products/Diabetesmedications' },
  { id: 'amlodipine-5', name: 'Amlodipine', strength: '5mg', form: 'Tablet', category: 'medicines', use: 'Blood pressure / heart', source: 'https://www.1mg.com/marketer/davaindia-generic-pharmacy-81732' },
  { id: 'amlodipine-10', name: 'Amlodipine', strength: '10mg', form: 'Tablet', category: 'medicines', use: 'Blood pressure / heart', source: 'https://www.1mg.com/marketer/davaindia-generic-pharmacy-81732' },
  { id: 'telmisartan-20', name: 'Telmisartan', strength: '20mg', form: 'Tablet', category: 'medicines', use: 'Blood pressure', source: 'https://www.1mg.com/marketer/davaindia-generic-pharmacy-81732' },
  { id: 'atorvastatin-10', name: 'Atorvastatin', strength: '10mg', form: 'Tablet', category: 'medicines', use: 'Cholesterol / heart', source: 'https://www.1mg.com/marketer/davaindia-generic-pharmacy-81732' },
  { id: 'clopidogrel-75', name: 'Clopidogrel', strength: '75mg', form: 'Tablet', category: 'medicines', use: 'Heart care', source: 'https://www.1mg.com/marketer/davaindia-generic-pharmacy-81732' },
  { id: 'ramipril-2-5', name: 'Ramipril', strength: '2.5mg', form: 'Tablet', category: 'medicines', use: 'Blood pressure / heart', source: 'https://www.1mg.com/marketer/davaindia-generic-pharmacy-81732' },
  { id: 'enalapril-5', name: 'Enalapril', strength: '5mg', form: 'Tablet', category: 'medicines', use: 'Blood pressure', source: 'https://www.1mg.com/marketer/davaindia-generic-pharmacy-81732' },
  { id: 'propranolol-20', name: 'Propranolol', strength: '20mg', form: 'Tablet', category: 'medicines', use: 'Heart / BP support', source: 'https://www.1mg.com/marketer/davaindia-generic-pharmacy-81732' },
  { id: 'amoxycillin-500', name: 'Amoxycillin', strength: '500mg', form: 'Capsule', category: 'medicines', use: 'Antibiotic', source: 'https://www.1mg.com/marketer/davaindia-generic-pharmacy-81732' },
  { id: 'amox-clav', name: 'Amoxycillin + Clavulanic Acid', strength: '500mg/125mg', form: 'Tablet', category: 'medicines', use: 'Antibiotic', source: 'https://www.1mg.com/marketer/davaindia-generic-pharmacy-81732' },
  { id: 'azithromycin-500', name: 'Azithromycin', strength: '500mg', form: 'Tablet', category: 'medicines', use: 'Antibiotic', source: 'https://www.1mg.com/marketer/davaindia-generic-pharmacy-81732' },
  { id: 'cefuroxime-500', name: 'Cefuroxime', strength: '500mg', form: 'Tablet', category: 'medicines', use: 'Antibiotic', source: 'https://www.1mg.com/marketer/davaindia-generic-pharmacy-81732' },
  { id: 'levofloxacin-500', name: 'Levofloxacin', strength: '500mg', form: 'Tablet', category: 'medicines', use: 'Antibiotic', source: 'https://www.1mg.com/marketer/davaindia-generic-pharmacy-81732' },
  { id: 'fluconazole-150', name: 'Fluconazole', strength: '150mg', form: 'Tablet', category: 'medicines', use: 'Antifungal', source: 'https://www.1mg.com/marketer/davaindia-generic-pharmacy-81732' },
  { id: 'ondansetron-4', name: 'Ondansetron', strength: '4mg', form: 'Tablet', category: 'medicines', use: 'Nausea / vomiting', source: 'https://www.1mg.com/marketer/davaindia-generic-pharmacy-81732' },
  { id: 'escitalopram-5', name: 'Escitalopram Oxalate', strength: '5mg', form: 'Tablet', category: 'medicines', use: 'Mental health', source: 'https://www.1mg.com/marketer/davaindia-generic-pharmacy-81732' },
  { id: 'amitriptyline-10', name: 'Amitriptyline', strength: '10mg', form: 'Tablet', category: 'medicines', use: 'Pain / mental health', source: 'https://www.1mg.com/marketer/davaindia-generic-pharmacy-81732' },
  { id: 'levetiracetam-500', name: 'Levetiracetam', strength: '500mg', form: 'Tablet', category: 'medicines', use: 'Neurology', source: 'https://www.1mg.com/marketer/davaindia-generic-pharmacy-81732' },
  { id: 'hydroxychloroquine-200', name: 'Hydroxychloroquine', strength: '200mg', form: 'Tablet', category: 'medicines', use: 'Autoimmune / malaria', source: 'https://www.1mg.com/marketer/davaindia-generic-pharmacy-81732' },

  // OTC
  { id: 'paracetamol-500', name: 'Paracetamol', strength: '500mg', form: 'Tablet', category: 'otc', use: 'Fever / pain relief', source: 'https://www.1mg.com/marketer/davaindia-generic-pharmacy-81732' },
  { id: 'paracetamol-650', name: 'Paracetamol', strength: '650mg', form: 'Tablet', category: 'otc', use: 'Fever / pain relief', source: 'https://www.1mg.com/marketer/davaindia-generic-pharmacy-81732' },
  { id: 'davaryl-af', name: 'Davaryl-AF Drops', strength: '15ml', form: 'Drops', category: 'otc', use: 'Cold & allergy relief', source: 'https://www.davaindia.com/products/chlorpheniraminemaleatephenylephrine' },
  { id: 'antacid', name: 'Antacid', strength: 'Standard pack', form: 'Tablet', category: 'otc', use: 'Acidity / gas', source: 'store-flyer' },
  { id: 'anti-cold', name: 'Anti-Cold / Allergy', strength: 'Standard pack', form: 'Tablet', category: 'otc', use: 'Cold, allergy, flu', source: 'store-flyer' },
  { id: 'pain-relief', name: 'Pain Relief Medicine', strength: 'Standard pack', form: 'Tablet', category: 'otc', use: 'Body pain / headache', source: 'store-flyer' },
  { id: 'bisacodyl-5', name: 'Bisacodyl', strength: '5mg', form: 'Tablet', category: 'otc', use: 'Constipation relief', source: 'https://www.1mg.com/marketer/davaindia-generic-pharmacy-81732' },
  { id: 'lactulose', name: 'Lactulose', strength: '10gm', form: 'Oral solution', category: 'otc', use: 'Constipation relief', source: 'https://www.1mg.com/marketer/davaindia-generic-pharmacy-81732' },

  // Health & wellness / nutraceuticals / proteins
  { id: 'multivitamin', name: 'Multivitamin', strength: '15 Tab pack', form: 'Tablet', category: 'health-wellness', use: 'Daily nutrition', source: 'store-flyer' },
  { id: 'immunity-booster', name: 'Immunity Booster', strength: 'Pack', form: 'Supplement', category: 'health-wellness', use: 'Immunity support', source: 'store-faq' },
  { id: 'omega-support', name: 'Omega / Heart Wellness', strength: 'Pack', form: 'Softgel', category: 'nutraceuticals', use: 'Heart & wellness', source: 'store-faq' },
  { id: 'calcium-d3', name: 'Calcium + Vitamin D3', strength: 'Pack', form: 'Tablet', category: 'nutraceuticals', use: 'Bone health', source: 'store-faq' },
  { id: 'protein-powder', name: 'Protein Powder', strength: 'Jar', form: 'Powder', category: 'protein-supplements', use: 'Fitness / recovery', source: 'store-faq' },
  { id: 'whey-blend', name: 'Gym Protein Blend', strength: 'Jar', form: 'Powder', category: 'protein-supplements', use: 'Muscle nutrition', source: 'store-faq' },

  // Ayurvedic
  { id: 'brahmi', name: 'Brahmi', strength: 'Bottle', form: 'Capsule / syrup', category: 'ayurvedic', use: 'Memory & calm', source: 'store-banner' },
  { id: 'amla', name: 'Amla', strength: 'Bottle', form: 'Capsule / juice', category: 'ayurvedic', use: 'Immunity & vitamin C', source: 'store-banner' },
  { id: 'aloe', name: 'Aloe Vera', strength: 'Bottle', form: 'Juice / gel', category: 'ayurvedic', use: 'Digestion & skin', source: 'store-banner' },
  { id: 'giloy', name: 'Giloy', strength: 'Bottle', form: 'Tablet / juice', category: 'ayurvedic', use: 'Immunity', source: 'store-banner' },

  // Cosmetics / personal care
  { id: 'face-care', name: 'Face Care Range', strength: 'Assorted', form: 'Cream / wash', category: 'cosmetics', use: 'Face cleansing & care', source: 'store-banner' },
  { id: 'skin-care', name: 'Skin Care Range', strength: 'Assorted', form: 'Lotion / cream', category: 'cosmetics', use: 'Daily skin care', source: 'store-banner' },
  { id: 'hair-care', name: 'Hair Care Range', strength: 'Assorted', form: 'Shampoo / oil', category: 'cosmetics', use: 'Hair & scalp care', source: 'store-banner' },
  { id: 'bath-care', name: 'Bath Care Range', strength: 'Assorted', form: 'Soap / wash', category: 'cosmetics', use: 'Bath essentials', source: 'store-banner' },
  { id: 'baby-care', name: 'Baby Care Range', strength: 'Assorted', form: 'Lotion / oil', category: 'cosmetics', use: 'Baby skin care', source: 'store-banner' },
  { id: 'mens-care', name: "Men's Care Range", strength: 'Assorted', form: 'Wash / cream', category: 'cosmetics', use: "Men's grooming", source: 'store-banner' },
  { id: 'khadi-green-tea', name: 'Khadi India Green Tea Range', strength: 'Assorted', form: 'Personal care', category: 'cosmetics', use: 'Exclusive Khadi India products', source: 'store-banner' },
  { id: 'charcoal-care', name: 'Activated Charcoal Care', strength: 'Assorted', form: 'Face wash / scrub', category: 'cosmetics', use: 'Deep pore cleansing', source: 'store-banner' },

  // Surgical
  { id: 'gloves', name: 'Medical Gloves', strength: 'Box', form: 'Disposable', category: 'surgical', use: 'Hygiene / first aid', source: 'store-faq' },
  { id: 'syringes', name: 'Syringes', strength: 'Pack', form: 'Disposable', category: 'surgical', use: 'Medical use', source: 'store-faq' },
  { id: 'thermometer', name: 'Digital Thermometer', strength: 'Unit', form: 'Device', category: 'surgical', use: 'Fever check', source: 'store-faq' },
  { id: 'wound-care', name: 'Wound Care Kit', strength: 'Pack', form: 'Dressing', category: 'surgical', use: 'Cuts & wounds', source: 'store-faq' },
]

export function getProductsByCategory(category?: string | null) {
  if (!category || category === 'all') return products
  return products.filter((p) => p.category === category)
}

export function isProductCategory(value: string): value is ProductCategory {
  return value in categoryMeta
}
