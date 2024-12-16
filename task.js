const scoff = [
  {
  "id": 1234,
  "violation_type": "Overtime Parking",
  "issue_date_utc": "2022-01-01 12:22:05",
  "fee_in_paisa": 2500,
  "amount_paid": 1000,
  "lpn": "JASON"
  },
  {
  "id": 4312,
  "violation_type": "Parking on Curb",
  "issue_date_utc": "2022-01-04 11:23:00",
  "fee_in_paisa": 500,
  "amount_paid": 0,
  "lpn": "JASON"
  },
  {
  "id": 8765,
  "violation_type": "Overtime Parking",
  "issue_date_utc": "2021-12-30 04:33:15",
  "fee_in_paisa": 3500,
  "amount_paid": 0,
  "lpn": "PASSPORT"
  },
  {
  "id": 8271,
  "violation_type": "Handicap",
  "issue_date_utc": "2021-12-29 22:40:34",
  "fee_in_paisa": 10000,
  "amount_paid": 9000,
  "lpn": "JASON"
  },
  {
  "id": 8730,
  "violation_type": "Meter Violation",
  "issue_date_utc": "2022-01-02 18:15:01",
  "fee_in_paisa": 1500,
  "amount_paid": 0,
  "lpn": "PASSPORT"
  },
  {
  "id": 8572,
  "violation_type": "Parking on Curb",
  "issue_date_utc": "2022-01-01 12:45:00",
  "fee_in_paisa": 6500,
  "amount_paid": 0,
  "lpn": "MADDIE"
  },
  {
  "id": 9183,
  "violation_type": "Parking on Curb",
  "issue_date_utc": "2022-01-01 21:43:14",
  "fee_in_paisa": 300,
  "amount_paid": 0,
  "lpn": "JASON"
  },
  {
  "id": 5827,
  "violation_type": "Parking on Curb",
  "issue_date_utc": "2021-12-31 20:20:05",
  "fee_in_paisa": 300,
  "amount_paid": 0,
  "lpn": "PASSPORT"
  },
  {
  "id": 4563,
  "violation_type": "Parking on Curb",
  "issue_date_utc": "2021-12-28 23:45:02",
  "fee_in_paisa": 300,
  "amount_paid": 300,
  "lpn": "PASSPORT"
  }
  ];

//  Calculate Total Fine
function calculateTotalFine(lpn) {
  let totalFines = 0;
  let totalPaid = 0;

  for (let i = 0; i < scoff.length; i++) {
    if (scoff[i].lpn === lpn) {
      totalFines = totalFines + scoff[i].fee_in_paisa; 
      totalPaid = totalPaid + scoff[i].amount_paid;   
    }
  }

  let outstandingFine = totalFines - totalPaid;
  return outstandingFine;  
}

// Task 1 - Function for LPN with outstanding fine more than 5000 paisa
function highOutstandingLPN() {
  let lpnList = [];

  for (let i = 0; i < scoff.length; i++) {
    let lpn = scoff[i].lpn;

      let outstandingFine = calculateTotalFine(lpn);

      if (outstandingFine > 5000) {
        lpnList.push(lpn);  
    }
  }

  return lpnList;  
}

// Task 1
let lpnList1 = highOutstandingLPN();
console.log(lpnList1); 


// Task 2 - All LPNs that have 2 open fines which are the same violation type
function lpnWithTwoFines() {
  let lpnOpenFines = {};

  for (let i = 0; i < scoff.length; i++) {
    let lpn = scoff[i].lpn;
    let violationType = scoff[i].violation_type;

    if (scoff[i].amount_paid < scoff[i].fee_in_paisa) {
      if (!lpnOpenFines[lpn]) {
        lpnOpenFines[lpn] = {};
      }

      if (!lpnOpenFines[lpn][violationType]) {
        lpnOpenFines[lpn][violationType] = 0;
      }

      lpnOpenFines[lpn][violationType]++;
    }
  }

  let result = [];

  for (let lpn in lpnOpenFines) {
    let violationTypes = lpnOpenFines[lpn];

    for (let violationType in violationTypes) {
      if (violationTypes[violationType] >= 2) {
          result.push(lpn);
      }
    }
  }

  return result;
}

// Task 2
let lpnList2 = lpnWithTwoFines();
console.log(lpnList2); 