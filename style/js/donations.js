// (greatly inspired by https://www.benkuhn.net/ea/)

// organizations
var ACE = {
  shortName: 'ACE',
  name: 'Animal Charity Evaluators',
  desc: 'Charity evaluator for animal-focused charities',
  href: 'https://animalcharityevaluators.org/'
};
var ACETC = {
  shortName: 'ACETC',
  name: 'Animal Charity Evaluators Top Charities Fund',
  desc: 'Fund for ACE to redistribute to its top charities',
  href: 'https://animalcharityevaluators.org/'
};
var ACEEAA = {
  shortName: 'ACEEAA',
  name: 'Animal Charity Evaluators Effective Animal Advocacy Fund',
  desc: 'Fund for ACE to redistribute to promising charities, where money is most needed',
  href: 'https://animalcharityevaluators.org/'
};
var AMF = {
  shortName: 'AMF',
  name: 'Against Malaria Foundation',
  desc: 'Distributes insecticide-treated bed nets with assistance from local distributors',
  href: 'https://www.againstmalaria.com/'
};
var CEA = {
  shortName: 'CEA',
  name: 'Centre for Effective Altruism',
  desc: 'Grows and maintains the Effective Altruism movement',
  href: 'https://www.centreforeffectivealtruism.org/'
};
var CEAAW = {
  shortName: 'CEAAW',
  name: 'Centre for Effective Altruism - Animal Welfare Fund',
  desc: 'Fund for CEA to redistribute to organizations working on animal welfare with high expected impacts',
  href: 'https://app.effectivealtruism.org/funds/animal-welfare'
};
var CIWF = {
  shortName: 'CIWF',
  name: 'Compassion In World Farming USA',
  desc: 'Campaigning and lobbying animal welfare organisation',
  href: 'https://www.ciwf.com/'
};
var DTW = {
  shortName: 'DTW',
  name: 'Deworm the World',
  desc: 'Supports school-based deworming initiatives worldwide',
  href: 'https://www.evidenceaction.org/dewormtheworld/'
};
var GD = {
  shortName: 'GD',
  name: 'GiveDirectly',
  desc: 'Funds one-time unconditional direct cash transfers to low-income individuals in Sub-Saharan Africa',
  href: 'https://www.givedirectly.org/'
};
var GWR = {
  shortName: 'GWR',
  name: 'GiveWell Top Charities',
  desc: 'Fund for GiveWell to redistribute to its top charities',
  href: 'http://www.givewell.org/'
};
var MC = {
  shortName: 'MC',
  name: 'Malaria Consortium',
  desc: 'Funds seasonal malaria chemoprevention interventions in Africa and Asia',
  href: 'https://www.malariaconsortium.org/'
};
var MFA = {
  shortName: 'MFA',
  name: 'Mercy For Animals',
  desc: 'Funds various farmed animal advocacy programs',
  href: 'https://mercyforanimals.org/'
};
var SCI = {
  shortName: 'SCI',
  name: 'Schistosomiasis Control Initiative',
  desc: 'Funds deworming programs in sub-Saharan Africa',
  href: 'http://www3.imperial.ac.uk/schisto'
};
var SI = {
  shortName: 'SI',
  name: 'Sentience Institute',
  desc: 'Think tank dedicated to expanding humanity\'s moral circle (largely via animal advocacy)',
  href: 'https://www.sentienceinstitute.org/'
}

// data
var donations = [
  {
    date: makeUtilityDate(2019, 1, 4),
    amount: 2000.0,
    organization:  SI
  },
  {
    date: makeUtilityDate(2019, 4, 18),
    amount: 15.0,
    organization: MC,
    notes: 'Birthday donation'
  },
  {
    date: makeUtilityDate(2018, 2, 22),
    amount: 60.0,
    organization: CIWF,
    notes: 'Birthday donation'
  },
  {
    date: makeUtilityDate(2018, 9, 21),
    amount: 20.0,
    organization: GD,
    notes: 'Birthday donation'
  },
  {
    date: makeUtilityDate(2018, 10, 2),
    amount: 20.0,
    organization: DTW,
    notes: 'Birthday donation'
  },
  {
    date: makeUtilityDate(2018, 10, 12),
    amount: 24.0,
    organization: AMF,
    notes: 'Birthday donation'
  },
  {
    date: makeUtilityDate(2018, 11, 27),
    amount: 20.0,
    organization: CEA,
    notes: 'Practice donations for Giving Tuesday donation drive'
  },
  {
    date: makeUtilityDate(2018, 11, 27),
    amount: 2499.0,
    organization: CEAAW,
    notes: 'Part of Giving Tuesday donation drive'
  },
  {
    date: makeUtilityDate(2018, 11, 27),
    amount: 2499.0,
    organization: ACEEAA,
    notes: 'Part of Giving Tuesday donation drive'
  },
  {
    date: makeUtilityDate(2017, 1, 3),
    amount: 12.0,
    organization: CEA 
  },
  {
    date: makeUtilityDate(2017, 11, 27),
    amount: 5.0,
    organization: MFA,
    notes: 'Practice donation for Giving Tuesday donation drive'
  },
  {
    date: makeUtilityDate(2017, 11, 28),
    amount: 1000.0,
    organization: ACE,
    notes: 'Part of Giving Tuesday donation drive'
  },
  {
    date: makeUtilityDate(2017, 11, 28),
    amount: 1000.0,
    organization: CEAAW,
    notes: 'Part of Giving Tuesday donation drive'
  },
  {
    date: makeUtilityDate(2017, 12, 1),
    amount: 10.0,
    organization: GD,
    notes: 'Birthday donation' 
  },
  {
    date: makeUtilityDate(2017, 12, 30),
    amount: 5000.0, /* 2 installments of 2500$ */
    organization: CEAAW
  },
  {
    date: makeUtilityDate(2017, 12, 31),
    amount: 1400.0, /* 1 installment of 750 + 1 installment of 650 */
    organization: ACEEAA
  },
  {
    date: makeUtilityDate(2016, 4, 3),
    amount: 100.0,
    organization: GWR
  },
  {
    date: makeUtilityDate(2016, 5, 14),
    amount: 10.0,
    organization: ACETC
  },
  {
    date: makeUtilityDate(2016, 6, 1),
    amount: 40.0,
    organization: CEA 
  },
  {
    date: makeUtilityDate(2016, 6, 1),
    amount: 60.0,
    organization: ACETC 
  },
  {
    date: makeUtilityDate(2016, 6, 1),
    amount: 100.0,
    organization: GWR 
  },
  {
    date: makeUtilityDate(2016, 6, 19),
    amount: 24.0,
    organization: GD,
  },
  {
    date: makeUtilityDate(2016, 6, 25),
    amount: 62.17,
    organization: GD
  },
  {
    date: makeUtilityDate(2016, 7, 4),
    amount: 100.0,
    organization: AMF
  },
  {
    date: makeUtilityDate(2016, 7, 15),
    amount: 100.0,
    organization: ACETC
  },
  {
    date: makeUtilityDate(2016, 7, 29),
    amount: 945.80,
    organization: AMF 
  },
  {
    date: makeUtilityDate(2016, 9, 1),
    amount: 40.0,
    organization: CEA 
  },
  {
    date: makeUtilityDate(2016, 10, 15),
    amount: 100.0,
    organization: CEA
  },
  {
    date: makeUtilityDate(2016, 10, 23),
    amount: 4.5,
    organization: GD
  },
  {
    date: makeUtilityDate(2016, 11, 8),
    amount: 130.0,
    organization: GD 
  },
  {
    date: makeUtilityDate(2016, 11, 26),
    amount: 82.0,
    organization: ACETC 
  },
  {
    date: makeUtilityDate(2016, 12, 5),
    amount: 31.40,
    organization: AMF 
  }
]

// functionality

//// utility functions

function makeUtilityDate(y, m, d) {
  return {
    year: y,
    month: m,
    day: d,
    stringValue: y + "-" 
             + getDateNumString(m) + "-" 
             + getDateNumString(d),
    date: new Date(y, m - 1, d)
  }
}

function getDateNumString(num) {
  return num < 10 ? "0" + num : num;
}

//// Disaggregated Table

function getColWithChild(child) {
  col = document.createElement("td");
  col.appendChild(child);
  return col;
}

function getDateCol(date) {
  col = document.createElement("td");
  col.innerHTML = date.stringValue;
  return col;
}

function getOrgCol(org) {
  span = document.createElement("span")
  span.setAttribute("title", org.desc);
  span.innerHTML = org.name;

  link = document.createElement("a")
  link.setAttribute("href", org.href)
  link.appendChild(span);
  return getColWithChild(link);
}

function getAmountCol(amount) {
  roundedAmountString = Math.round(amount).toLocaleString();
  rightAlign = document.createElement("div");
  rightAlign.setAttribute("class", "text-right");
  rightAlign.innerHTML = roundedAmountString;
  return getColWithChild(rightAlign);
}

function getNotesCol(notes) {
  text = notes ? notes : "";
  small = document.createElement("small");
  small.innerHTML = text;
  return getColWithChild(small);
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
  donations.sort(function(d1, d2) {
    return d2.date.date.valueOf() - d1.date.date.valueOf(); // sort in reverse
  });
  for(const d of donations) {
    tableInner.appendChild(getDetailedRow(d));
  }
}

//// Summary Table

function getYearSummaryDonations() {
  yearData = {};
  for(const d of donations) {
    year = d.date.year;
    if(!(year in yearData)) { yearData[year] = 0; }
    yearData[year] += d.amount;
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
  for(const y of years) {
    year = parseInt(y);
    tableInner.append(getSummaryRow(summaryDonations, year));
  }
}

//// bar chart

function getOrgSummaryDonations() {
  orgData = {};
  for(const d of donations) {
    org = d.organization;
    orgName = org.shortName;
    if(!(orgName in orgData)) {
      orgData[orgName] = {"amount": 0, "name": org.name};
    }
    orgData[orgName].amount += d.amount;
  }
  return orgData;
}

function addSummaryChart() {
  plotlyData = {
    "type": "bar", 
    "marker": { "color": "#765D85" },
    "x": [], 
    "y": [],
    "text": [] };
  
  data = getOrgSummaryDonations();
  orgs = Object.keys(data);
  orgs.sort(function(o1, o2) { return data[o2].amount - data[o1].amount; }) // reverse order
  for(const org of orgs) {
    plotlyData.x.push(org);
    plotlyData.y.push(data[org].amount);
    plotlyData.text.push(data[org].name);
  }

  plotlyLayout = {
    "font": { "family": "Helvetica Neue", "color": "#555555" },
    "title": "Total Donations (USD)",
    "xaxis": { "font": { "family": "Helvetica Neue", "color": "#555555" } },
    "yaxis": { "font": { "family": "Helvetica Neue", "color": "#555555" } },
    "margin": { "l": 75, "r": 75, "b": 50, "t": 50 },
    "paper_bgcolor": "rgba(0,0,0,0)", 
    "plot_bgcolor": "rgba(0,0,0,0)",
    "xaxis": { "tickangle": 45 } };

  Plotly.newPlot("summaryChart", [plotlyData], plotlyLayout, {"responsive": true});
}

addSummaryRows();
addDetailedRows();
addSummaryChart();
