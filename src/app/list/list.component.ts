import { Component, OnInit } from '@angular/core';
import { ListService, ApiResponse } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  apiResponse: ApiResponse[] = [];
  apiResponse1: ApiResponse[] = [];
  tableHeadings: string[] = [
    'Value',
    'Count',
    'Percentage'
  ];

  constructor(private listService: ListService) { }

  ngOnInit() {
    // Fetch data for 'Release'
    this.fetchData();
    // Fetch data for 'Designation'
    this.fetchData1();
  }

  fetchData() {
    this.listService.fetchData().subscribe(
      (response) => {
        // Concatenate the response to apiResponse array
        this.apiResponse = this.apiResponse.concat(response);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  fetchData1() {
    this.listService.fetchData1().subscribe(
      (response) => {
        // Concatenate the response to apiResponse array
        this.apiResponse1 = this.apiResponse1.concat(response);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
