import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  tableData: string[][] = [
    // Table 1 data
   
    ['Prod Support/UR', '23', '33', '43', '53', '63', '73', '83', '93', '03',],
    ['Training', '11', '22', ' ', '33', '43', '54', '32', '98', '23',],
    ['13.0', ' 32',' 33', '83', '8', '86', '87', '88', '89', '80'],
    ['Common', '81', '13', '84', '85', '86', '87', '88', '89', '810'],
    ['Total', '82', '83', '84', '95', '16', '57', '88', '89', '80']
  ];

  Data1: string[][] = [
    // Table 2 data
    ['Assoc.Professional', '82', '83', '84', '85', '86', '87', '88', '89', '80','12'],
    ['Professional-1', '82', '83', '84', '85', '86', '87', '88', '89', '810','23'],
    ['Professional-2', '82', '83', '80', '25', '16', '87', '88', '89', '20','78'],
    ['AssocMgr/SrProf', '92', '83', '84', '84', '86', '87', '88', '84', '80','93'],
    ['Manager', '82', '83', '84', '85', '86', '87', '88', '89', '80','78'],
    ['Total','34','42','42','91','29','10','17','49','20']
   
  ];

  data2: string[][] = [
    // Table 3 data
   
      ['Common', '82', '83', '84', '85', ],
    ['Prod Support/UR', '82', '83', '84','78' ],
    ['Training', '8', '83', '8', '06', ],
    ['13.0', '82', '83', '74', '85', ],
   
    ['Total','34','42','42','91',]
  ];

  data3: string[][] = [
    // Table 4 data
    ['Development', '82', '83', '84', '75','augst','june','july','augst' ],
    ['Testing', '82', '83', '84', '85','23','34','43','30'],
    ['Design', '82', '83', '84', '85','23','53','10','28' ],
    
    ['Total','34','42','42','91','320','20','16','29']
  ];

  data4: string[][] = [
    // Table 5 data
    
   ['Development', '4', '6', ' ', '5', '19', '23', ],
    ['Testing', '82', '03', '88', '85', '8', ' 87', ],
    ['Design', '82', '83', '84', '85', '86', '89', ],
    
    ['Total','34','42','42','91','29','10',]
  ];

  // Define arrays for the headings of each table
  table1Headings: string[] = [
    'RELEASE',
    'Development',
    'Testing',
    'Design',
    'Architecture&PE',
    'DevOps',
    'Technical Writer',
    'Management',
    'Prog Management',
    'Total'
  ];

  table2Headings: string[] = [
    'RELEASE',
    'Development',
    'Testing',
    'Design',
    'Architecture',
    'Testing',
    'DevOps',
    'Technical Writer',
    'Management',
    'Prog Management',
    'Total'
  ];

  table3Headings: string[] = [
    'RELEASE',
    'Active',
    'Notice',
    'Budget',
    'Total'
  ];

  table4Headings: string[] = [
    'Designation',
    'Augest',
    'September',
    'October',
    'January',
    
    'February',
    'April',
    'July',
    'Total'
  ];
  table5Headings: string[] = [
    'Designtion',
    'September',
    'October',
    'January',
    'April',
    'June',
    'Total',
   
  ];

}
