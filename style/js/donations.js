// (greatly inspired by https://www.benkuhn.net/ea/)

// organizations
var ACE = {
  name: 'Animal Charity Evaluators',
  desc: 'Charity evaluator for animal-focused charities',
  href: 'https://animalcharityevaluators.org/'
};
var ACETC = {
  name: 'Animal Charity Evaluators Top Charities Fund',
  desc: 'Fund for ACE to redistribute to its top charities',
  href: 'https://animalcharityevaluators.org/'
};
var ACEEAA = {
  name: 'Animal Charity Evaluators Effective Animal Advocacy Fund',
  desc: 'Fund for ACE to redistribute to promising charities, where money is most needed',
  href: 'https://animalcharityevaluators.org/'
};
var AMF = {
  name: 'Against Malaria Foundation',
  desc: 'Distributes insecticide-treated bed nets with assistance from local distributors',
  href: 'https://www.againstmalaria.com/'
};
var CEA = {
  name: 'Centre for Effective Altruism',
  desc: 'Grows and maintains the Effective Altruism movement',
  href: 'https://www.centreforeffectivealtruism.org/'
};
var CEAAW = {
  name: 'Centre for Effective Altruism - Animal Welfare Fund',
  desc: 'Fund for CEA to redistribute to organizations working on animal welfare with high expected impacts',
  href: 'https://app.effectivealtruism.org/funds/animal-welfare'
};
var CIWF = {
  name: 'Compassion In World Farming USA',
  desc: 'Campaigning and lobbying animal welfare organisation',
  href: 'https://www.ciwf.com/'
};
var DTW = {
  name: 'Deworm the World',
  desc: 'Supports school-based deworming initiatives worldwide',
  href: 'https://www.evidenceaction.org/dewormtheworld/'
};
var GD = {
  name: 'GiveDirectly',
  desc: 'Funds one-time unconditional direct cash transfers to low-income individuals in Sub-Saharan Africa',
  href: 'https://www.givedirectly.org/'
};
var GWR = {
  name: 'GiveWell top charities',
  desc: 'Fund for GiveWell to redistribute to its top charities',
  href: 'http://www.givewell.org/'
};
var MC = {
  name: 'Malaria Consortium',
  desc: 'Funds seasonal malaria chemoprevention interventions in Africa and Asia',
  href: 'https://www.malariaconsortium.org/'
};
var MFA = {
  name: 'Mercy For Animals',
  desc: 'Funds various farmed animal advocacy programs',
  href: 'https://mercyforanimals.org/'
};
var SCI = {
  name: 'Schistosomiasis Control Initiative',
  desc: 'Funds deworming programs in sub-Saharan Africa',
  href: 'http://www3.imperial.ac.uk/schisto'
};
var SI = {
  name: 'Sentience Institute',
  desc: 'Think tank dedicated to expanding humanity\'s moral circle (largely via animal advocacy)',
  href: 'https://www.sentienceinstitute.org/'
}

// data
var donations = [
  {
    date: new Date(2019, 1, 4),
    amount: 2000.0,
    organization:  SI
  },
  {
    date: new Date(2019, 4, 18),
    amount: 15.0,
    organization: MC,
    notes: 'Birthday donation'
  },
  {
    date: new Date(2018, 2, 22),
    amount: 60.0,
    organization: CIWF,
    notes: 'Birthday donation'
  },
  {
    date: new Date(2018, 9, 21),
    amount: 20.0,
    organization: GD,
    notes: 'Birthday donation'
  },
  {
    date: new Date(2018, 10, 2),
    amount: 20.0,
    organization: DTW,
    notes: 'Birthday donation'
  },
  {
    date: new Date(2018, 10, 12),
    amount: 24.0,
    organization: AMF,
    notes: 'Birthday donation'
  },
  {
    date: new Date(2018, 11, 27),
    amount: 20.0,
    organization: CEA,
    notes: 'Practice donations for Giving Tuesday donation drive'
  },
  {
    date: new Date(2018, 11, 27),
    amount: 2499.0,
    organization: CEAAW,
    notes: 'Part of Giving Tuesday donation drive'
  },
  {
    date: new Date(2018, 11, 27),
    amount: 2499.0,
    organization: ACEEAA,
    notes: 'Part of Giving Tuesday donation drive'
  },
  {
    date: new Date(2017, 1, 3),
    amount: 12.0,
    organization: CEA 
  },
  {
    date: new Date(2017, 11, 27),
    amount: 5.0,
    organization: MFA,
    notes: 'Practice donation for Giving Tuesday donation drive'
  },
  {
    date: new Date(2017, 11, 28),
    amount: 1000.0,
    organization: ACE,
    notes: 'Part of Giving Tuesday donation drive'
  },
  {
    date: new Date(2017, 11, 28),
    amount: 1000.0,
    organization: CEAAW,
    notes: 'Part of Giving Tuesday donation drive'
  },
  {
    date: new Date(2017, 12, 1),
    amount: 10.0,
    organization: GD,
    notes: 'Birthday donation' 
  },
  {
    date: new Date(2017, 12, 30),
    amount: 5000.0, /* 2 installments of 2500$ */
    organization: CEAAW
  },
  {
    date: new Date(2017, 12, 31),
    amount: 1400.0, /* 1 installment of 750 + 1 installment of 650 */
    organization: ACEEAA
  },
  {
    date: new Date(2016, 4, 3),
    amount: 100.0,
    organization: GWR
  },
  {
    date: new Date(2016, 5, 14),
    amount: 10.0,
    organization: ACETC
  },
  {
    date: new Date(2016, 6, 1),
    amount: 40.0,
    organization: CEA 
  },
  {
    date: new Date(2016, 6, 1),
    amount: 60.0,
    organization: ACETC 
  },
  {
    date: new Date(2016, 6, 1),
    amount: 100.0,
    organization: GWR 
  },
  {
    date: new Date(2016, 6, 19),
    amount: 24.0,
    organization: GD,
  },
  {
    date: new Date(2016, 6, 25),
    amount: 62.17,
    organization: GD
  },
  {
    date: new Date(2016, 7, 4),
    amount: 100.0,
    organization: AMF
  },
  {
    date: new Date(2016, 7, 15),
    amount: 100.0,
    organization: ACETC
  },
  {
    date: new Date(2016, 7, 29),
    amount: 945.80,
    organization: AMF 
  },
  {
    date: new Date(2016, 9, 1),
    amount: 40.0,
    organization: CEA 
  },
  {
    date: new Date(2016, 10, 15),
    amount: 100.0,
    organization: CEA
  },
  {
    date: new Date(2016, 10, 23),
    amount: 4.5,
    organization: GD
  },
  {
    date: new Date(2016, 11, 8),
    amount: 130.0,
    organization: GD 
  },
  {
    date: new Date(2016, 11, 26),
    amount: 82.0,
    organization: ACETC 
  },
  {
    date: new Date(2016, 12, 5),
    amount: 31.40,
    organization: AMF 
  }
]

// functionality

//// Disaggregated Table

function getAmountString(amount) {
  return Math.round(amount).toLocaleString();
}

function getDateNumString(num) {
  // given an integer < 100, will return a two-char long string
  // representing the num
  return num < 10 ? "0" + num : num;
}

function getDateCol(date) {
  yearString = date.getFullYear().toString();
  monthString = getDateNumString(date.getMonth() + 1);
  dayString = getDateNumString(date.getDate());
  dateString = yearString + "-" + monthString + "-" + dayString;
  col = document.createElement("td");
  col.innerHTML = dateString;
  return col;
}

function getOrgCol(org) {
  span = document.createElement("span")
  span.setAttribute("title", org.desc);
  span.innerHTML = org.name;

  link = document.createElement("a")
  link.setAttribute("href", org.href)
  link.appendChild(span);

  col = document.createElement("td");
  col.appendChild(link);
  return col;
}

function getAmountCol(amount) {
  rightAlign = document.createElement("div");
  rightAlign.setAttribute("class", "text-right");
  rightAlign.innerHTML = getAmountString(amount);

  col = document.createElement("td");
  col.appendChild(rightAlign);
  return col;
}

function getNotesCol(notes) {
  text = notes == null ? "" : notes;
  small = document.createElement("small");
  small.innerHTML = text;
  col = document.createElement("td");
  col.appendChild(small);
  return col;
}

function getDetailedRow(rowData) {
  row = document.createElement("tr");
  row.appendChild( getDateCol(rowData.date) );
  row.appendChild( getOrgCol(rowData.organization) );
  row.appendChild( getAmountCol(rowData.amount) );
  row.appendChild( getNotesCol(rowData.notes) );
  return row;
}

function addDetailedRows() {
  tableInner = document.getElementById("disaggregatedTableInner");
  donations.sort(function(don1, don2) {
    return don2.date.valueOf() - don1.date.valueOf(); // sort in reverse
  });
  for(i = 0; i < donations.length; i++) {
    tableInner.appendChild(getDetailedRow(donations[i]));
  }
}

//// Summary Table

function getYearSummaryDonations() {
  yearData = {};
  for(i = 0; i < donations.length; i++) {
    year = donations[i].date.getFullYear();
    if(!(year in yearData)) { yearData[year] = 0; }
    yearData[year] += donations[i].amount;
  }
  return yearData;
}

function getSummaryRow(summaryDonations, yearValue) {
  row = document.createElement("tr");

  year = document.createElement("td");
  year.innerHTML = yearValue;

  amount = getAmountCol(summaryDonations[yearValue]);

  row.appendChild(year);
  row.appendChild(amount);

  return row;
}

function addSummaryRows() {
  tableInner = document.getElementById("summaryTableInner");
  summaryDonations = getYearSummaryDonations();
  years = Object.keys(summaryDonations);
  years.sort(function(y1, y2) { return parseInt(y2) - parseInt(y1); }) // reverse order
  for(i = 0; i < years.length; i++) {
    year = parseInt(years[i]);
    tableInner.append(getSummaryRow(summaryDonations, parseInt(year)));
  }
}

addSummaryRows();
addDetailedRows();
