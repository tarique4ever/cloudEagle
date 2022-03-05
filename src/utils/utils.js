export const vendor = [
  {
      vendorName: 'Box',
      ofApplication: '2Apps',
      totalSpend: 50000,
      activeContract: 'Inactive',
      source: 'Quick_Books',
      totalSpendLast: 2176,
      contractValue: 5,
      action: '-'
  },
  {
      vendorName: 'Applestore',
      ofApplication: '0Apps',
      totalSpend: 13000,
      activeContract: 'Active',
      source: 'Expencify',
      totalSpendLast: 1076,
      contractValue: 2,
      action: '-'
  },
  {
      vendorName: 'Verizon',
      ofApplication: '3Apps',
      totalSpend: 50000,
      activeContract: 'Inactive',
      source: 'Excel',
      totalSpendLast: 76,
      contractValue: 12,
      action: '-'
  },
  {
      vendorName: 'CloudEagle',
      ofApplication: '5Apps',
      totalSpend: 500,
      activeContract: 'Active',
      source: 'Quick_Books',
      totalSpendLast: 2176,
      contractValue: 5,
      action: '-'
  },
  {
      vendorName: 'Newvendor',
      ofApplication: '0Apps',
      totalSpend: 10000,
      activeContract: 'Inactive',
      source: 'Excel',
      totalSpendLast: 76,
      contractValue: 1,
      action: '-'
  },
  {
      vendorName: 'Verizon Wireless',
      ofApplication: '8Apps',
      totalSpend: 3000,
      activeContract: 'Active',
      source: 'Quick_Books',
      totalSpendLast: 176,
      contractValue: 5,
      action: '-'
  },
  {
      vendorName: 'Verizon',
      ofApplication: '3Apps',
      totalSpend: 50000,
      activeContract: 'Inactive',
      source: 'Excel',
      totalSpendLast: 76,
      contractValue: 12,
      action: '-'
  },
  {
      vendorName: 'CloudEagle',
      ofApplication: '5Apps',
      totalSpend: 5000,
      activeContract: 'Active',
      source: 'Quick_Books',
      totalSpendLast: 2176,
      contractValue: 5,
      action: '-'
  },
  {
      vendorName: 'Box',
      ofApplication: '2Apps',
      totalSpend: 50000,
      activeContract: 'Inactive',
      source: 'Quick_Books',
      totalSpendLast: 2176,
      contractValue: 5,
      action: '-'
  },
]


export const application = [
  {
      applicationName: 'QuickBooks',
      vendor: 'Box',
      category: 'email tracking software',
      licenseBought: '-',
      appCoveredInContract: 'No',
      billingFrequency: '-',
      paymentTerms: '-',
      action: '-'
  },
  {
      applicationName: 'Zoom',
      vendor: 'Applestore',
      category: 'email tracking software',
      licenseBought: '-',
      appCoveredInContract: 'No',
      billingFrequency: '-',
      paymentTerms: '-',
      action: '-'
  },
  {
      applicationName: 'Lucidpred',
      vendor: 'Verizon',
      category: 'email tracking software',
      licenseBought: '-',
      appCoveredInContract: 'No',
      billingFrequency: '-',
      paymentTerms: '-',
      action: '-'
  },
  {
      applicationName: 'Cloudeagle',
      vendor: 'Verizon',
      category: 'email tracking software',
      licenseBought: '-',
      appCoveredInContract: 'No',
      billingFrequency: '-',
      paymentTerms: '-',
      action: '-'
  },
  {
      applicationName: 'Calendly',
      vendor: 'CloudEagle',
      category: 'email tracking software',
      licenseBought: '-',
      appCoveredInContract: 'No',
      billingFrequency: '-',
      paymentTerms: '-',
      action: '-'
  },
  {
      applicationName: 'Hubspot',
      vendor: 'Newvendor',
      category: 'email tracking software',
      licenseBought: '-',
      appCoveredInContract: 'No',
      billingFrequency: '-',
      paymentTerms: '-',
      action: '-'
  },
  {
      applicationName: 'Ebay',
      vendor: 'Verizon Wireless',
      category: 'email tracking software',
      licenseBought: '-',
      appCoveredInContract: 'No',
      billingFrequency: '-',
      paymentTerms: '-',
      action: '-'
  },
  {
      applicationName: 'Cloud Eagle',
      vendor: 'Verizon Wireless',
      category: 'email tracking software',
      licenseBought: '-',
      appCoveredInContract: 'No',
      billingFrequency: '-',
      paymentTerms: '-',
      action: '-'
  },
]

export const headCells = [
  {
    id: 'vendorName',
    numeric: false,
    disablePadding: true,
    label: 'Vendor Name',
  },
  {
    id: 'ofApplication',
    numeric: true,
    disablePadding: true,
    label: 'Off Application',
  },
  {
    id: 'totalSpend',
    numeric: true,
    disablePadding: true,
    label: 'Total Spend(YTD)',
  },
  {
    id: 'activeContract',
    numeric: true,
    disablePadding: true,
    label: 'Active Contract',
  },
  {
    id: 'source',
    numeric: true,
    disablePadding: true,
    label: 'Source',
  },
  {
      id: 'totalSpendLast',
      numeric: true,
      disablePadding: true,
      label: 'Total Spend(Last 12Month)',
    },
    {
      id: 'contractValue',
      numeric: true,
      disablePadding: true,
      label: 'Contract Value',
    },
    {
      id: 'action',
      numeric: true,
      disablePadding: true,
      label: 'Action',
    },
];


export const headCellsApp = [
  {
    id: 'applicationName',
    numeric: false,
    disablePadding: true,
    label: 'Application Name',
  },
  {
    id: 'vendor',
    numeric: true,
    disablePadding: true,
    label: 'Vendor',
  },
  {
    id: 'category',
    numeric: true,
    disablePadding: true,
    label: 'Category',
  },
  {
    id: 'licenseBought',
    numeric: true,
    disablePadding: true,
    label: 'Licence Bought',
  },
  {
    id: 'appCoveredInContract',
    numeric: true,
    disablePadding: true,
    label: 'App Covered In Contract',
  },
  {
      id: 'billingFrequency',
      numeric: true,
      disablePadding: true,
      label: 'Billing Frequency',
    },
    {
      id: 'paymentTerms',
      numeric: true,
      disablePadding: true,
      label: 'Payment Terms',
    },
];